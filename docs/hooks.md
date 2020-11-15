# Hooks

Hooks are a simple way to execute your own code from any Sapling route.  It's the simplest way to create custom `/api` methods, filter or augment [data API](/data) responses, provide additional variables to [views](/views) and more.

All the hooks files must live under the `hooks/` directory in the project root.  The rest is up to you - organise the files in whatever way suits you.


## Connecting a hook

To get Sapling to call your hook, you must let Sapling know about it in `hooks.json`.  The format of the file is very similar to the [permissions](/permissions#defining-permissions) file; it's a JSON object, where the key is the combination of HTTP method and URL (with optional wildcards), and the value is the hook file that will be called when that route is called.

    {
        "GET /api/upload": "upload.js" 
    }

Unlike permissions however, hooks aren't exclusive; if multiple hook definitions fit the given request, **all** those hooks will be called, in the order they are defined.  Additionally, the same hook file can be used for multiple routes.


## Hook files

Sapling expects each hook file to act as a module that exports a single function which will be executed as the hook.  Everything else about the structure of the file, coding style, dependencies etc is up to you.

The function will be passed at least four parameters;

| Parameter  | Description                                                            |
|------------|------------------------------------------------------------------------|
| `app`      | The Sapling instance, containing the config and all internal methods.  |
| `req`      | The [request object](https://expressjs.com/en/api.html#req)            |
| `res`      | The [response object](https://expressjs.com/en/api.html#res)           |
| `cb`       | Optional callback function, [see below](#responding)                   |

Depending on the type of route, additional parameters may be passed.

An example hook file might look like this;

    module.exports = function(app, req, res, cb) {
        // Do stuff here

        if(cb) cb.call(app, req, res);
    };


## Responding

If the hook URL is already a valid route in Sapling, the hook will be passed a callback function.  Calling this callback function with all the parameters passed onto the hook (however they may be modified), will pass the buck back to Sapling to continue the execution as normal.

If the hook URL would otherwise be a 404 (or if you prefer not to let Sapling do its thing afterwards), you can ignore the callback, and handle the response yourself with the `res` object;

    module.exports = function(app, req, res, cb) {
        // Do stuff here

        res.send(200);
    };

### Response object

Sapling also includes a `Response` object you can optionally use to respond to requests yourself.

You can use it to send JSON data (either as a JS object literal or as a string);

    const Response = require("@sapling/sapling/lib/Response");

    module.exports = function(app, req, res, cb) {
        new Response(app, req, res, null, [{"success": true}]);
    };

To send parsed HTML;

    const Response = require("@sapling/sapling/lib/Response");

    module.exports = function(app, req, res, cb) {
        new Response(app, req, res, null, "<strong>Hello</strong>");
    };

Or, to send an error:

    const Response = require("@sapling/sapling/lib/Response");
    const SaplingError = require("@sapling/sapling/lib/SaplingError");

    module.exports = function(app, req, res, cb) {
        new Response(app, req, res, new SaplingError(err));
    };
