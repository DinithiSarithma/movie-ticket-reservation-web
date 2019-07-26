<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->

	<title>Nathan James</title>

	<!-- Google font -->
	<link href="https://fonts.googleapis.com/css?family=Hind:400,700" rel="stylesheet">

	<!-- Bootstrap -->
	<link type="text/css" rel="stylesheet" href="css/bootstrap.min.css" />

	<!-- Slick -->
	<link type="text/css" rel="stylesheet" href="css/slick.css" />
	<link type="text/css" rel="stylesheet" href="css/slick-theme.css" />

	<!-- nouislider -->
	<link type="text/css" rel="stylesheet" href="css/nouislider.min.css" />

	<!-- Font Awesome Icon -->
	<link rel="stylesheet" href="css/font-awesome.min.css">

	<!-- Custom stlylesheet -->
	<link type="text/css" rel="stylesheet" href="css/style.css" />

	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!--[if lt IE 9]>
		  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
		  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
		<![endif]-->

	<style>
	.carousel-inner img {
    -webkit-filter: grayscale(90%);
    filter: grayscale(80%); /* make all photos black and white */
    width: 100%; /* Set width to 100% */
    margin: auto;
	}
	.carousel-caption h3 {
    color: #fff !important;
	}
@media (max-width: 600px) {
  .carousel-caption {
    display: none; /* Hide the carousel text when the screen is less than 600 pixels wide */
  }
}

		</style>

</head>

<body>
	<!-- HEADER -->
	<header>
		<!-- top Header -->
		<div id="top-header">
			<div class="container">
				<div class="pull-left">
					<span>Welcome to Nathan James film Ticketing system</span>
				</div>
				<div class="pull-right">
					<ul class="header-top-links">
						<li><a href="#">Contact US</a></li>
						<li><a href="#">Advertise</a></li>
						<li><a href="#">FAQ</a></li>
						<li class="dropdown default-dropdown">
							<a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">ENG <i class="fa fa-caret-down"></i></a>
							<ul class="custom-menu">
								<li><a href="#">English (ENG)</a></li>
								<li><a href="#">German (DE)</a></li>
								<li><a href="#">French (FR)</a></li>
								<li><a href="#">Spanish (Es)</a></li>
							</ul>
						</li>
						<li class="dropdown default-dropdown">
							<a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">LKR <i class="fa fa-caret-down"></i></a>
							<ul class="custom-menu">
								<li><a href="#">LKR (RS)</a></li>
								<li><a href="#">EUR (€)</a></li>
								<li><a href="#">USD ($)</a></li>

							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<!-- /top Header -->

		<!-- header -->
		<div id="header">
			<div class="container">
				<div class="pull-left">
					<!-- Logo -->
					<div class="header-logo">
						<a class="logo" href="#">
							<img src="./img/logo.png" alt="">
						</a>
					</div>
					<!-- /Logo -->

					<!-- Search -->
					<div class="header-search">
						<form>
							<input class="input search-input" type="text" placeholder="Enter your keyword">
							<select class="input search-categories">
								<option value="0">Film Categories</option>
								<option value="1">All Movies</option>
								<option value="1">Children Movies</option>
								<option value="1">Elders Movies</option>

							</select>
							<button class="search-btn"><i class="fa fa-search"></i></button>
						</form>
					</div>
					<!-- /Search -->
				</div>
				<div class="pull-right">
					<ul class="header-btns">
						<!-- Account -->
						<li class="header-account dropdown default-dropdown">
							<div class="dropdown-toggle" role="button" data-toggle="dropdown" aria-expanded="true">
								<div class="header-btns-icon">
									<i class="fa fa-user-o"></i>
								</div>
								<?php 
									if (isset($_SESSION['firstName'])) {

										echo '<strong class="text-uppercase">'."User - ".$_SESSION['firstName'].'<i class="fa fa-caret-down"></i></strong>
										</div>
										<form action="includes/logout.inc.php" method = "POST">
										<button type="submit" name="logout "class="btn btn-default btn-sm">LOGOUT</button>
										</form>';
										// <input type="submit" name = "logout" value = "LOGOUT">
										// <a class="text-uppercase" action = "includes/logout.inc.php" 
										// name="logout" type = "submit ">Logout</a>

									}elseif (isset($_SESSION['adminName'])) {

										echo '<strong class="text-uppercase">'."Admin - ".$_SESSION['adminName'].'<i class="fa fa-caret-down"></i></strong>
										</div>
										<form action="includes/logout.inc.php" method = "POST">
										<button type="submit" name="logout "class="btn btn-default btn-sm">LOGOUT</button>
										</form>';

									}else {
										echo '<strong class="text-uppercase">My Account<i class="fa fa-caret-down"></i></strong>
										</div>
										<a href="Login.php" class="text-uppercase">Login</a> / <a href="Signin.php" class="text-uppercase">Join</a>';
									}
								?>
								<!-- <strong class="text-uppercase"><? echo $_SESSION['firstName']; ?><i class="fa fa-caret-down"></i></strong> -->
							<!-- </div>
							<a href="Login.php" class="text-uppercase">Login</a> / <a href="Signin.php" class="text-uppercase">Join</a> -->
							<ul class="custom-menu">
								<li><a href="#"><i class="fa fa-user-o"></i> My Account </a></li>
								<li><a href="#"><i class="fa fa-heart-o"></i> Film Wishlist</a></li>
								<li><a href="#"><i class="fa fa-check"></i> Checkout</a></li>
								<li><a href="Login.php"><i class="fa fa-unlock-alt"></i> Login</a></li>
								<li><a href="Login.php"><i class="fa fa-lock"></i>Admin Login</a></li>
								<li><a href="Signin.php"><i class="fa fa-user-plus"></i> Create An Account</a></li>
							</ul>
						</li>
						<!-- /Account -->

						<!-- Cart -->
						<!-- <li class="header-cart dropdown default-dropdown">
							<a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
								<div class="header-btns-icon">
									<i class="fa fa-shopping-cart"></i>
									<span class="qty">3</span>
								</div>
								<strong class="text-uppercase">My Cart:</strong>
								<br>
								<span>35.20 LKR</span>
							</a>
							<div class="custom-menu">
								<div id="shopping-cart">
									<div class="shopping-cart-list">
										<div class="product product-widget">
											<div class="product-thumb">
												<img src="./img/Cars3.jpg" alt="">
											</div>
											<div class="product-body">
												<h3 class="product-price">$32.50 <span class="qty">x3</span></h3>
												<h2 class="product-name"><a href="#">Product Name Goes Here</a></h2>
											</div>
											<button class="cancel-btn"><i class="fa fa-trash"></i></button>
										</div>
										<div class="product product-widget">
											<div class="product-thumb">
												<img src="./img/thumb-product01.jpg" alt="">
											</div>
											<div class="product-body">
												<h3 class="product-price">$32.50 <span class="qty">x3</span></h3>
												<h2 class="product-name"><a href="#">Product Name Goes Here</a></h2>
											</div>
											<button class="cancel-btn"><i class="fa fa-trash"></i></button>
										</div>
									</div>
									<div class="shopping-cart-btns">
										<button class="main-btn">View Cart</button>
										<button class="primary-btn"><a href="checkout.html">Checkout </a><i class="fa fa-arrow-circle-right"></i></button>
									</div>
								</div>
							</div>
						</li> -->
						<!-- /Cart -->

						<!-- Mobile nav toggle-->
						<li class="nav-toggle">
							<button class="nav-toggle-btn main-btn icon-btn"><i class="fa fa-bars"></i></button>
						</li>
						<!-- / Mobile nav toggle -->
					</ul>
				</div>
			</div>
			<!-- header -->
		</div>
		<!-- container -->
	</header>
	<!-- /HEADER -->

	<!-- NAVIGATION -->
	<div id="navigation">
		<!-- container -->
		<div class="container">
			<div id="responsive-nav">
				<!-- category nav -->
					<!-- place the category nav here -->

				<!-- menu nav -->
				<div class="menu-nav">
					<span class="menu-header">Menu <i class="fa fa-bars"></i></span>
					<ul class="menu-list">
						<li><a href="index.php">Home</a></li>
						<li><a href="index.php">Now Showing</a></li>
						<li><a href="index.php">Reservations</a></li>
						<li><a href="index.php">Trending</a></li>
						<li><a href="index.php">Events</a></li>
						<li><a href="index.php">Seminars</a></li>
						<li><a href="index.php">Offers</a></li>

					</ul>
				</div>
				<!-- menu nav -->
			</div>
		</div>
		<!-- /container -->
	</div>
	<!-- /NAVIGATION -->

<script src="https://www.gstatic.com/firebasejs/5.7.0/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA0bY2Tszv_Wif2vl7F0Z46HQoHY4IRa-Y",
    authDomain: "nathanjames-d56a3.firebaseapp.com",
    databaseURL: "https://nathanjames-d56a3.firebaseio.com",
    projectId: "nathanjames-d56a3",
    storageBucket: "nathanjames-d56a3.appspot.com",
    messagingSenderId: "164905676726"
  };
  firebase.initializeApp(config);
</script>

		<!-- jQuery Plugins -->
		<script src="js/jquery.min.js"></script>
		<script src="js/bootstrap.min.js"></script>
		<script src="js/slick.min.js"></script>
		<script src="js/nouislider.min.js"></script>
		<script src="js/jquery.zoom.min.js"></script>
		<script src="js/main.js"></script>

		<br>
							<!-- END OF THE MAIN HEADER -->