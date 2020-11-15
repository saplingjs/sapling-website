# Installation

There are two ways to install Sapling &ndash; either the quick start with the Sapling CLI tool, or manually as an npm dependency.


## Quick Start

With the CLI tool, you can quickly create projects with all the necessary files and folders.

#### 1. Install the CLI

Run `npm install -g @sapling/cli` to install the command line tool globally.  The command line tool helps you create and manage Sapling projects.

#### 2. Create your first project

Run `sapling create` to run a wizard for creating a new blank project.  It will automatically create the files and folders needed, and install any dependencies.

#### 3. Start developing

Navigate to the folder and run `sapling run` to turn on the server.  You can then visit your new site at `http://localhost:3000`.

?> If port 3000 is no good, you can define a different port with the `--port` flag; for example, `sapling run --port 8000`.  You can also set a port in [the configuration](/config) with the `port` setting.


## Manual installation

If you do not wish to use the CLI, you can also add Sapling as a dependency with `npm install --save @sapling/sapling` or `yarn add @sapling/sapling`.

Note that many of the features of Sapling that this documentation references are separate dependencies that you also have to install separately.

| Project                                                                                 | Description                                                                                       |
|-----------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
| [@sapling/vue-components](https://github.com/saplingjs/vue-components)                  | Assortment of optional unopinionated semi-automatic frontend Vue components for common UI tasks.  |
| [@sapling/db-driver-mongodb](https://github.com/saplingjs/db-driver-mongodb)            | Support for MongoDB databases.                                                                    |
| [@sapling/render-driver-nunjucks](https://github.com/saplingjs/render-driver-nunjucks)  | Support for Nunjucks templating engine.                                                           |