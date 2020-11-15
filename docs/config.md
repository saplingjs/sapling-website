# Configuration

All the settings for how Sapling should behave are in the `config.json` file in the root of your project.  While some behaviour also changes automatically (for example, creating a `routes.json` file automatically turns off automatic routing), everything can be ultimately controlled by changing `config.json`.

The `config.json` file consists of a JSON object, where keys are the settings you wish to change, and the values are the setting values you wish to change them to;

    {
        "name": "my-awesome-app",
        "port": 3000,
        "db": {
            "driver": "MongoDB"
        }
    }

Every project needs a `config.json`, or it will not run.  Only the `name` key must be defined, all other settings are optional, and will use the default value listed below if undefined.

?> Whenever you make changes to the config file, you must restart the Sapling instance for the changes to take effect.


## Using the CLI

If you have the [CLI](/cli) installed (which is highly recommended), you can use it to edit your configuration without having to edit the `config.json` file yourself - use the `set` command to do this;

    sapling set port 8000

The above command would set the `port` setting in your `config.json` to `8000`.

For nested settings (such as the `driver` setting inside `db`), you can use dot notation;

    sapling set db.driver MongoDB


## Production config

When running in [production mode](/production), Sapling will behave differently than the default configuration.

Therefore, it's likely that you would want a different configuration for a production environment than your development environment.  You can create a duplicate of your `config.json`, and call it `config.production.json`.  When in production mode, this file will be used in place of `config.json`.

If you'd like additional configurations for other environments (i.e. staging), create a separate configuration file with a suffix that matches the `NODE_ENV`.  For instance, if your `NODE_ENV` is set to `"staging"`, Sapling will load `config.staging.json`, if it exists.

?> The two config files are **not** merged, so make sure your production config file contains all the settings you would expect to have in the `config.json` for your project.

!> If no config file corresponding to the current value of `NODE_ENV` exists, Sapling will load the normal `config.json`.


## List of settings

This is a comprehensive list of all configuration keys in Sapling.


### name

**Default value:** _none_

The name of your Sapling app.  Should be a variable name (no spaces).  It's the only setting that's mandatory.


### port

**Default value:** `3000`

The port that this Sapling instance should run on.  If undefined, Sapling will run on port `3000`.  This configuration option can always be overridden with a command argument when running Sapling, i.e. `sapling run --port 8000`


### production

**Default value:** `"auto"`

**Possible values:** `true`, `false` or `"auto"`

Controls whether Sapling runs in [production mode](/production).  `"auto"` means that Sapling will automatically run in production mode if it detects that the site is being accessed from outside `localhost`.  This however isn't necessarily always reliable, so in actual production environments, you should always use `true` as the value.

If it's `true` (or determined to be `true` by `"auto"`), and `config-production.json` exists, all other values in `config.json` will be ignored, and the rest of the configuration will be taken from the production configuration file.

This setting is ignored if defined inside of `config-production.json`.


### strict

**Default value:** `false`

**Possible values:** `true` or `false`

Controls whether Sapling runs in strict mode.  In strict mode, Sapling stops inferring things that aren't defined.  This makes explicitly defining [permissions](/permissions), [manual routing](/routes) and [models](/models) mandatory.  Any requests to the [data API](/data) for models or keys that haven't been defined will result in an error.

Regardless of the value, strict mode will be enabled if [production mode](/production) is on.


### cors

**Default value:** `true` (`false` in [production mode](/production))

**Possible values:** `true` or `false`

Whether the [data API](/data) sends CORS headers, allowing the data API to be consumed by external domains.

It's `true` by default in default configuration.  However, if Sapling is running in production mode, and this value has not been explicitly defined, the default is `false`.


### models

**Default value:** `"models"`

Directory path to where the model definitions are kept, relative to the location of `config.json`.


### views

**Default value:** `"views"`

Directory path to where the views are kept, relative to the location of `config.json`.


### extension

**Default value:** `"html"`

File extension used for views.  Any files in the view folder that do not use this extension are ignored.


### autoRouting

**Default value:** `true`

**Possible values:** `true` or `false`

Whether to use [automatic routing](/routes#automatic-routing) or not.


### static

**Default value:** `"static"`

Directory path to where static files are kept, relative to the location of `config.json`.

This is where things like [email templates](/notifications) and error pages are kept.


### public

**Default value:** `"public"`

Directory path to where public files are kept, relative to the location of `config.json`.

This would generally be the best place for your frontend CSS and JS assets, as well as things like `favicon.ico`.
