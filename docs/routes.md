# Routing

Routing means mapping specific [views](/views) to specific URLs, so that the correct page is shown for each URL.  Sapling can do routing either automatically, or you can define the routes manually in a `routes.json` file.

!> When Sapling is running in [production mode](/production), or its configuration contains `"strict": true`, automatic routing is turned off, and you must define a `routes.json`.


## Automatic routing

By default, Sapling handles routing automatically.  This maps the contents and folder structure of the `views/` directory into the corresponding URLs.

For example, the view in `views/reviews.html` will automatically be accessible to users at `/reviews`.  A view at `views/review/new.html` will be available at `/review/new`.

| Example view path                | Automatic route        |
|----------------------------------|------------------------|
| `views/index.html`               | `/`                    |
| `views/reviews.html`             | `/reviews`             |
| `views/review/new.html`          | `/review/new`          |
| `views/users/index.html`         | `/users`               |
| `views/users/profile/view.html`  | `/users/profile/view`  |

?> Any view, and views inside any folder, that *begin* with `_` will not be accessible via auto-routing.  For example, `views/_header.html` and `views/_templates/header.html` would both be inaccessible.  Use this to create partial views (like headers, footers, etc) that you can re-use in other views, but which shouldn't be viewed on their own.

!> If there are two different views that could have the same route (e.g. `views/users.html` and `views/users/index.html`), the file (`users.html`) is used rather than the `index.html` inside an identically named folder.

!> Automatic routes do not include the `.html` file extension.


## Manual routing

You can define routes manually by creating `routes.json` in the project root.  If you create this file, auto-routing will be turned off.

When in production mode or strict mode, you must define a `routes.json`, as auto-routing is not available.

The `routes.json` file is just a JSON file containing an object where the key is the route with a preceding slash, and the value is the view (relative to `views/`) that that route should correspond to.

For example:

    {
        "/reviews": "reviews.html",
        "/review/new": "review/new.html"
    }


### Parameters

Often, it's useful to define parameters in the URL.  For example, if you wanted a page displaying only one specific review, you might like the route to be something like `/review/12`, where `12` is the unique ID of the review.

You can do this with the colon notation:

    {
        "/review/:id": "review/view.html"
    }

Now, the `views/review/view.html` view is injected with the variable `id`, which contains `"12"` when the user visits `/review/12`.

!> The first matching route is the one that's used; therefore, in cases where parameters may make two similar routes clash (`/review/new` and `/review/:id`), define the more specific route first.
