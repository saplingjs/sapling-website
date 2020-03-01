# Models

Models define the structure of data stored by Sapling in its database.  Each model represents a collection of data (a table), and its definition is a description of the fields (keys, columns) inside that model.

A huge reason why developing with Sapling is much faster than other frameworks is because models are **completely optional**.  By default, any call to Sapling's data API will be accepted, and the structure of data is inferred from what it's sent.  Even after defining a model, Sapling will still accept data for fields that are sent, but not defined in the model.

!> When Sapling is running in [production mode](/production), or its configuration contains `"strict": true`, the data structure is no longer inferred from requests, and you must define all the models fully.  Requests to undefined models, or containing undefined fields for a defined model, will result in an error.


## Structure

Each model represents a collection of data (e.g. `reviews`).  They are JSON files stored in the `models/` folder, each named after the collection they represent (e.g. `models/reviews.json`).

Each model contains a number of fields, which contain the data of each record.  The JSON file is simply an array of fields, where each field is represented by an object containing the properties for the field.


## Properties

Fields are described by setting properties, which affect the type of data is stored in them, and how the input to the model is validated.

| Property     | Description                                                                                                                            |
|--------------|----------------------------------------------------------------------------------------------------------------------------------------|
| `name`       | The name of the field that will be used in the data API.  The only strictly required property.                                         |
| `type`       | Type of data stored in this field.  Can be one of `text` (default), `number`, `boolean`, `date`, `password`, `array`, or `reference`.  |
| `required`   | Whether this field is mandatory.  `false` by default.  If `true`, Sapling will throw an error if the field is missing.                 |
| `choices`    | An array of possible values for the field.  If defined, submitting a value not in the array will throw an error.                       |
| `default`    | The default value if the field is not sent in a request.  Must match `type` and `choices`, if defined.                                 |
| `reference`  | Only needed if `type` is `reference`.  Name of another model that this field references.                                               |


## Default fields

Each model contains five fields that are present even when not defined.  They are automatically populated by Sapling, and are read-only through the data API.

| Field            | Description                                               |
|------------------|-----------------------------------------------------------|
| `_id`            | A unique ID for each record in a model.                   |
| `_createdDate`   | Timestamp of when the record was first created.           |
| `_createdBy`     | `_id` of the user that created the record.                |
| `_modifiedDate`  | Timestamp of when the record was last edited in any way.  |
| `_modifiedBy`    | `_id` of the user that last edited the record.            |


## Users

Each Sapling instance contains an invisible model called `users`, where all end user accounts are stored.  By default it contains the `username`, `password` and `role` fields.

    [
        {
            "name": "username",
            "required": true
        },
        {
            "name": "password",
            "type": "password",
            "required": true
        },
        {
            "name": "role",
            "choices": ["user", "admin"],
            "default": "user"
        },
    ]

The `role` field is utilised in setting [permissions](/permissions).

If you choose, you can also define a `users` model, in order to add additional fields to each user account.  The model you define will take precedence over the internal one.

!> If you decide to define your own `users` model, be sure to include a definition of the `username`, `password` and `role` fields.  If you don't, and you're in [production mode](/production), or the configuration contains `"strict": true`, you will get an error.


## Database

The default configuration of Sapling uses [MongoDB](https://www.mongodb.com/) to store the data for models.  Its document based storage model is ideal for Sapling's flexible nature.  You will typically not need to interact with the storage technology directly, as Sapling takes care of it behind the scenes.

However, if you prefer to use a different storage technology, you can.  All storage functionality is abstracted into generic methods that Sapling uses interally, and integrating a new technology is a matter of mapping these abstracted methods into the technology-specific commands.

Many popular storage technologies have already been adapted for Sapling, and you easily may write your own.  Sapling even supports relational databases that require rigid homogeneous column structures.