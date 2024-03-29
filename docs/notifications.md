# Notifications

Sapling has a built-in way to send notifications to users via email.  Some notifications are sent by Sapling itself, but you can also programmatically send notifications inside [hooks](/hooks).


## Setup

While the functionality is built-in, actually sending the emails requires some setup.  You can setup email sending either via an SMTP server, `sendmail`, or Amazon SES.


### SMTP

To setup email notifications via SMTP, make sure the `mail.type` setting in the [configuration](/config) is set to `"SMTP"`;

```shell
sapling set mail.type SMTP
```

The most secure way to provide the credentials required to connect to your SMTP server, is doing it via environment variables.

```env
MAIL_HOST=smtp.example.com
MAIL_PORT=465
MAIL_TLS=true
MAIL_USER=username
MAIL_PASS=password123
```

However, you can also set them up in config (example via the [CLI](/cli));

```shell
sapling set mail.host smtp.example.com
sapling set mail.port 465
sapling set mail.secure true
sapling set mail.auth.user username
sapling set mail.auth.pass password123
```

!> Note that if you set the credentials up via config, these will end up being committed to your version control, if you're using one.  Make sure you know what you're doing.


### sendmail

To use the system `sendmail` binary, you can just set this up in config;

```shell
sapling set mail.type sendmail
```

If you know the path of your `sendmail` binary, you may also define that;

```shell
sapling set mail.path /usr/sbin/sendmail
```

If you don't set this, Sapling will attempt to guess it.


## Built-in notifications

Currently, Sapling only has a single built-in notification that it sends - the password reset email when a user indicates they have forgotten their password.

Sapling has a built-in white-labelled email template for this, but if you prefer to define your own, create a file in `static/mail/lostpass.html` from your project root, and Sapling will use that instead.  The string `{{key}}` will be replaced with the auth key which is [required for recovery](/authentication#reset-password).


## Custom notifications

You can define additional email templates under `static/mail/`, with the `.html` extension, for any other emails you may wish to send to the user (or anyone else).

You can then send notifications using the built-in notification class;

```js
import Notification from "@sapling/sapling/lib/Notification.js";

new Notification("welcome", "Welcome!", { name: "John" });
```

Calling `new Notification()` will send the notification via email.  The first parameter is the name of email template (in this case, it would correspond to `static/mail/welcome.html`).  The second parameter is the subject line of the email.

The third parameter is the data that will be injected into the email template.  In this case, any `{{name}}` in the template would be replaced with `"John"`.

By default, the notification will be sent to the email address of the currently authenticated user.  However, you can also define any arbitrary email address as the recipient in the fourth parameter;

```js
new Notification("invite", "You've been invited", { invitee: "Mary" }, "mary@example.com");
```
