<?php
$to = "contato@diegopaiva.dev.br";
$subject = $_POST["subject"];
$txt =
 "Nome: " . $_POST["name"].
 "\nGênero: ". $_POST["gender"].
 "\nIdade: ". $_POST["age"].
 "\nContato: " .$_POST["number"].
 "\nConteudo: " . $_POST["comment"];
$headers = "From: " . $_POST["email"];

mail($to,$subject,$txt,$headers);
?> 