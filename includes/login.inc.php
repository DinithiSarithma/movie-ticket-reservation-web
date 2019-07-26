<?php

session_start(); 

if (isset($_POST['userLoginButton'])) {

    include_once 'dbh.inc.php';

    $userId = mysqli_real_escape_string($conn,$_POST['userId']);
    $userPassword = mysqli_real_escape_string($conn,$_POST['userPassword']);

    //error handlers

    //checking for empty fields

    if ( empty($userId) || empty($userPassword) ) {
        echo "<script type='text/javascript'>
                alert(' You cannot keep any blank areas..  ');
                window.location.href = '../Login.html';
            </script>"; 
    }else {
        $sql = "SELECT * FROM users WHERE email='$userId' AND password ='$userPassword' ";
        $result = mysqli_query($conn,$sql);
        $resultCheck = mysqli_num_rows($result);
        $row = mysqli_fetch_assoc($result);

        if ($resultCheck<1) {
            echo "<script type='text/javascript'>
                alert(' The username or password you entered is incorrect.. Please try again.. ');
                window.location.href = '../Login.php';
            </script>";
        }else {
            //Log in the user
            $_SESSION['firstName'] = $row['firstName'];
            $_SESSION['lastName'] = $row['lastName'];
            $_SESSION['email'] = $row['email'];
            $_SESSION['password'] = $row['password'];

            // echo $_SESSION['firstName'];

            if (isset($_SESSION['type'])) {
                echo "<script type='text/javascript'>
                alert(' You are now logged in as User!! ');
                window.location.href = '../includes/billData.inc.php?login=success';
                </script>";
            }else {
                echo "<script type='text/javascript'>
                alert(' You are now logged in as User!! ');
                window.location.href = '../index.php?login=success';
            </script>";
            }

        }    
    }

}elseif (isset($_POST['adminLoginButton'])) {

    include_once 'dbh.inc.php';

    $adminId = mysqli_real_escape_string($conn,$_POST['adminId']);
    $adminPassword = mysqli_real_escape_string($conn,$_POST['adminPassword']);

    //error hanlders

    //checking for empty fields

    if ( empty($adminId) || empty($adminPassword) ) {
        echo "<script type='text/javascript'>
                alert(' You cannot keep any blank areas..  ');
                window.location.href = '../Login.html';
            </script>"; 
    }else {
        $sql = "SELECT * FROM Admin WHERE adminId='$adminId' AND password ='$adminPassword' ";
        $result = mysqli_query($conn,$sql);
        $resultCheck = mysqli_num_rows($result);
        $row = mysqli_fetch_assoc($result);

        if ($resultCheck<1) {
            echo "<script type='text/javascript'>
                alert(' The admin Id or password you entered is incorrect.. Please try again.. ');
                window.location.href = '../Login.php';
            </script>";
        }else {
            //Log in the user
            $_SESSION['adminName'] = $row['firstName'];
            $_SESSION['lastName'] = $row['lastName'];

            // echo $_SESSION['firstName'];

            if (isset($_SESSION['type'])) {
                echo "<script type='text/javascript'>
                alert(' You are now logged in as Admin!! ');
                window.location.href = '../admin.dashboard.html';
                </script>";
            }else {
                echo "<script type='text/javascript'>
                alert(' You are now logged in as Admin!! ');
                window.location.href = '../index.php?login=success';
            </script>";
            }

            

        }    
    }
    

}else { 
    header ("Location: ../Login.php?login=error");
    exit(); 
}