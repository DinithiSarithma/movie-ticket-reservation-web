<?php

session_start();

if(isset($_SESSION['firstName'])){

    unset($_SESSION['firstName']);
    echo "<script type='text/javascript'>
                alert(' You are now logged out!! ');
                window.location.href = '../index.php?logout=success';
            </script>";

}else {
    unset($_SESSION['adminName']);
    echo "<script type='text/javascript'>
                alert(' You are now logged out of Admin!! ');
                window.location.href = '../index.php?logout=success';
            </script>";
}

