# Porting

Sapling is the ideal framework for situations where speed of development is critical: MVPs, hackathons, prototypes, proofs of concept, mockups, personal projects, and so on.

And while [production mode](/production) means Sapling can also serve most mature projects with ease, there may come a time when it's time to move on to something else.  Fortunately, Sapling's unique approach to development makes it fairly easy to port the important stuff to another framework.

While we cannot provide support for moving away from Sapling, this document provides some examples on how one might go about it.  We've used Express as the example destination framework.


## Business logic

All the custom-developed business logic should reside inside of [hooks](/hooks).  This way, the code can be directly copy-pasted into the new framework, and wiring into the new server is quite simple, using `hooks.json` as a guide.

As shown below, the actual business logic code can stay exactly identical (as long as the destination framework is also in JavaScript, of course) - it just needs to be wired to the route.

<!-- tabs:start -->

#### **Sapling**

`hooks.json`

```json
{
    "GET /custom-route": "custom.js"
}
```

`hooks/custom.js`

```javascript
export default async (app, request, response) => {
    const result = await doBusinessLogic();
    response.json(result);
};
```

#### **Express**

`index.js`

```javascript
app.get('/custom-route', async (request, response) => {
    const result = await doBusinessLogic();
    response.json(result);
});
```

<!-- tabs:end -->


## Frontend and routing

As Sapling uses [popular templating engines](/drivers?id=render-drivers) (e.g. Nunjucks) for views, keeping the same templating engine is path of least resistance for migrating to a new framework.

The only manual task for views is to replace Sapling's [`get` tags](/views?id=get) to provide data for views to deal with.

<!-- tabs:start -->

#### **Sapling**

`index.html`

```nunjucks
{% get reviews = '/data/reviews' %}

{% for review in reviews %}
<h2>{{ review.title }}</h2>
<p>{{ review.content }}</p>
{% endfor %}
```

#### **Express**

`index.js`

```javascript
app.get('/', async (request, response) => {
	const reviews = await getReviewsFromDatabase();
    const template = nunjucks.render('index.html', { reviews });
    response.send(template);
});
```

`index.html`

```nunjucks
{% for review in reviews %}
<h2>{{ review.title }}</h2>
<p>{{ review.content }}</p>
{% endfor %}
```

<!-- tabs:end -->

Beyond that, Sapling does not handle the frontend stack, so other aspects of frontend code should be portable directly.

Mapping views to [routes](/routes) depends on whether the Sapling project uses automatic or manual routing.  Automatic routing maps the `views/` to routes one-to-one.  Manual routing uses the `controller.json` file to map routes to views.  In either case, there should be a fairly simple guide what the route structure looks.

<!-- tabs:start -->

#### **Sapling**

`controller.json`

```json
{
    "GET /login": "login.html",
    "GET /register": "register.html"
}
```

#### **Express**

`index.js`

```javascript
app.get('/login', async (request, response) => {
    const template = nunjucks.render('login.html');
    response.send(template);
});
app.get('/register', async (request, response) => {
    const template = nunjucks.render('register.html');
    response.send(template);
});
```

<!-- tabs:end -->


## Data and models

One of the biggest migration tasks will be replicating Sapling's built-in functionality.  The first big part of that is the data architecture.

Sapling defines data storage structures with [models](/models).  This is a hybrid of database schemata and validation rules.  These data structures will have be replicated in the new database or migration system, and the validation rules will need to be replicated in code.

Additionally, for each feature in your Sapling app, a set of custom routes to handle all the required CRUD operations likely need to be developed from scratch.

<!-- tabs:start -->

#### **Sapling**

`models/reviews.json`

```json
{
    "title": {
        "type": "String",
        "minlen": 3,
        "maxlen": 255
    },
    "content": {
        "type": "String",
        "required": true
    }
}
```

#### **Express**

`index.js`

```javascript
import bodyParser from 'body-parser';

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/new-review', async (request, response) => {
    if (request.body.title && request.body.title.length < 3) {
        throw new Error('Title is too short');
    }
    if (request.body.title && request.body.title.length > 255) {
        throw new Error('Title is too long');
    }
    if (!('content' in request.body)) {
        throw new Error('Content is missing');
    }

    const result = await putDataInDatabase({
        title: request.body.title,
        content: request.body.content
    });

    response.send(result);
});
```

<!-- tabs:end -->


## Sapling features

The other major part of migrating to another framework is replicating Sapling's selection of built-in SaaS features, such as [authentication](/authentication), [notifications](/notifications) and so forth.

The exact steps required will depend entirely on if and how the Sapling app uses these features, and whether these features exist on the destination framework.  As such, there aren't any meaningful simple code examples that can be given for this.


## Access control

Depending on if the Sapling app uses [authentication](/authentication), certain routes on the new framework may need access control as well.

Sapling defines [permissions](/permissions) in a simple JSON file that gives a good overview of app-wide access control behaviour (such as redirection on access check failure).  This will need to be replicated in code in the new app.

Additionally, individual data field read/write permissions are defined in the [models](/models).

<!-- tabs:start -->

#### **Sapling**

`permissions.json`

```json
{
    "GET /my-account": {
        "role": "member",
        "redirect": "/login"
    }
}
```

#### **Express**

`index.js`

```javascript
import session from 'express-session';

app.use(session({
    secret: getSecureSecret(),
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));

app.use('/my-account', async (request, response) => {
    const session = request.session;
    const logged_in = await checkIfUserIsLoggedIn(session);

    if (!logged_in) {
        res.redirect('/login');
    }
});
```

<!-- tabs:end -->

