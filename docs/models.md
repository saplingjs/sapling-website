# Models

Models define the structure of data stored by Sapling in its database.  Each model represents a collection of data (a table), and its definition is a description of the fields (keys, columns) inside that model.

A huge reason why developing with Sapling is much faster than other frameworks is because models are **completely optional**.  By default, any call to Sapling's data API will be accepted, and the structure of data is inferred from what it's sent.  Even after defining a model, Sapling will still accept data for fields that are sent, but not defined in the model.

!> When Sapling is running in [production mode](/production), or its configuration contains `"strict": true`, the data structure is no longer inferred from requests, and you must define all the models fully.  Requests to undefined models, or containing undefined fields for a defined model, will result in an error.


## Structure

Each model represents a collection of data (e.g. `reviews`).  They are JSON files stored in the `models/` folder, each named after the collection they represent (e.g. `models/reviews.json`).

Each model contains a number of fields, which contain the data of each record.  The JSON file is simply an object of fields, where each field is named by the key, and represented by an object value containing the properties for the field.


## Properties

Fields are described by setting properties, which affect the type of data is stored in them, and how the input to the model is validated.

| Property     | Description                                                                                                                              |
|--------------|------------------------------------------------------------------------------------------------------------------------------------------|
| `type`       | Type of data stored in this field.  Can be one of `"String"` (default), `"Number"`, `"Boolean"`, `"Date"`, `"Array"`, `"File"` or `"Reference"`.  |
| `required`   | Whether this field is mandatory.  `false` by default.  If `true`, Sapling will throw an error if the field is missing.                   |
| `values`     | An array of possible values for the field.  If defined, submitting a value not in the array will throw an error.                         |
| `default`    | The default value if the field is not sent in a request.  Must match `type` and `values`, if defined.                                    |
| `reference`  | Only needed if `type` is `"Reference"`.  Name of a model that this field references.                                                     |
| `access`     | Roles that can read or write this property.  Can be set as either a string, or an object with `"r"` and `"w"`.  See below.               |
| `minlen`     | Minimum length of characters for the value stored.  Sending a value shorter than this returns an error.  Only applicable to `"String"`.  |
| `maxlen`     | Maximum length of characters for the value stored.  Sending a value longer than this returns an error.  Only applicable to `"String"`.   |
| `min`        | Minimum value stored.  Sending a value smaller than this returns an error.  Only applicable to `"Number"`.                               |
| `max`        | Maximum value stored.  Sending a value larger than this returns an error.  Only applicable to `"Number"`.                                |


## Access

You can set access permissions for each field, to control who can read or write values from/to this property.  The simplest way to do this is to set the `"access"` property of a field to the minimum role level required to access the property:

    [
        ...
        "case_notes": {
            "type": "String",
            "access": "admin"
        }
    ]

In the above example, only users with the `"admin"` role can view and edit the value in the `"case_notes"` field.  This means that the `"case_notes"` field is not included at all in the response for any data API for users with any role lower than `"admin"`.  Attempting to modify the contents of the field in a `POST` request to the data API will not result in an error, but will fail silently.

You can also set read and write permissions separately:

    [
        ...
        "phone_number": {
            "type": "String",
            "access": {"r": "anyone", "w": "admin"}
        }
    ]

In the above example, anyone can read the value of the `"phone_number"` field, but only users with the `"admin"` role can modify the value.


## Reference fields

If the `type` of a field is set to `"reference"`, it creates a link between two records from the same or different model.

This is useful if you want to make strong many-to-one connections between different records; for instance, a particular review in the `reviews` model may be about a particular movie in the `movies` model.  Therefore, you may want to define a reference field in the `reviews` model:

    [
        ...
        "movie": {
            "type": "Reference",
            "required": true,
            "reference": "movies"
        }
    ]

The above example would mean that any `POST` request to the `reviews` model would have to include a valid ID of a record in the `movies` model.  Sending an ID that is not a valid record in `movies` would result in an error.

`GET` requests to `reviews` would then include the entire record of the referenced movie in place of the ID in the `movie` key:

    {
        ...
        "movie": {
            "_id": 1,
            "title": "Gone With The Wind"
        }
    }

If the `movies` model also included a reference field, the contents of the referenced field would also be included inside the `movie` field above.  This allows you to create very deep and detailed data structures.

!> While there is nothing stopping you from creating a reference field that points to itself (i.e. a reference field in `movies` that references `movies`), this can easily lead to circular references.  This is where movie A references movie B that references movie A, in an infinite loop.  Sapling will automatically stop including the referenced object when it reaches 10 levels deep.


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

    {
        "email": {
            "type": "String",
            "minlen": 3,
            "unique": true,
            "required": true
        },
        "password": {
            "type": "String",
            "minlen": 3,
            "required": true,
            "access": "owner"
        },
        "_salt": {
            "type": "String",
            "access": "owner"
        },
        "role": {
            "type": "String",
            "values": ["admin", "member"],
            "default": "member",
            "access": {"r": "anyone", "w": "admin"}
        },
        "authkey": {
            "type": "String",
            "access": "owner"
        }
    }

The `role` field is utilised in setting [permissions](/permissions).

If you choose, you can also define a `users` model, in order to add additional fields to each user account.  The model you define will take precedence over the internal one.

?> If you decide to define your own `users` model, the above default model is used as defaults.  This allows you to override certain settings (e.g. provide a longer minimum length for passwords), while still making sure the model contains everything required for Sapling to function.


## Database

The default configuration of Sapling uses [MongoDB](https://www.mongodb.com/) to store the data for models.  Its document based storage model is ideal for Sapling's flexible nature.  You will typically not need to interact with the storage technology directly, as Sapling takes care of it behind the scenes.

However, if you prefer to use a different storage technology, you can.  All storage functionality is abstracted into generic methods that Sapling uses interally, and integrating a new technology is a matter of mapping these abstracted methods into the technology-specific commands.

Many popular storage technologies have already been adapted for Sapling, and you easily may write your own.  Sapling even supports relational databases that require rigid homogeneous column structures.
