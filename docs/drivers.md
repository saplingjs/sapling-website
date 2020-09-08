# Drivers

Drivers are an abstraction layer between Sapling and other external technologies, such as databases or templating engines.  The driver's job is to implement a set of standard methods in whatever way makes sense with the given database or templating engine.

Each driver inherits from the main `Interface` class of its type.  The class definition contains all the methods that the driver should support in order to work with Sapling.

Each driver is its own npm package, which can be installed as required, either manually or with the CLI.


## Database drivers

Database drivers provide Sapling with a unified way of interacting with different databases.  Each database driver is expected to provide all the methods listed in the database `Interface`, implemented in whatever way makes sense for each particular database.

Not all methods will be applicable to all technologies - for instance, to support strict relational databases (such as MySQL), Sapling will call methods to add columns to pre-existing tables, whereas document-based databases (like MongoDB) do not have "columns", and each document can contains whatever fields is sent to it.  The column method must be implemented by the MongoDB driver, but it doesn't need to do anything since it's not relevant.

Currently available database drivers are:

- [MongoDB](https://www.github.com/saplingjs/sapling-mongodb)

Anyone can publish a Sapling database driver package for their favourite database technology.  You may then submit issues to get it added [to the CLI](https://github.com/saplingjs/cli/issues) and [to this documentation](https://github.com/saplingjs/sapling-website/issues).

?> To view the `Interface` class all database drivers must inherit from, have a look at [`drivers/db/Interface.js`](https://github.com/saplingjs/sapling/blob/master/drivers/db/Interface.js)


## Render drivers

Render drivers allow Sapling to support many different templating engines.  Render drivers work much like database drivers; they must inherit from and implement each method of the render `Interface`.

Basically any templating engine can work with Sapling, as long as it supports the implementation of the custom tags required to access Sapling's data interface.

The render driver is also expected to deal with the filesystem to load the requested view to be parsed.  This is so that templating engines that support importing and inheriting from other template files can work.  If the templating engine doesn't provide built-in filesystem support, the driver must provide it for it.

As such, there are only two methods to a render driver: `render` to render the template at the given path, and `registerHooks` to create the custom tags.

Currently available render drivers are:

- [Nunjucks](https://www.github.com/saplingjs/sapling-nunjucks)

Anyone can publish a Sapling render driver package for their favourite templating language.  You may then submit issues to get it added [to the CLI](https://github.com/saplingjs/cli/issues) and [to this documentation](https://github.com/saplingjs/sapling-website/issues).

?> To view the `Interface` class all render drivers must inherit from, have a look at [`drivers/render/Interface.js`](https://github.com/saplingjs/sapling/blob/master/drivers/render/Interface.js)