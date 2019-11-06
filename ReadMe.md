# Bootstrap 4.3 Contact Form


Basic contact form for Bootstrap 4.3 with a simple math captcha.  
Now ready for dark mode!

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
![Empty dark form][image-3]
---
![Filled form][image-2]

## Built With

* [jQuery][6] - Fast, small, and feature-rich JavaScript library.
* [Bootstrap 4][3] - Sleek, intuitive, and powerful front-end framework for faster and easier web development.
* [Font Awesome 5][5] - The web's most popular icon set and toolkit.

## Contributing

Please read [Contributing.md](Contributing.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/DeltaOS2/bootstrap4-contact-form/tags).

## Author

* **Gert Massheimer** - *Initial work* - [DeltaOS2](https://github.com/DeltaOS2)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## History


2019-11-06 - Update for dark/light-mode switching  
2019-02-13 - Update for Bootstrap v4.3x   
2018-04-11 - Initial release for Bootstrap v4.x (v4.0 - v4.2x)


[1]:http://php.net/manual/fa/timezones.php
[2]:http://php.net/manual/en/function.mail.php
[3]:https://getbootstrap.com
[4]:https://github.com/DeltaOS2/bootstrap4-contact-form/Contributing.md
[5]:https://fontawesome.com
[6]:http://jquery.com

[image-1]:screenshots/empty.png?raw=true
[image-2]:screenshots/filled.png?raw=true
[image-3]:screenshots/darkMode.png?raw=true
