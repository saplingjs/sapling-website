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

?> If port 3000 is no good, you can definite a different port with the `--port` flag; for example, `sapling run --port 8000`


## Manual installation

If you do not wish to use the CLI, you can also add Sapling as a dependency with `npm install --save @sapling/framework` or `yarn add @sapling/framework`.
