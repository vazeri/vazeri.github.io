<?php 
if(isset($_POST['submit'])){
    $to = "gzerox@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $first_name = $_POST['first_name'];
    $subject = "Form submission";
    $message = $first_name . " " . " te escribio:" . "\n\n" . $_POST['message'];
  
    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Mensaje enviado. Gracias " . $first_name . ", me pondre en contacto a la brevedad si es necesario.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    // You cannot use header and echo together. It's one or the other.
    }
?>