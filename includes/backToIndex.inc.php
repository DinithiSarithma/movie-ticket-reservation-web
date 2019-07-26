<?php

session_start();

if (isset($_SESSION['movie'])) {

    unset($_SESSION['movie']);
    
    header ("Location: ../index.php");

}elseif (isset($_SESSION['type'])) {
    unset($_SESSION['type']);
    header ("Location: ../index.php");
}else{
    header ("Location: ../Select Time.php");
}