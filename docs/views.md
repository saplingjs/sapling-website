# Views

Views are files that contain your app's HTML markup.  Each time a user visits a page of your Sapling project, what they see is a view.

Views contain standard HTML, and by default, the [Nunjucks](https://mozilla.github.io/nunjucks/) templating language is also used.  However, even if you're familiar with how Nunjucks works, Sapling adds a few extra tags to make things smoother.


## Basic templating

All views are files ending in `.html`, and they are located in the `views/` directory in your project.  Both of these facts can be customised in `config.json`, but typically you won't need to.

By default, Sapling will use auto-routing whenever the project doesn't contain a `routes.json` (which the default project doesn't).  What this means is that the view files will immediately and automatically correspond to a public route. Learn more about routing [here](/routes).

You can create whatever naming conventions and subdirectories inside `views/` that makes sense to you.  However, because the views are used in routing and code, keeping to normal alphanumeric names is probably advisable.  Any view, and views inside any folder, that *begin* with `_` will not be accessible via auto-routing.


## Nunjucks

The templating language used in Sapling by default is [Nunjucks](https://mozilla.github.io/nunjucks/).  To avoid duplication, we won't go through all of Nunjucks' basic features here - if you're not familiar with it yet, we recommend you check their [official documentation](https://mozilla.github.io/nunjucks/templating.html) first, before continuing.

?> If you don't like Nunjucks, there are alternative templating languages available.  It's even possible for you to add support for your favourite templating language, if it isn't supported yet.  Any language that can be compiled in Node and supports custom tags can theoretically be used.  All that's required for support is to write wrappers for the custom tags Sapling requires.

The content below goes through the custom tags in Sapling.


## Custom tags

### set

The `set` tag will fetch data from a valid data API call and expose it in a variable.  This is the main way that you can show data in a view.

For instance:

    {{ set reviews as get /api/reviews }}
     
    {% for review in reviews %}
    <h2>{{ review.title }}</h2>
    <p>{{ review.content }}</p>
    {% endfor %}

The `set` tag gets the list of reviews from `/api/reviews`, and exposes it in a variable called `reviews`.


### post

The `post` tag will fire a `POST` request to the given data API, immediately on pageload.  This could be useful for tracking pageviews, for instance.  As an example:

    {{ post /api/statistics?type=click }}

The above code would create a new record in the `statistics` collection, with the `type` key set with the value `"click"`.


### delete

Much like `post`, the `delete` tag will fire an immediate data API `DELETE` request on pageload.  For example:

    {{ delete /api/statistics?id=1 }}

This would delete any record in the `statistics` collection, where the `id` key has the value of `"1"`.
