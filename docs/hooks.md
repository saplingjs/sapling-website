# Hooks

Hooks are a simple way to execute your own code from any Sapling route.  It's the simplest way to create custom `/api` methods, filter or augment [data API](/data) responses, provide additional variables to [views](/views) and more.

All the hooks files must live under the `hooks/` directory in the project root.  The rest is up to you - organise the files in whatever way suits you.


## Connecting a hook

To get Sapling to call your hook, you must let Sapling know about it in `hooks.json`.  The format of the file is very similar to the [permissions](/permissions#defining-permissions) file; it's a JSON object, where the key is the combination of HTTP method and URL (with optional wildcards), and the value is the hook file that will be called when that route is called.

    {
        "GET /api/upload": "upload.js" 
    }

Like permissions, hooks are exclusive; if multiple hook definitions fit the given request, only the first matchin hook will be called.  However, the same hook file can be used for multiple routes.


## Hook files

Sapling expects each hook file to act as a module that exports a single function which will be executed as the hook.  Everything else about the structure of the file, coding style, dependencies etc is up to you.

The function will be passed five parameters;

| Parameter  | Description                                                                   |
|------------|-------------------------------------------------------------------------------|
| `app`      | The Sapling instance, containing the config and all internal methods.         |
| `req`      | The [request object](https://expressjs.com/en/api.html#req)                   |
| `res`      | The [response object](https://expressjs.com/en/api.html#res)                  |
| `data`     | The current data.  Only populated in hooks attached to the [data API](/data)  |
| `next`     | Optional callback function, [see below](#responding)                          |

An example hook file might look like this;

    module.exports = function(app, req, res, data, next) {
        // Do stuff here

        next(app, req, res, data);
    };

The `data` parameter will only be populated in hooks that are attached to a [data API](/data) `GET` or `POST` route - the hook is called after fetching the data, but before Sapling responds.  This makes hooks a great way to further filter or preprocess data, while still leaving Sapling to deal with the response.


## Responding

Each hook will be passed a callback function as the fifth parameter.  If you'd like Sapling to continue its normal execution after your hook has executed, you must call this callback with the four other parameters.

If you prefer not to let Sapling do its thing after your hook, you can ignore the callback, and handle the response yourself with the `res` object;

    module.exports = function(app, req, res, data, next) {
        // Do stuff here

        res.send(200);
    };

!> If you neither call the callback nor send your own response via `res` or `Response`, the route will hang indefinitely.

### Response object

Sapling also includes a `Response` object you can optionally use to respond to requests yourself the same way Sapling does.

You can use it to send JSON data (either as a JS object literal or as a string);

    const Response = require("@sapling/sapling/lib/Response");

    module.exports = function(app, req, res, data, next) {
        new Response(app, req, res, null, [{"foo": "bar"}]);
    };

To send parsed HTML;

    const Response = require("@sapling/sapling/lib/Response");

    module.exports = function(app, req, res, data, next) {
        new Response(app, req, res, null, "<strong>Hello</strong>");
    };

Or, to send an error:

    const Response = require("@sapling/sapling/lib/Response");
    const SaplingError = require("@sapling/sapling/lib/SaplingError");

    module.exports = function(app, req, res, data, next) {
        new Response(app, req, res, new SaplingError(err));
    };
