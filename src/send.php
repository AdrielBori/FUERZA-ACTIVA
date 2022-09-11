<?php
$name= $_POST['name'];
$mail= $_POST['mail'];
$message= $_POST['message'];


$header= 'From ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" .phpversion() . " \r\n";
$header .= "Mine-Version: 1.0 \r\n";
$header .= "Content-Tipe: text/plain";

$message = "Es mensaje fue enviado por: " . $name . "\r\n";
$message .= "Su e-mail es: " . $mail . " \r\n";
$message .= "Mensaje: " . $_POST['message'] . " \r\n";
$message .= "Enviado el: " .date('d/m/Y', time());


$para = 'adrielbori@gmail.com';
$asunto = 'Quiero sumar mi Fuerza';

mail($para, $asunto, utf8_decode($message), $header);

header("Location:index.html");
?>
