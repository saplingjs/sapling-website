# Production mode

Once your Sapling project is ready for the limelight, there are a few things you need to do to make sure it can be published safely.  Many of the features that make prototyping and developing with Sapling so quick also pose unique security issues if left unchecked.

For this reason, Sapling has a built-in production mode.  When in production mode, certain development features are disabled or work differently, and certain other features that would hinder rapid development are enabled.  This makes your public Sapling instance both secure and performant.

!> It's unsafe to allow public access to a Sapling instance that is not running in production mode.  Sapling will attempt to block any access to it outside of `localhost` unless production mode is turned on.


## What does it do?

Here's a simple comparison of how Sapling behaves in production mode, compared to the default configuration.

| Feature              | Normal                                                    | Production mode                                            |
|----------------------|-----------------------------------------------------------|------------------------------------------------------------|
| Models               | Optional                                                  | Mandatory                                                  |
| Permissions          | Optional                                                  | Mandatory for all `POST`s and `DELETE`s                    |
| Config file          | Optional                                                  | Mandatory                                                  |
| Posting to data API  | Data structure for missing models is inferred from input  | Requests to missing models throw an error                  |
| Template rendering   | On each page load                                         | Heavily cached; updates only visible after server restart  |


## Configuration

To turn production mode on, simply add the following to `config.json`:

    {
        "production": true
    }

It's also possible to let Sapling automatically determine whether to use production mode:

    {
        "production": "auto"
    }

When set to `"auto"`, Sapling will serve requests via `localhost` in normal mode, and requests from outside it in production mode.

!> Automatic detection isn't necessarily always reliable in all environments, so we **strongly suggest** setting the production setting explicitly to either `true` or `false` (default).

It's common that you would want a different configuration for a production environment than your development environment.  You can create a duplicate of your `config.json`, and call it `config-production.json`.  When in production mode, this file will be used in place of `config.json`.

?> The two config files are **not** merged, so make sure your production config file contains all the settings you would expect to have in the `config.json` for your project.