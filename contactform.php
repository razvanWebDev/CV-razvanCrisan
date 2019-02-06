<?php 

 $name = $_POST['name'];
 $mailFrom = $_POST['mail'];
 $message = $_POST['message'];

 $mailTo = "crsn_razvan@yahoo.com";
 $headers = "From: ".$mailFrom;
 $txt = "You have received an email from ".$name.".\n ".
            "User message: $message.\n";

 mail($mailTo,$txt,$headers);
 header("Location: index.html");

?>