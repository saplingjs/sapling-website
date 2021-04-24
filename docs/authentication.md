# Authentication

Sapling has end user authentication built-in, with logging in and out, signing up and resetting a lost password via email.  Using the [Vue components](/components) is the simplest way to use the authentication methods, but if you'd prefer to write your own frontend, you can do so with the methods below.

The authentication methods work off of the back of the [users model](/models#users), but you can augment this model as you wish to unlock additional built-in functionality.


## Logging in and out

You can attempt authentication by sending a `POST` request like so;

```http
POST /api/user/login
    email:     user@example.com
    password:  password123
```

The request will return an error in case either of the required `POST` payload fields `email` or `password` are missing, or in case the given combination doesn't correspond to an active account.

If the request is successful and the user was authenticated, the request will return the user object.

You can then log the user out with a simple `GET` request;

```http
GET /api/user/logout
```

This request will always succeed, regardless of whether the user was already logged in at the time or not.  It will return nothing.


### Redirection

In case you use these methods as `<form>` actions or `<a>` hrefs, you probably want to redirect the user somewhere else after a successful operation.  You can do this with the `redirect` query string parameter;

```http
POST /api/user/login?redirect=/app
GET /api/user/logout?redirect=/
```


### Custom identifiables

By default, the only field that identifies a user (i.e. acts as their "username") is `email`.

However, if you define your own [users model](/models#users), you can add additional fields as identifiables that can then be used as a "username" field.

For instance, to add a new field called `username`, you can define a `users` model like this;

```json
{
    "username": {
        "type": "String",
        "required": true,
        "unique": true,
        "identifiable": true,
        "maxlen": 25
    }
}
```

Then, you can send a login request successfully like so, and omit the `email` field altogether;

```http
POST /api/user/login
    username:  user
    password:  password123
```

If you don't know which `identifiable` the user is going to use (i.e. a login form with a combined "Username or email address" field), you can use the magic `_identifiable` field in the payload instead;

```http
POST /api/user/login
    _identifiable:  user
    password:       password123
```

```http
POST /api/user/login
    _identifiable:  user@example.com
    password:       password123
```

Both above requests will check all `identifiable` fields in the model (in this case, `email` and `username`) for a match for the value of the `_identifiable` parameter, and providing the user exists and the credentials are correct, the request will succeed.


## Current session

To check if the current user is logged in (and to get their user object), you can send a simple `GET` request;

```http
GET /api/user/logged
```

The request will always succeed, and return the user object if the user is logged in, or `false` if the user is currently logged out.


## Creating an account

To create an account, send a `POST` request like so;

```http
POST /api/user/register
    email:     user@example.com
    password:  password123
```

The request will create an account in the `users` collection.  If either the `email` or `password` fields are missing, the request will return an error.  Otherwise, it will return the user object of the newly created user.

The user will also be immediately logged in, unless the request is made by a user that's already logged in.

!> Always use the `/api/user/register` route to create new users, never create a user by sending `POST` requests directly to `/data/users`.  The API method takes care of hashing the password.


### Custom fields

Any other fields sent in the request will also be saved into the user account;

```http
POST /api/user/register
    email:      user@example.com
    password:   password123
    firstname:  Joanna
    lastname:   Public
```

If you've defined your own [users model](/models#users), these fields will be validated against the rules defined in there, and the request will fail with an error if the values fail validation.  However, defining the model is not required in order to send custom fields.

?> Any fields named `password2`, `confirm_password`, or `password_confirm` will not be saved into the database, and will instead be ignored.  This is to prevent accidentally saving a password confirmation field value into the database unhashed.


### Defining the user role

If the user sending the request to `/api/user/register` is not logged in, the new user will be created with the `member` role.

However, if the user sending the request is logged in, a role may be specified for the new user in the request;

```http
POST /api/user/register
    email:     user@example.com
    password:  password123
    role:      moderator
```

The role specified in the request must be equal to or lesser than the current user's role, otherwise the request will fail with an error.


### Redirection

In case you use this method as `<form>` action, you probably want to redirect the user somewhere else after a successful operation.  You can do this with the `redirect` query string parameter;

```http
POST /api/user/register?redirect=/app
```


## Editing an account

To let the user modify their own account (including setting a new password), you can make a `POST` request like so;

```http
POST /api/user/update
    password:  password123
    lastname:  Public-Appleseed
```

This will change the value of the user's `lastname` field to `"Public-Appleseed"`.

The `password` field is mandatory, and must match the user's current password in order to authorise the changes.  If it's missing or doesn't match the user's current password, the request will fail with an error.

If you've defined your own [users model](/models#users), these fields will be validated against the rules defined in there, and the request will fail with an error if the values fail validation.

?> This route can only be used by a logged-in user to update their own account.  If you need one user to make changes to another (i.e. an admin modifying a user account), use the normal [data API](/data).


### Changing password

Changing one's password also works through the `/api/user/update` route, with a `new_password` field;

```http
POST /api/user/update
    password:      password123
    new_password:  BetterPassword1991!
```

The value of `password` must match the user's current password, and the value of `new_password` must pass the validation rules of the `password` field in the model.  If either isn't the case, the request will fail with an error.


## Reset password

If the user forgot their password, Sapling has a built-in two-step process for resetting the password.

First, the user must request a password reset email, which happens with a `POST` request;

```http
POST /api/user/forgot
    email:  user@example.com
```

The request will only fail if the `email` field is missing or doesn't meet the validation rules of the `users` model.  If the request is formed perfectly, the request will always succeed, regardless of whether a valid user account exists for that `email` or not.

Sapling will [send the user an email](/notifications) with a link to reset their password, with a unique auth key.  You can customise this email by creating a file in `static/mail/lostpass.html`.

?> All the rules with [custom identifiables](#custom-identifiables) work here too.

The second part requires the user to send the auth key and their new password to another `POST` request;

```http
POST /api/user/recover
    authkey:       92d4a4f3a6eec0d8115cf7598e4a2a50
    new_password:  BetterPassword1991!
```

The request will fail if either `authkey` or `new_password` are missing, if they don't conform to the validation rules in the `users` model, if the `authkey` doesn't match what was generated in the previous step, or if it's been more than 2 hours since the auth key was generated.

Otherwise, the password will be changed and the request will return a success message.  The user will not be automatically logged in.


### Redirection

Like above, both of these requests will also support redirection on success;

```http
POST /api/user/forgot?redirect=/forgot-success
POST /api/user/recover?redirect=/login
```
