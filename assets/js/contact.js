

// ---- Dark-Light-Mode Switch -----------------------------------------------------------------------------------------
/**
 * Get value of CSS-Element.
 * @param propKey
 * @returns {string}
 */
const getCSSCustomProp = (propKey) => {
  let response = getComputedStyle(document.documentElement).getPropertyValue(propKey);
  if (response.length) {
    response = response.replace(/['"]/g, '').trim();
  }
  return response;
};

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

if (getCSSCustomProp('--color-mode') === 'dark') toggleSwitch.checked = true;

/**
 * Switch dark-light-mode
 * @param e
 */
function switchTheme(e) {
  e.preventDefault();

  if (e.target.checked) {
    document.documentElement.setAttribute('data-user-color-scheme', 'dark');
  }
  else {
    document.documentElement.setAttribute('data-user-color-scheme', 'light');
  }
}
toggleSwitch.addEventListener('change', switchTheme, false);
// ---------------------------------------------------------------------------------------------------------------------



// ---- Contact form interpretation
// ---- Update: 2019-02-12 for Bootstrap v4.3x
// ---------------------------------------------------------
$(function() {

  // ---- Language Settings
  let language = "en";
//  let language = "de";
  // ----------------------

  const msgGraphic  = '<div class="text-center fa-3x"><i class="fas fa-spinner fa-spin"></i></div>';

  let msgEmail, msgEmpty, msgNotSent, msgNoPhpFile, msgServer, msgEquation1, msgEquation2, msgSuccess, fieldName,
    fieldEmailFormat, fieldEmail, fieldMessage, fieldHumanResult, fieldHuman, humanQuestion, humanEquation, result,
    goodToGoName, goodToGoEmail, goodToGoMsg, goodToGoHuman;

  if (language !== "de") {
    msgEmail          = 'Please check your email address';
    msgEmpty          = 'You must fill all the form fields to proceed!';
    msgNotSent        = 'Internal error. E-mail was not sent. Please try again!';
    msgNoPhpFile      = 'We could not fetch the data from the server. Please try again!';
    msgServer         = 'Request can not be send';
    msgEquation1      = 'Please check the equation. The result is NOT <strong>';
    msgEquation2      = '</strong>.';
    msgSuccess        = 'Your email was sent successfully.';
    fieldName         = 'Please enter your name.';
    fieldEmailFormat  = 'Check the formatting of your email address and try again.';
    fieldEmail        = 'Please enter your email address.';
    fieldMessage      = 'Please enter your message.';
    fieldHumanResult  = 'The result is wrong.';
    fieldHuman        = 'Please enter the sum of the equation.';
    humanQuestion     = 'Are you Human or a Bot?';
    humanEquation     = 'What is';

    $('#name').attr('placeholder', 'Your Name');
    $('#email').attr('placeholder', 'Your e-mail address');
    $('#message').attr('placeholder', 'Enter Your Message');
    $('#human').attr('placeholder', 'Answer?');
    $('#submit').html('Send Message<i class="fab fa-telegram-plane pl-2"></i>');
    $('#reset').html('Delete Message<i class="far fa-times-circle pl-2"></i>').on('click', function(){location.reload();});
  }

  if (language === "de") {
    msgEmail          = 'Bitte eMail-Adresse überprüfen.';
    msgEmpty          = 'Es müssen ALLE Felder ausgefüllt werden!';
    msgNotSent        = 'Interner Fehler. eMail wurde nicht versendet. Bitte sp&auml;ter noch mal versuchen!';
    msgNoPhpFile      = 'Interner Verarbeitungsfehler. Bitte sp&auml;ter noch mal versuchen!';
    msgServer         = 'Server-Anfrage kann nicht verarbeitet werden!';
    msgEquation1      = 'Die Gleichung ist falsch!. Das Ergebnis ist NICHT <strong>';
    msgEquation2      = '</strong>.';
    msgSuccess        = 'eMail wurde erfolgreich versendet.';
    fieldName         = 'Bitte Name eingeben.';
    fieldEmailFormat  = 'Kein gültiges eMail-Format. Bitte pr&uuml;fen';
    fieldEmail        = 'Bitte eMail-Adresse eingeben.';
    fieldMessage      = 'Bitte Nachrichten-Text eingeben.';
    fieldHumanResult  = 'Das Ergebnis ist falsch.';
    fieldHuman        = 'Bitte das Ergebnis der Gleichung eingeben.';
    humanQuestion     = 'Mensch oder Maschine?';
    humanEquation     = 'Was ist';

    $('#name').attr('placeholder', 'Ihr Name');
    $('#email').attr('placeholder', 'Ihre eMail-Adresse');
    $('#message').attr('placeholder', 'Ihre Nachricht');
    $('#human').attr('placeholder', 'Antwort?');
    $('#submit').html('Sende Nachricht<i class="fab fa-telegram-plane pl-2"></i>');
    $('#reset').html('Lösche Nachricht<i class="far fa-times-circle pl-2"></i>').on('click', function(){location.reload();});
  }

  function makeNumber(numb) {
    if (language === 'de') {
      switch (numb) {
        case  1: return 'eins';
        case  2: return 'zwei';
        case  3: return 'drei';
        case  4: return 'vier';
        case  5: return 'fünf';
        case  6: return 'sechs';
        case  7: return 'sieben';
        case  8: return 'acht';
        case  9: return 'neun';
        case 10: return 'zehn';
      }
    }
    if (language !== 'de') {
      switch (numb) {
        case  1: return 'one';
        case  2: return 'two';
        case  3: return 'three';
        case  4: return 'four';
        case  5: return 'five';
        case  6: return 'six' ;
        case  7: return 'seven';
        case  8: return 'eight';
        case  9: return 'nine';
        case 10: return 'ten';
      }
    }
  }
// ---- /Language Settings

  function placeNumber() {
    let x = Math.floor((Math.random() * 10) + 1);
    let y = Math.floor((Math.random() * 10) + 1);
    let part1 = makeNumber(x);
    let part2 = makeNumber(y);
    result = x + y; // result is now a global variable!
    $('#result').html(result);
    $('#part1').html(part1);
    $('#part2').html(part2);
  }

  placeNumber();
  $('#human-question').html(humanQuestion);
  $('#human-equation').html(humanEquation);


  $('#contactForm').on('submit', function(e) {

    e.preventDefault();
    e.stopPropagation();

    // get values from FORM
    let name    = $('input[id=name]').val();
    let email   = $('input[id=email]').val();
    let message = $('textarea[id=message]').val();
    let human   = $('input[id=human]').val();

    /*
        console.log('name='+name+"\n");
        console.log('email='+email+"\n");
        console.log('message='+message+"\n");
        console.log('human='+human+"\n");
    */

    let goodToGo = false;
    let messageError = msgServer;
    const pattern = new RegExp(/^(('[\w-\s]+')|([\w-]+(?:\.[\w-]+)*)|('[\w-\s]+')([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})?$)/i);

    $('form[id=contactForm]').addClass('was-validated');

    // ---- Checking name input
    if (name && name.length > 0 && name.trim() !== '') {
      $('#name').removeClass('is-invalid')
        .addClass('is-valid');
      $('#name-feedback').html('&nbsp;')
        .removeClass('invalid-feedback')
        .addClass('valid-feedback');
      goodToGoName = true;
    }
    else {
      messageError = msgEmpty;
      $('#name').removeClass('is-valid')
        .addClass('is-invalid');
      $('#name-feedback').html(fieldName)
        .removeClass('valid-feedback')
        .addClass('invalid-feedback');
      goodToGoName = false;
    }

    // ---- Checking email input
    if (email && email.length > 0 && email.trim() !== '') { // ---- email field not empty
      // ---- Testing email format
      if (pattern.test(email)) { // ---- email format OK
        $('#email').addClass('is-valid')
          .removeClass('is-invalid');
        $('#email-feedback').html('&nbsp;');
        goodToGoEmail = true;
      }
      else { // ---- email format not OK
        messageError = msgEmail;
        $('#email').removeClass('is-valid')
          .addClass('is-invalid');
        $('#email-feedback').html(fieldEmailFormat)
          .removeClass('valid-feedback')
          .addClass('invalid-feedback');
        goodToGoEmail = false;
      }
    }
    else { // ---- email field empty
      messageError = msgEmpty;
      $('#email').removeClass('is-valid')
        .addClass('is-invalid');
      $('#email-feedback').html(fieldEmail)
        .removeClass('valid-feedback')
        .addClass('invalid-feedback');
      goodToGoEmail = false;
    }

    // ---- Checking message input
    if (message && message.length > 0 && message.trim() !== '') { // ---- message field not empty
      $('#message').removeClass('is-invalid')
        .addClass('is-valid');
      $('#message-feedback').html('&nbsp;');
      goodToGoMsg = true;
    }
    else { // ---- message field empty
      messageError = msgEmpty;
      $('#message').removeClass('is-valid')
        .addClass('is-invalid');
      $('#message-feedback').html(fieldMessage)
        .removeClass('valid-feedback')
        .addClass('invalid-feedback');
      goodToGoMsg = false;
    }

    // ---- Converting human input into a number
    human = Number(human);

    // ---- Checking the human factor
    if (human) { // ---- equation field not empty
      if (human !== result) { // ---- result is incorrect
        messageError = msgEquation1 + human + msgEquation2;
        $('#human').removeClass('is-valid')
          .addClass('is-invalid');
        $('#human-feedback').html(fieldHumanResult)
          .removeClass('valid-human-feedback')
          .addClass('invalid-human-feedback');
        goodToGoHuman = false;
      }
      else { // ---- result is correct
        $('#human').removeClass('is-invalid')
          .addClass('is-valid');
        $('#human-feedback').html('&nbsp;');
        goodToGoHuman = true;
      }
    }
    else { // ---- equation field empty
      messageError = msgEmpty;
      $('#human').removeClass('is-valid')
        .addClass('is-invalid');
      $('#human-feedback').html(fieldHuman)
        .removeClass('valid-human-feedback')
        .addClass('invalid-human-feedback');
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

    if (goodToGo) {
      // noinspection JSIgnoredPromiseFromCall
      $.ajax({
        data: $('#contactForm').serialize(),
        beforeSend: function() { // ---- entertain with loading gif while contacting the server
          $('#success').addClass('alert-secondary border-secondary')
            .removeClass('alert-danger border-danger')
            .removeClass('alert-success border-success')
            .html(msgGraphic);
        },
        success:function(response) { // ---- server request positiv ...
          if (response === '1') { // ---- email was sent
            $('#success').removeClass('alert-secondary border-secondary')
              .removeClass('alert-danger border-danger')
              .addClass('alert-success border-success')
              .html(msgSuccess);
          }
          else { // ---- ... but email not sent
            $('#success').removeClass('alert-success border-success')
              .removeClass('alert-secondary border-secondary')
              .addClass('alert-danger border-danger')
              .html(msgNotSent);
          }
        },
        error:function() { // ---- PHP file not found
          $('#success').removeClass('alert-success border-success')
            .removeClass('alert-secondary border-secondary')
            .addClass('alert-danger border-danger')
            .html(msgNoPhpFile);
        },
        complete: function() {
          console.log('Finished');
        },
        type: 'POST', // ---- post data to PHP file
        url: 'assets/php/send_email.php',
      });
      return true;
    }
    else { // ---- there is a problem contacting the server
      $('#success').removeClass('alert-success border-success')
        .removeClass('alert-secondary border-secondary')
        .addClass('alert-danger border-danger')
        .html(messageError);
      return false;
    }
  });

});
