# Permissions

You can control which users can access which [routes](/routes) and data API requests.  Permissions are completely optional, and by default, every route and data API request from anyone is accepted.  In [production mode](/production), defining permissions for all `POST` and `DELETE` data API requests is mandatory.


## User roles

The built-in users model has a `role` key, which defines the level of access for each user.  Sapling typically deals with two explicit roles and two inferred roles out of the box:

| Role         | Description                                                                                              |
|--------------|----------------------------------------------------------------------------------------------------------|
| `anonymous`  | Any visitor to the site that has not logged in.  Cannot be assigned to a real user.                      |
| `user`       | A user who has logged in.  This is the default role every new account uses, unless otherwise specified.  |
| `admin`      | Special user role that is able to access all routes regardless of the permissions configuration.         |
| `owner`      | The user who originally created the record in question.  Only applicable to the data API.                |

Aside from these four roles, you can assign any user any role you wish, and create corresponding permissions.  You cannot prohibit users with the `admin` role from accessing any route or data API request.

You cannot assign the `anonymous` or `owner` roles to any actual user account, as these are dynamic.  `anonymous` is used to describe visitors who have not logged in.  The `owner` role is only applicable to permissions of `POST` and `DELETE` requests to the data API, and refers to the user who originally created the record in question.


## Defining permissions

Permissions are defined in `permissions.json` in the root of the project, as a JSON object where the key is the method and route, and the value is either a string or an array of strings, representing the user roles that are allowed to access the route.  All other requests will be denied.

For example, if you wanted to make sure that **only logged-in users** can access your `/account` route, you would define like this:

    {
        "GET /account": "user"
    }

It works the same way for controlling access to the data API.  If you wanted to make sure that **only logged-in users** are able to create reviews, users are able to only edit **their own reviews** (and not be able to edit reviews posted by someone else), and **only admins** are able to edit them, you might create a `permissions.json` like this:

    {
        "POST /api/reviews/*/*": "owner",
        "POST /api/reviews": "user",
        "DELETE /api/reviews": "admin"
    }

The first definition makes sure that users with the `user` role are able to send `POST` requests to the `reviews` model in the data API.  This precludes those with the `anonymous` role, i.e. users who have not logged in to a valid account.  However, `admin` users will be able to also do this, as all routes remain available to them.

The second definition makes sure that only users with the `admin` role are able to send a `DELETE` requests to the `reviews` model in the data API.  This will preclude those with `user` or `anonymous` roles.

!> Note, that the third definition (`"DELETE /api/reviews"`) will apply to `DELETE` requests to both `/api/reviews` and e.g. `/api/reviews/_id/1`


### Priority

?> Much like routes, the permissions are also processed by Sapling in order, and the first matching permission setting is the only one that is used.  Therefore, you should specify more specific routes first.

The `*` is a wildcard for any matching segment.  Because editing reviews via the data API requires defining four segments in the URL, this reserves editing reviews to only those with the `admin` role.

Creating reviews only requires two segments, so the first definition in the above example doesn't match those requests.  They will take on the second definition, which gives create access to those with the `user` role.


### Explicit openness

Sometimes, you may need to create a permission definition that explicitly allows anyone access.

You can either create a definition for `anonymous` or for the wildcard `*` to do this:

    {
        "GET /about": "*",
        "GET /faq": "anonymous"
    }

Both of the above definitions work the same, and allow any user, logged in or not, to access the routes.


## Custom roles

You can create additional user roles simply by creating a user account with that role name in the `role` key.  All custom roles are treated like `user` is, and therefore you have to explicitly enable access to each route.

For example, if you wanted to create a `moderator` role for users that should have access to edit or delete anyone's reviews, you might change the above example to something like this:

    {
        "POST /api/reviews/*/*": ["moderator", "owner"],
        "POST /api/reviews": ["moderator", "user"],
        "DELETE /api/reviews/_id/*": "moderator",
        "DELETE /api/reviews": "admin"
    }

The first two definitions are changed into arrays, so that both the original value and the new `moderator` role can be accommodated at the same time.

A new defition was added into third place, so that `moderator`s can delete any one specific review by the `_id` key.  However, deleting reviews by any other `key` or deleting all reviews is still something only `admin`s are able to do.

The third definition could've been an array as well (e.g. `["moderator", "admin"]`), but it would've been redundant, since all `admin` users have access to all routes anyway.  Therefore, defining just `moderator` is sufficient.