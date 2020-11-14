# Data

Sapling's built-in dynamic data interface is what makes developing with Sapling so fast.  With the data API, you never need to write backend code for basic CRUD operations.

The data API is available at `/data`, and you can use it both for AJAX requests as well as regular form actions.  Depending on the headers sent, Sapling will respond with either JSON or a view.

Depending on the URL segments provided and the HTTP method used, Sapling will behave in different ways on the same URL.


## URL scheme

A typical data API URL will look something like this:

    GET /data/posts/author/2/category/5,6

The URL will always begin with `/data`.  The second segment (in this case `posts`) is the name of the collection/table being selected.  Successive segments are read in pairs, and define the key and value(s) for conditions (or `WHERE` clauses, if you're familiar with SQL).

Therefore, the above URL will fetch all records from the `posts` collection, where the value of the `author` field is `2`, **and** the value of the `category` field is either `5` or `6`.


## Create

To create a new record in a collection, send a `POST` request **without** any conditions:

    POST /data/posts

Include the data for the new record as `POST` values in the request payload.  This will happen automatically if you're using it as a `<form>` action.

If a [model](/models) has been defined for `posts`, any values for defined fields will be validated against the validation rules in the model.  If the request contains any invalid values for fields defined in a model, Sapling will respond with an error.  Any fields that haven't been defined in a model will be saved as-is.

If strict mode or [production mode](/production) is on, requests to collections without a corresponding model will result in an error.  Fields that aren't defined in the model will be silently ignored.

Sapling will respond with the newly created record.


## Read

To fetch all records in a given a collection, send a `GET` request:

    GET /data/posts

Sapling will respond with JSON of all records in the `posts` collection.  If the request comes from the browser, and Sapling is not in strict or production modes, Sapling will respond with a prettified HTML page, making dirty in-browser data browsing easier.

!> The responses are not paginated or limited in any way, so fetching every single record from a large collection would probably result in performance degradation.

You can define conditions to fetch more specific records:

    GET /data/posts/author/2

This will return all records in `posts`, where the `author` field has a value of `2`.

You can chain multiple conditions one after the other:

    GET /data/posts/author/2/category/5

This would return all posts where the `author` is `2`, **and** `category` is `5`.

You can also filter for multiple values using a comma in the value segment:

    GET /data/posts/author/2/category/5,6

This will fetch all records from the `posts` collection, where the value of the `author` field is `2`, **and** the value of the `category` field is either `5` or `6`.


### Sorting

By default, the records come in whatever order they happen to be in the database.  However, in most cases, you'll want them in a specific order.

You can do this by adding a `sortBy` query string variable like so;

    GET /data/posts?sortBy=_created,desc

The value is split by a comma, with the first part being the field to sort by, and the second part being either `"asc"` or `"desc"` to define ascending or descending order, respectively.

?> In addition to `sortBy`, you can also use `sort`, `orderBy`, or `order` to do the same thing - they're all aliases of the same thing.  It's also not case-sensitive.


### Limiting

You can also limit the maximum number of records to be returned for a given `GET` query, by using the `limit` query string variable:

    GET /data/posts?limit=10

This will return at most 10 records from the `posts` collection.


## Update

To modify an existing record, send a `POST` request **with** conditions:

    POST /data/posts/category/5

This would update every record in `posts` where `category` has a value of `5`, with whatever data is sent across in the `POST` values in the request payload.

Only the fields sent in the `POST` payload will be updated.  Existing fields and values that are omitted from the request will be left alone.

If a [model](/models) has been defined for `posts`, the sent value for any defined fields will be validated against the validation rules in the model.  If the request contains any invalid values for fields defined in a model, Sapling will respond with an error.  Any fields that haven't been defined in a model will be saved as-is.

If strict mode or [production mode](/production) is on, requests to collections without a corresponding model will result in an error.  Fields that aren't defined in the model will be silently ignored.

Sapling will respond with the updated record(s).

?> If no records match the conditions, nothing will be updated or saved in the database, but the request will return a success.

The easiest way to ensure you're only modifying a single record (and that it is the record you intend) is to use the built-in `_id` as the condition:

    POST /data/posts/_id/2

This would only modify the record with an `_id` of `2`.


## Delete

To delete one or more records, send a `DELETE` request:

    DELETE /data/posts/_id/2

This would delete the record in `posts` with an `_id` of `2`.  Sapling will respond with a generic success message.

!> Conditions are not mandatory for `DELETE` requests.  Therefore, sending `DELETE /data/posts` will delete all records from the `posts` collection.  It's almost always a good idea to protect conditionless `DELETE` requests in the [permissions configuration](/permissions).


## Redirection

By default, Sapling will respond to each data API request with either JSON or a generic HTML view.  However, this is probably not ideal, if you're sending `POST` requests to the data API from a form action like this:

    <form method="post" action="/data/posts"> .. </form>

You can add a query string variable `redirect` to define a URL to redirect to after a successful request:

    <form method="post" action="/data/posts?redirect=/posts"> .. </form>

This would send the user to `/posts` after the data API request has succeeded.  You can also define variables for the to-be created/updated record in the `redirect` value:

    <form method="post" action="/data/posts?redirect=/posts/:_id"> .. </form>

This would supplement the `redirect` value with the `_id` field of the record once it is created - therefore, if e.g. the `_id` of the record created by submitting this form is `15`, the user will then be redirected to `/posts/15`.


## CORS

[CORS headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) allow the `/data` endpoints to be used by external clients (e.g. other websites, mobile apps, etc) outside of the app you're building.

You can control whether this is enabled with the `"cors"` setting in [configuration](/config).  It's **on by default**, except if [production mode](/production) is on, in which case you need to explicitly set `"cors"` to `true` to enable it.