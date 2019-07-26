<?php

if (isset($_POST['signup'])) {

    //database connection
    include_once 'dbh.inc.php';

    $first = mysqli_real_escape_string($conn,$_POST['first']);
    $last = mysqli_real_escape_string($conn,$_POST['last']);
    $email = mysqli_real_escape_string($conn,$_POST['email']);
    $address = mysqli_real_escape_string($conn,$_POST['address']);
    $tel = mysqli_real_escape_string($conn,$_POST['tel']);
    $password = mysqli_real_escape_string($conn,$_POST['password']);

    $sql = "INSERT INTO users VALUES ('$first','$last','$email','$address','$tel','$password');";

    mysqli_query($conn,$sql);

    //error han
    if (empty($first) || empty($last) || empty($email) || empty($address) || empty($tel) || empty($password)) {

        echo "<script type='text/javascript'>
                    alert(' You cannot keep any blank areas..  ');
                    window.location.href = '../Signin.php';
                </script>";

    }else {

        $isDataAdded = mysqli_affected_rows($conn);

        if ($isDataAdded>0) {
            echo "<script type='text/javascript'>
                    alert('Welcome!! You are now a member of our movie system.. ');
                    window.location.href = '../Login.php';
                </script>";
        }else{
            echo "<script type='text/javascript'>
                    alert('An error occured.. please try again.. ');
                    window.location.href = '../Signin.php';
                </script>";
        }
    }
}else {
    echo "<script type='text/javascript'>
                    alert('An error occured when signing in to our system.. please try again.. ');
                    window.location.href = ' ../Signin.html?signin=error';
                </script>";
    // header ("Location: ../Signin.html?signin=error");
    exit();
}