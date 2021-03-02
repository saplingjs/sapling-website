# Routing

Routing means mapping specific [views](/views) to specific URLs, so that the correct page is shown for each URL.  Sapling can do routing either automatically, and/or you can define the routes manually in a `routes.json` file.


## Automatic routing

By default, Sapling handles routing automatically.  This maps the contents and folder structure of the `views/` directory into the corresponding URLs.

For example, the view in `views/reviews.html` will automatically be accessible to users at `/reviews` (without the `.html` file extension).  A view at `views/review/new.html` will be available at `/review/new`.

| Example view path                | Automatic route        |
|----------------------------------|------------------------|
| `views/index.html`               | `/`                    |
| `views/reviews.html`             | `/reviews`             |
| `views/review/new.html`          | `/review/new`          |
| `views/users/index.html`         | `/users`               |
| `views/users/profile/view.html`  | `/users/profile/view`  |

Automatic routing will ignore any files in the `views/` folder that doesn't use the file extension defined in `extension` in the config (by default, this is `.html`).

?> Any view, and views inside any folder, that *begin* with `_` will not be accessible via auto-routing.  For example, `views/_header.html` and `views/_templates/header.html` would both be inaccessible.  Use this to create partial views (like headers, footers, etc) that you can re-use in other views, but which shouldn't be viewed on their own.

!> If there are two different views that could have the same route (e.g. `views/users.html` and `views/users/index.html`), the file (`users.html`) is used rather than the `index.html` inside an identically named folder.

If you prefer not to use automatic routing, and want to define all routes explicitly in `routes.json`, you can turn off automatic routing in the config by setting `autoRouting` to `false`.


## Manual routing

You can define routes manually by creating `routes.json` in the project root.

The `routes.json` file is just a JSON file containing an object where the key is the route with a preceding slash, and the value is the view (relative to `views/`) that that route should correspond to.

For example:

```json
{
    "/reviews": "reviews.html",
    "/review/new": "review/new.html"
}
```

If auto-routing is on and `routes.json` is defined, it will be merged with the auto-routing.  This will allow you to override generated auto-routes, or supplement the auto-routes with e.g. routes that have parameters (see below), which obviously can't be created with auto-routes.


### Parameters

Often, it's useful to define parameters in the URL.  For example, if you wanted a page displaying only one specific review, you might like the route to be something like `/review/12`, where `12` is the unique ID of the review.

You can do this with the colon notation:

```json
{
    "/review/:id": "review/view.html"
}
```

Now, the `views/review/view.html` view is injected with the variable `id`, which contains `"12"` when the user visits `/review/12`.

!> The first matching route is the one that's used; therefore, in cases where parameters may make two similar routes clash (`/review/new` and `/review/:id`), define the more specific route first.


## Reserved routes

Sapling only has two reserved routes, which cannot be used to route to a view, either automatically or manually.

* `/data/*` - used for the [data API](/data)
* `/api/*` - used for internal functionality routes, such as [authentication](/authentication)

?> Normally, any attempt to create routes beginning with `/data` or `/api` will fail silently.  In strict mode, Sapling will refuse to run with automatic or manual routes that clash with these reserved routes.
