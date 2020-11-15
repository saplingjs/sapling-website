# Sapling

Sapling is a Node.js framework for building websites, web apps and APIs as fast as you can imagine them.  With unrivalled speed of development, you can prototype quickly, iterate with ease, and deploy the same day.  Zero code, zero config &ndash; unless you want to.  And what's more, it comes with all the SaaS features you never want to write, all built-in.


## Introduction

Say you want to create a form that allows users to add a restaurant review.  You might create a form that looks something like this;

    <form action="/data/reviews" method="post">
    	<input type="text" name="title" placeholder="Review title" />
    	<textarea name="content" placeholder="Say a few words"></textarea>
    	<button type="submit">Post review</button>
    </form>

It's fairly straightforward &ndash; just a review title, review text and a submit button.

With some other framework, the next task would be to start building the backend to support this form.  You'd need to create database tables or migrations, and a controller to handle the view, a model or a class or something to deal with saving and retrieving reviews, validations to make sure the entries are acceptable, configure the router to show the form view and to accept requests for the backend route, and... before you know it, it's 5pm, and this is all you did today.

With Sapling... **it already works, as-is.**

No, seriously.  With Sapling, all data is handled by its special and powerful dynamic data endpoint.  It sounds complicated, but it really isn't:

- When you send a `GET` request to `/data/reviews`, you'll get a list of all reviews.
- When you send a `GET` request to `/data/reviews/_id/1`, you'll get the review with an `_id` of `1`.
- When you send a `POST` request to `/data/reviews`, you'll create a new review with whatever POST values you send.
- When you send a `POST` request to `/data/reviews/_id/1`, you'll edit the review with an `_id` of `1` with whatever POST values you send.
- When you send a `DELETE` request to `/data/reviews/_id/1`, you'll delete the review with an `_id` of `1`.

?> **So, how do you create the `reviews` collection, then?**  You don't have to.  Just by sending a `POST` request to *anything* beginning with `/data/`, Sapling will save the data, and make it available at the corresponding `GET` routes as above.

Say you then want to show a list of the reviews that have been posted.  This is also super easy.  By default, Sapling uses the [Nunjucks](https://mozilla.github.io/nunjucks/) templating language, with a few custom tags to make things easier.

    {{ set reviews as get /data/reviews }}
     
    {% for review in reviews %}
    <h2>{{ review.title }}</h2>
    <p>{{ review.content }}</p>
    {% endfor %}

The `set` tag fetches the reviews that have been posted with the form above, and the `for` loop below goes through each review, and displays the fields that were defined in the form.


## Let's get started!

Now that you've got an idea of how Sapling works, let's get started with installing the required bits!
