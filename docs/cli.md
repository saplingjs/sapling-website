# Command Line Interface (CLI)

To make creating and managing projects easier, Sapling has a dedicated CLI tool.  It's highly recommended to install the CLI, as it saves a lot of time, and makes launching new Sapling projects super fast.


## Installation

To install the CLI, simply install it globally from npm;

```shell
npm install -g @sapling/cli
```

Or, if you prefer Yarn like we do, you can do;

```shell
yarn global add @sapling/cli
```

After that, you can use the `sapling` command on your command line anywhere (providing your `PATH` is set up correctly).


## Creating a new project

Once the CLI is installed globally, you can create a new Sapling project by simply doing;

```shell
sapling create
```

The CLI will ask a set of questions, including naming your app (lowercase alphanumeric characters and dashes only), and including the usual packages, like [database and render drivers](/drivers), [Vue components](/components) and more.

It will then create a new folder for your app in your current location, install all the dependencies, and create the sample app environment that gives you a great jumping-off point with very little boilerplate to delete.

?> For the sake of not having to look it up in the docs, `init`, `setup`, `install` and `new` are also provided as aliases of `create`.  They all do the same thing.


## Running Sapling

The CLI can also run the Sapling app so you can view it in your browser.  Just do;

```shell
sapling run
```

This will start a new single-core instance of Sapling, and open your system's default browser with the front page of your app.

If the default port (or the port defined in the [app config](/config)) is already in use, the CLI will automatically find another port that is open, and use that.

?> For this command, `start`, `serve`, `open` and `launch` also do the same as `run`.

!> It's not advisable to use the CLI to serve your Sapling project in production.  Use e.g. `npx @saplingjs/sapling` instead to do that.


## Editing config

You can use the CLI to edit the [configuration](/config) of your Sapling app.  Simply do;

```shell
sapling set name my-awesome-app
```

The above command would set the `name` setting in your `config.json` to `"my-awesome-app"`.

For nested settings, you can use dot notation;

```shell
sapling set db.driver MongoDB
```


## Changing packages

During `sapling run`, the CLI will ask you if you'd like to install different Sapling packages.  If after creating the project you'd like to change your mind about any of these, you can navigate to the project folder and get the same questionnaire again by doing;

```shell
sapling edit
```

This will run through all the same questions, install any new dependencies you select, and delete any dependencies you decide to forsake.  For [drivers](/drivers), it will edit your app [configuration](/config) to select the new driver.  All your other settings and app content will remain.

?> For this command, `modify`, `reconfigure` and `change` are provided as aliases for `edit`.


## Updating Sapling

New versions of Sapling and its dependencies will be released from time to time.  Upgrading to a new version is very simple; just navigate to the root of your project folder in your terminal, and do;

```shell
sapling update
```

This will upgrade Sapling and all its dependencies to the latest version.

If the newest version is a new major version with breaking changes, the CLI tool will tell you what to do to make sure your app is still compatible with the new version, and ask if you'd like to proceed.

?> For this command, `upgrade` will also work as an alias of `update`.
