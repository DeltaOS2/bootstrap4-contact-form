// ---- user.js
// ---------------------------------------------------------

// ---- Contact form interpretation
// ---------------------------------------------------------
$(function() {

// ---- Cover the RESET button in the contact form
// ---- Use "false" to reload the page locally or "true" to reload from server
  $('#reset').click(function() {
    location.reload(true);
  });


// ---- Language Settings
  var language = "en";
//  var language = "de";

  if (language === "en") {
    var msgEmail          = 'Please check your email address',
        msgEmpty          = 'You must fill all the form fields to proceed!',
        msgNotSent        = 'Internal error. E-mail was not sent. Please try again!',
        msgNoPhpFile      = 'We could not fetch the data from the server. Please try again!',
        msgServer         = 'Request can not be send',
        msgEquation1      = 'Please check the equation. The result is NOT <strong>',
        msgEquation2      = '</strong>.',
        msgSuccess        = 'Your email was sent successfully.',
        fieldName         = 'Please enter your name.',
        fieldEmailFormat  = 'Check the formatting of your email address and try again.',
        fieldEmail        = 'Please enter your email address.',
        fieldMessage      = 'Please enter your message.',
        fieldHumanResult  = 'The result is wrong.',
        fieldHuman        = 'Please enter the sum of the equation.',
        humanQuestion     = 'Are you Human or a Bot?',
        humanEquation     = 'What is';

    $('#name').attr('placeholder', 'Your Name');
    $('#email').attr('placeholder', 'Your e-mail address');
    $('#message').attr('placeholder', 'Enter Your Message');
    $('#human').attr('placeholder', 'Answer?');
    $('#submit').attr('value', 'Send it');
    $('#reset').attr('value', 'RESET');

    function makeNumber(numb) {
      switch (numb) {
        case  1:; return 'one';   break;
        case  2:; return 'two';   break;
        case  3:; return 'three'; break;
        case  4:; return 'four';  break;
        case  5:; return 'five';  break;
        case  6:; return 'six';   break;
        case  7:; return 'seven'; break;
        case  8:; return 'eight'; break;
        case  9:; return 'nine';  break;
        case 10:; return 'ten';   break;
        default:; return
      }
    }
  }

  if (language === "de") {
    var msgEmail          = 'Bitte eMail-Adresse &uuml;berpr&uuml;fen.',
        msgEmpty          = 'Es m&uuml;ssen ALLE Felder ausgef&uuml;llt werden!',
        msgNotSent        = 'Interner Fehler. eMail wurde nicht versendet. Bitte sp&auml;ter nochmal versuchen!',
        msgNoPhpFile      = 'Interner Verarbeitungsfehler. Bitte sp&auml;ter nochmal versuchen!',
        msgServer         = 'Server-Anfrage kann nicht verarbeitet werden!',
        msgEquation1      = 'Die Gleichung ist falsch!. Das Ergebnis ist NICHT <strong>',
        msgEquation2      = '</strong>.',
        msgSuccess        = 'eMail wurde erfolgreich versendet.',
        fieldName         = 'Bitte Name eingeben.',
        fieldEmailFormat  = 'Kein g&uuml;ltiges eMail-Format. Bitte pr&uuml;fen',
        fieldEmail        = 'Bitte eMail-Adresse eingeben.',
        fieldMessage      = 'Bitte Nachrichten-Text eingeben.',
        fieldHumanResult  = 'Das Ergebnis ist falsch.',
        fieldHuman        = 'Bitte das Ergebnis der Gleichung eingeben.',
        humanQuestion     = 'Mensch oder Maschine?',
        humanEquation     = 'Was ist';

    $('#name').attr('placeholder', 'Ihr Name');
    $('#email').attr('placeholder', 'Ihre eMail-Adresse');
    $('#message').attr('placeholder', 'Ihre Nachricht');
    $('#human').attr('placeholder', 'Antwort?');
    $('#submit').attr('value', 'Senden');
    $('#reset').attr('value', 'Löschen');

    function makeNumber(numb) {
      switch (numb) {
        case  1:; return 'eins';   break;
        case  2:; return 'zwei';   break;
        case  3:; return 'drei';   break;
        case  4:; return 'vier';   break;
        case  5:; return 'fünf';   break;
        case  6:; return 'sechs';  break;
        case  7:; return 'sieben'; break;
        case  8:; return 'acht';   break;
        case  9:; return 'neun';   break;
        case 10:; return 'zehn';   break;
        default:; return
      }
    }
  }

  var msgGraphic  = '<div class="text-center"><img src="assets/images/contact/spinner.gif" alt="spinner" style="width:54px;height:55px;"/></div>';

// ---- /Language Settings


  function placeNumber() {
    var x = Math.floor((Math.random() * 10) + 1);
    var y = Math.floor((Math.random() * 10) + 1);
    var part1  = makeNumber(x);
    var part2  = makeNumber(y);
        result = x + y;
    $('#result').html(result);
    $('#part1').html(part1);
    $('#part2').html(part2);
  };

  placeNumber();
  $('#human-question').html(humanQuestion);
  $('#human-equation').html(humanEquation);

  $('#contactForm').on('submit', function(e) {

    e.preventDefault();
    e.stopPropagation();

    // get values from FORM
    var name    = $("#name").val();
    var email   = $("#email").val();
    var message = $("#message").val();
    var human   = $("#human").val();
    var goodToGo = false;
    var messageError = msgServer;
    var pattern = new RegExp(/^(('[\w-\s]+')|([\w-]+(?:\.[\w-]+)*)|('[\w-\s]+')([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    // ---- Checking name input
    if (name && name.length > 0 && $.trim(name) != '') {
      $('#name-row').removeClass('has-danger')
                    .addClass('has-success');
      $('#name').removeClass('form-control-danger')
                .addClass('form-control-success');
      $('#name-feedback').html('&nbsp;');
      goodToGoName = true;
    }
    else {
      messageError = msgEmpty;
      $('#name-row').removeClass('has-success')
                    .addClass('has-danger');
      $('#name').removeClass('form-control-success')
                .addClass('form-control-danger');
      $('#name-feedback').html(fieldName);
      goodToGoName = false;
    }

    // ---- Checking email input
    if (email && email.length > 0 && $.trim(email) != '') { // ---- email field not empty
      // ---- Testing email fomat
      if (pattern.test(email)) { // ---- email format OK
        $('#email-row').removeClass('has-warning')
                       .removeClass('has-danger')
                       .addClass('has-success');
        $('#email').addClass('form-control-success')
                   .removeClass('form-control-warning');
        $('#email-feedback').html('&nbsp;');
        goodToGoEmail = true;
      }
      else { // ---- email format not OK
        messageError = msgEmail;
        $('#email-row').removeClass('has-success')
                       .removeClass('has-danger')
                       .addClass('has-warning');
        $('#email').removeClass('form-control-success')
                   .removeClass('form-control-danger')
                   .addClass('form-control-warning');
        $('#email-feedback').html(fieldEmailFormat);
        goodToGoEmail = false;
      }
    }
    else { // ---- email field empty
      messageError = msgEmpty;
      $('#email-row').removeClass('has-success')
                     .removeClass('has-warning')
                     .addClass('has-danger');
      $('#email').removeClass('form-control-success')
                 .removeClass('form-control-warning')
                 .addClass('form-control-danger');
      $('#email-feedback').html(fieldEmail);
      goodToGoEmail = false;
    }

    // ---- Checking message input
    if (message && message.length > 0 && $.trim(message) != '') { // ---- message field not empty
      $('#message-row').removeClass('has-danger')
                       .addClass('has-success');
      $('#message').removeClass('form-control-danger')
                   .addClass('form-control-success');
      $('#message-feedback').html('&nbsp;');
      goodToGoMsg = true;
    }
    else { // ---- message field empty
      messageError = msgEmpty;
      $('#message-row').removeClass('has-success')
                       .addClass('has-danger');
      $('#message').removeClass('form-control-success')
                   .addClass('form-control-danger');
      $('#message-feedback').html(fieldMessage);
      goodToGoMsg = false;
    }

    // ---- Converting human input into a number
    human = Number(human);

    // ---- Checking the human factor
    if (human /* && human.length > 0 && $.trim(human) != '' */) { // ---- equation field not empty
      if (human == result) { // ---- result is correct
        $('#human-row').removeClass('has-warning')
                       .removeClass('has-danger')
                       .addClass('has-success');
        $('#human').removeClass('form-control-warning')
                   .removeClass('form-control-danger')
                   .addClass('form-control-success');
        $('#human-feedback').html('&nbsp;');
        goodToGoHuman = true;
      }
      else { // ---- result is incorrect
        messageError = msgEquation1 + human + msgEquation2;
        $('#human-row').removeClass('has-danger')
                       .addClass('has-warning');
        $('#human').removeClass('form-control-danger')
                   .addClass('form-control-warning');
        $('#human-feedback').html(fieldHumanResult);
        goodToGoHuman = false;
      }
    }
    else { // ---- equation field empty
      messageError = msgEmpty;
      $('#human-row').removeClass('has-warning')
                     .removeClass('has-success')
                     .addClass('has-danger');
      $('#human').removeClass('form-control-warning')
                 .removeClass('form-control-success')
                 .addClass('form-control-danger');
      $('#human-feedback').html(fieldHuman);
      goodToGoHuman = false;
    }

    //---- Checking if all fields are filled
    if (goodToGoName && goodToGoEmail && goodToGoMsg && goodToGoHuman) {
      goodToGo = true; // ---- all fields are filled
    }
    else {
      messageError = msgEmpty;
      goodToGo = false; // ---- not all fields are filled
    }

    if (goodToGo) { // ---- let's do some ajax to forward the js-form-data to a PHP-file
      $.ajax({      // ---- which will send the email. (Line 303)
        data: $('#contactForm').serialize(),
        beforeSend: function() { // ---- entertain with loading gif while contacting the server
          $('#success').removeClass('alert-warning')
                       .removeClass('alert-danger')
                       .removeClass('alert-success')
                       .html(msgGraphic);
        },
        success:function(response) { // ---- server request positiv ...
          if (response == 1) { // ---- email was sent
            $('#success').removeClass('alert-warning')
                         .removeClass('alert-danger')
                         .addClass('alert-success')
                         .html(msgSuccess);
          }
          else { // ---- ... but email not sent
            $('#success').removeClass('alert-succes')
                         .removeClass('alert-warning')
                         .addClass('alert-danger')
                         .html(msgNotSent);
          }
        },
        error:function(e) { // ---- PHP file not found
          $('#success').removeClass('alert-succes')
                       .removeClass('alert-warning')
                       .addClass('alert-danger')
                       .html(msgNoPhpFile);
        },
        complete: function(done) {
          console.log('Finished');
        },
        type: 'POST', // ---- post data to the PHP-file
        url: 'assets/php/send_email.php',
      });
      return true;
    }
    else { // ---- there is a problem contacting the server
      $('#success').removeClass('alert-succes')
                   .removeClass('alert-warning')
                   .addClass('alert-danger')
                   .html(messageError);
      return false;
    }
    delete result; // ---- delete global var
    return false;
  });

});
