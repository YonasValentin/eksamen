<?php
if(isset($_POST['submit'])) {
    $emailTo = "yonasklibi@gmail.com";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $headers = "From: " . $_POST['name'];
    if (mail($emailTo, $name, $phone, $subject, $message, $headers)) {
        $successMessage = '<div class="succes-message" role="alert">Your message was sent, we\'ll get back to you ASAP!</div>';
    }

}
?>