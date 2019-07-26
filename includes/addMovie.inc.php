<?php 

session_start();

if (isset($_POST['addMovie'])) {

    include_once 'dbh.inc.php';

    $movieTitle = mysqli_real_escape_string($conn,$_POST['movieTitle']);
    $year = mysqli_real_escape_string($conn,$_POST['year']);
    $description = mysqli_real_escape_string($conn,$_POST['description']);
    $category = mysqli_real_escape_string($conn,$_POST['category']);

    $sql = "INSERT INTO Movie VALUES ('NULL','$movieTitle','$year','$description','$category');";

    mysqli_query($conn,$sql);

    $isDataAdded = mysqli_affected_rows($conn);

        if ($isDataAdded>0) {
            echo "<script type='text/javascript'>
                    alert('The new movie is added...');
                    window.location.href = '../admin.movie.html';
                </script>";
        }else{
            echo "<script type='text/javascript'>
                    alert('An error occured in adding the movie.. please try again.. ');
                    window.location.href = '../admin.movie.html';
                </script>";
        }

}


