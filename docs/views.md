# Views

Views are files that contain your app's HTML markup.  Each time a user visits a page of your Sapling project, what they see is a view.

Views contain standard HTML, and by default, the [Nunjucks](https://mozilla.github.io/nunjucks/) templating language is also used.  However, even if you're familiar with how Nunjucks works, Sapling adds a few extra tags to make things smoother.


## Basic templating

All views are files ending in `.html`, and they are located in the `views/` directory in your project.  Both of these facts can be customised in `config.json`, but typically you won't need to.

By default, Sapling will use auto-routing to display your views.  What this means is that the view files will immediately and automatically correspond to a public route. Learn more about routing [here](/routes).

You can create whatever naming conventions and subdirectories inside `views/` that makes sense to you.  However, because the views are used in routing and code, keeping to normal alphanumeric names is probably advisable.  Any view, and views inside any folder, that *begin* with `_` will not be accessible via auto-routing.


## Nunjucks

The templating language used in Sapling by default is [Nunjucks](https://mozilla.github.io/nunjucks/).  To avoid duplication, we won't go through all of Nunjucks' basic features here - if you're not familiar with it yet, we recommend you check their [official documentation](https://mozilla.github.io/nunjucks/templating.html) first, before continuing.

?> If you don't like Nunjucks, there are alternative templating languages available.  It's even possible for you to [add support for your favourite templating language](/drivers), if it isn't supported yet.  Any language that can be compiled in Node and supports custom tags can theoretically be used.

The content below goes through the custom tags in Sapling.


## Custom tags

### get

The `get` tag will fetch data from a valid [data API](/data) call and expose it in a variable.  This is the main way that you can show data in a view.

For instance:

```nunjucks
{% get reviews = '/data/reviews' %}
    
{% for review in reviews %}
<h2>{{ review.title }}</h2>
<p>{{ review.content }}</p>
{% endfor %}
```

The `get` tag gets the list of reviews from `/data/reviews`, and exposes it in a variable called `reviews`.
