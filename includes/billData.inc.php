<?php
session_start();

if (isset($_SESSION['movie']) && isset($_SESSION['type'])) {

    include_once 'dbh.inc.php';

    $movieTitle = $_SESSION['movie'];

    $sql = "SELECT * FROM Movie WHERE title='$movieTitle' ";
    $result = mysqli_query($conn,$sql);
    $resultCheck = mysqli_num_rows($result);
    $row = mysqli_fetch_assoc($result);

    if ($resultCheck<1) {
        echo "<script type='text/javascript'>
            alert(' No database results.. error occured.. Please try again.. ');
            window.location.href = '../Snack Selection.php';
        </script>";
    }else {
        $_SESSION['year']= $row['year'];
        $_SESSION['category'] = $row['category'];
        
        echo "<script type='text/javascript'>
            window.location.href = '../Buy now.php';
        </script>";
    }

}else {
    echo "<script type='text/javascript'>
                alert(' An error occured.. Please try again.. ');
                window.location.href = '../index.php';
            </script>";
}