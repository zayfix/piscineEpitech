<?php
    header("Content-type: application/json; charset=utf-8");
    $email = $_POST["email"];

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "L'adresse email " . $email . " est considérée comme valide.";
    } else {
        http_response_code(400);
        echo "L'adresse email " . $email . " est considérée comme invalide.";
    }
?>