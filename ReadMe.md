# Bootstrap 4.x Contact Form

Basic contact form for Bootstrap 4.x with a simple math captcha.

## Getting Started

Clone the repository or download the zip file.

### Installing

Copy or move the content of this repository to your local web project. Keep the directory structure or you need to change all internal links to the needed files.  

Configure the **assets/js/contact.js** file to your language preference.  
Available are German and English.

```
// ---- Language Settings
  var language = "en";
//  var language = "de";
```

Configure the **assets/php/send_email.php** file.

- Set the correct timezone. If you don't know your timezone have a look [here][1].
- Set **$to_name** to your name.
- Set **$to_email** to your email address.
- Set **$subject** to your preferred subject line.

```
// ---- User settings -----------------------------------
if (date_default_timezone_get != 'America/New_York'){date_default_timezone_set('America/New_York');}
//if (date_default_timezone_get != 'Europe/Berlin') {date_default_timezone_set('Europe/Berlin');}

$to_name  = 'Freddy Friday';     // Don't forget to change your name ...
$to_email = 'freddy@friday.net'; // ... and email address!
$subject  = 'Message from your website';
// ---- /User settings ----------------------------------
```

The email is designed as a html email. If this is not what you want, have a look [here][2]. There are several examples on how to use the **mail** function in PHP. Including text only examples.  

Finally have a look into the **index.html**. Maybe you want to change the page title
```
<title>contact</title>
```
and the headlines.
```
<h2>Contact Us</h2>
<h5>Feel free to reach out for any questions!</h5>
```

## Screenshots

![Empty form][image-1]
---
![Filled form][image-2]

## Built With

* [Bootstrap 4][2] - Sleek, intuitive, and powerful front-end framework for faster and easier web development.

## Contributing

Please read [Contributing.md](Contributing.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/DeltaOS2/bootstrap4-contact-form/tags).

## Author

* **Gert Massheimer** - *Initial work* - [DeltaOS2](https://github.com/DeltaOS2)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


[1]:http://php.net/manual/fa/timezones.php
[2]:http://php.net/manual/en/function.mail.php
[3]:https://getbootstrap.com
[4]:https://github.com/DeltaOS2/bootstrap4-contact-form/Contributing.md

[image-1]:screenshots/empty.png?raw=true
[image-2]:screenshots/filled.png?raw=true
