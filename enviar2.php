<?php

@$name = addcslashes($_POST['name']);
@$email = addcslashes($_POST['email']);
@$subject = addcslashes($_POST['subject']);
@$message = addcslashes($_POST['message']);

$cabecera = "From: $email\n"
"Reply-To: $email\n";
$asunto = "$subject";
$email_to = "rickyeyu@gmail.com";
$contenido = "$name le ha enviado el siguiente mensaje:\n" . "\n" . "$message\n" . "\n";

if(@mail($email_to, $asunto, $contenido, $cabecera)){
   die("Muchas gracias, su mensaje fue enviado correctamente"); 
}else{
    die("Error: Su mensaje no pudo ser enviado, intente mas tarde");
}
?>




