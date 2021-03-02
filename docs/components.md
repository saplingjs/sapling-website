# Vue components

We've created a suite of dynamic Vue.js frontend components that speed up some perennial frontend coding tasks.  They are entirely optional, but using them allow you to speed through some of the most common view markup scenarios often with a single line.


## Installation

Easiest way to install the Vue components is via the [CLI](/cli).  However, if you prefer, you can install them manually via npm;

```shell
npm install --save @sapling/vue-components
```

Or via Yarn;

```shell
yarn add @sapling/vue-components
```


## Login form

To display a login form, you can include it very simply;

```html
<login></login>
```

This will display an AJAX-based login form that will validate the user input and provide real-time feedback to the user.

It also includes all UI and functionality required for password reset.

If you wish to redirect the user once login is successful, you can pass that in as a property;

```html
<login redirect="/app"></login>
```

?> For the moment, the login component does not work with [custom identifiables](/authentication#custom-identifiables) in the `users` model - only identification via `email` is supported.


## Signup form

To display a signup form, it's similarly simple;

```html
<signup></signup>
```

This will display an AJAX-based signup form that will validate the user input and provide real-time feedback to the user, including a password strength meter.  It will also ask the user to type in their password twice, and validate whether they match.

If you wish to redirect the user once signup is successful, you can pass that in as a property;

```html
<signup redirect="/app"></signup>
```

If you want to disable the secondary password field for a more straightforward signup flow, you can do that too;

```html
<signup :password-confirmation="false"></signup>
```

?> Similar to the login component, the signup also doesn't work with [custom identifiables](/authentication#custom-identifiables) in the `users` model for the moment.


## Recovery form

During password reset, the user will receive an email with a link to a reset page.  If you'd rather not spend time writing that reset page, you can do it in one component;

```html
<recovery authkey="{{ authkey }}"></recovery>
```

You must pass the `authkey` to the component; it will refuse to display the form otherwise.  Typically this will be provided in the GET parameters.

Redirection after a successful recovery is also possible;

```html
<recovery authkey="{{ authkey }}" redirect="/login"></recovery>
```


## User menu

To display the current user's name, as well as a logout button (for example, for the header of the app);

```html
<user></user>
```

If you'd like to display a collapsible drop-down menu of options along side the logout option, you can pass those options as list items inside the component;

```html
<user>
    <li><a href="/my-account">My account</a></li>
    <li><a href="/help">Help &amp; FAQ</a></li>
</user>
```
