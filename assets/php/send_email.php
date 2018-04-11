<?php
// ---- send_email.php
// ---------------------------------------------------------

if (isset($_REQUEST['email'])) { // ensuring a receiver address is given!



  // ---- User settings -----------------------------------
  if (date_default_timezone_get != 'America/New_York'){date_default_timezone_set('America/New_York');}
  //if (date_default_timezone_get != 'Europe/Berlin') {date_default_timezone_set('Europe/Berlin');}

  $to_name  = 'Freddy Friday';     // Don't forget to change your name ...
  $to_email = 'freddy@friday.net'; // ... and email address!
  $subject  = 'Message from your website';
  // ---- /User settings ----------------------------------



  // ---- Email information from contact form
  $from_name    = $_REQUEST['name'];
  $from_email   = $_REQUEST['email'];
  $from_message = $_REQUEST['message'];
  // ---- /Email information from contact form

  $date = date("d.M.Y");   // Date eMail was sent
  $time = date("H:i");     // Time eMail was sent

  // ---- Preparing the html message
  $message = '<!DOCTYPE html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <title>Message from your website</title>
      <style type="text/css">
        body {left:40px;top:10px;position:absolute;font:1rem Arial,Helvetica,Verdana,sans-serif;color:#000;background-color:#fff;}
        .message {white-space:pre;}
      </style>
    </head>
    <body>
      <p>On '.$date.' at '.$time.' <strong>'.$from_name.'</strong> wrote on your homepage:</p>
      <hr>
      <p class="message">'
    .htmlentities(strip_tags($from_message),ENT_QUOTES,'UTF-8').
    '</p>
    </body>
  </html>';

  // ---- Preparing the message header
  $to   = $to_name   ? $to_email   : '"'.mb_encode_mimeheader($to_name).'" <'.$to_email.'>';
  $from = $from_name ? $from_email : '"'.mb_encode_mimeheader($from_name).'" <'.$from_email.'>';

  $headers = array (
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset="UTF-8"',
//    'Content-Transfer-Encoding: quoted-printable', // Try if "8bit" doesn't work, only!
    'Content-Transfer-Encoding: 8bit',
    'Return-Path: '.$from_name.' <'.$from.'>',
    'Date: '.date('r', $_SERVER['REQUEST_TIME']),
    'Message-ID: <'.$_SERVER['REQUEST_TIME'].md5($_SERVER['REQUEST_TIME']).'@'.$_SERVER['SERVER_NAME'].'>',
    'From: '.$from_name.' <'.$from.'>',
    'Sender: '.$from_name.' <'.$from.'>',
    'Reply-To: '.$from_name.' <'.$from.'>',
    'X-Mailer: PHP v'.phpversion(),
    'X-Originating-IP: '.$_SERVER['SERVER_ADDR'],
  );

  // ---- sending the email
  if (mail($to, '=?UTF-8?B?'.base64_encode($subject).'?=', $message, implode(chr(13), $headers))) {
    echo 1; }     // ---- Tell the calling JavaScript, the email was sent.
  else { echo 0;} // ---- Or something went wrong.
}
?>
