
      // Initialize Firebase
      var config = {
        apiKey: "AIzaSyA6swDC9X6ngehYczHLzxsk_Pck-b20ikY",
        authDomain: "nathan-james-web.firebaseapp.com",
        databaseURL: "https://nathan-james-web.firebaseio.com",
        projectId: "nathan-james-web",
        storageBucket: "nathan-james-web.appspot.com",
        messagingSenderId: "429172932466"
    };
    firebase.initializeApp(config);

  function A1(){
    var newseat = document.getElementById("A1");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;

    document.getElementById("fill").value += " "+fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
      var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";

    BookedSeat();

    }


  }

    function A2(){
      var newseat = document.getElementById("A2");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();
    ;

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
      var fill = newseat.value;
    document.getElementById("fill").value -=  fill + " ";
    BookedSeat();
     ;
    }

  }

    function A3(){
      var newseat = document.getElementById("A3");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
      var fill = newseat.value;
    document.getElementById("fill").value -=  fill + " ";
    BookedSeat();

    }

  }

  // function A3(){
  //   var newseat = document.getElementById("A3");
  //   var firebaseStatusRef = firebase.database().ref().child("Status"); 
  //   var firebaseSeatStatusRef = firebaseStatusRef.child("A3");

  //   firebaseSeatStatusRef.on('child_added', snap => {
  //     var seatStatus = snap.val();

  //     if (seatStatus=="Booked") {
  //       newseat.style.backgroundColor = 'seat';
  //       newseat.setAttribute("class" , "seat");
  //       var fill = newseat.value;
  //       document.getElementById("fill").value -=  fill + " ";
  //       BookedSeat();
  //     }else{
  //       newseat.className="booked-seat";
  //       newseat.setAttribute("class" , "booked-seat");
  //       firebaseStatusRef.child("A3").set("booked");
  //       var fill = newseat.value;
  //       document.getElementById("fill").value += fill + " ";
  //       Seat();
  //     }
  //   }); 
  // }


    function A4(){
      var newseat = document.getElementById("A4");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
      var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function A5(){
      var newseat = document.getElementById("A5");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function A6(){
      var newseat = document.getElementById("A6");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function A7(){
      var newseat = document.getElementById("A7");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function A8(){
      var newseat = document.getElementById("A8");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function A9(){
      var newseat = document.getElementById("A9");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function A10(){
      var newseat = document.getElementById("A10");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function A11(){
      var newseat = document.getElementById("A11");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function A12(){
      var newseat = document.getElementById("A12");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function A13(){
      var newseat = document.getElementById("A13");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function A14(){
      var newseat = document.getElementById("A14");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function A15(){
      var newseat = document.getElementById("A15");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function B1(){
      var newseat = document.getElementById("B1");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function B2(){
      var newseat = document.getElementById("B2");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function B3(){
      var newseat = document.getElementById("B3");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function B4(){
      var newseat = document.getElementById("B4");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function B5(){
      var newseat = document.getElementById("B5");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function B6(){
      var newseat = document.getElementById("B6");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function B7(){
      var newseat = document.getElementById("B7");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function B8(){
 var newseat = document.getElementById("B8");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function B9(){
 var newseat = document.getElementById("B9");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function B10(){
 var newseat = document.getElementById("B10");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function B11(){
 var newseat = document.getElementById("B11");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function B12(){
 var newseat = document.getElementById("B12");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function B13(){
 var newseat = document.getElementById("B13");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function B14(){
 var newseat = document.getElementById("B14");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function B15(){
 var newseat = document.getElementById("B15");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function C1(){
 var newseat = document.getElementById("C1");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function C2(){
 var newseat = document.getElementById("C2");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function C3(){
 var newseat = document.getElementById("C3");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function C4(){
 var newseat = document.getElementById("C4");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function C5(){
 var newseat = document.getElementById("C5");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function C6(){
 var newseat = document.getElementById("C6");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function C7(){
 var newseat = document.getElementById("C7");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function C8(){
 var newseat = document.getElementById("C8");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function C9(){
 var newseat = document.getElementById("C9");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function C10(){
 var newseat = document.getElementById("C10");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function C11(){
 var newseat = document.getElementById("C11");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function C12(){
 var newseat = document.getElementById("C12");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function C13(){
 var newseat = document.getElementById("C13");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function C14(){
 var newseat = document.getElementById("C14");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function C15(){
 var newseat = document.getElementById("C15");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function D1(){
 var newseat = document.getElementById("D1");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function D2(){
 var newseat = document.getElementById("D2");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function D3(){
 var newseat = document.getElementById("D3");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function D4(){
 var newseat = document.getElementById("D4");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function D5(){
 var newseat = document.getElementById("D5");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function D6(){
 var newseat = document.getElementById("D6");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function D7(){
 var newseat = document.getElementById("D7");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function D8(){
 var newseat = document.getElementById("D8");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function D9(){
 var newseat = document.getElementById("D9");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function D10(){
 var newseat = document.getElementById("D10");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function D11(){
 var newseat = document.getElementById("D11");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function D12(){
 var newseat = document.getElementById("D12");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function D13(){
 var newseat = document.getElementById("D13");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function D14(){
 var newseat = document.getElementById("D14");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function D15(){
 var newseat = document.getElementById("D15");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function E1(){
 var newseat = document.getElementById("E1");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function E2(){
 var newseat = document.getElementById("E2");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function E3(){
 var newseat = document.getElementById("E3");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function E4(){
 var newseat = document.getElementById("E4");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function E5(){
 var newseat = document.getElementById("E5");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function E6(){
 var newseat = document.getElementById("E6");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function E7(){
 var newseat = document.getElementById("E7");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function E8(){
 var newseat = document.getElementById("E8");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function E9(){
 var newseat = document.getElementById("E9");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function E10(){
 var newseat = document.getElementById("E10");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function E11(){
 var newseat = document.getElementById("E11");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function E12(){
 var newseat = document.getElementById("E12");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function E13(){
 var newseat = document.getElementById("E13");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function E14(){
 var newseat = document.getElementById("E14");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function E15(){
 var newseat = document.getElementById("E15");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function F1(){
 var newseat = document.getElementById("F1");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function F2(){
 var newseat = document.getElementById("F2");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function F3(){
 var newseat = document.getElementById("F3");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function F4(){
 var newseat = document.getElementById("F4");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function F5(){
 var newseat = document.getElementById("F5");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function F6(){
 var newseat = document.getElementById("F6");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function F7(){
 var newseat = document.getElementById("F7");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function F8(){
 var newseat = document.getElementById("F8");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function F9(){
 var newseat = document.getElementById("F9");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function F10(){
 var newseat = document.getElementById("F10");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function F11(){
 var newseat = document.getElementById("F11");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function F12(){
 var newseat = document.getElementById("F12");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function F13(){
 var newseat = document.getElementById("F13");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function F14(){
 var newseat = document.getElementById("F14");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function F15(){
 var newseat = document.getElementById("F15");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function G1(){
 var newseat = document.getElementById("G1");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function G2(){
 var newseat = document.getElementById("G2");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function G3(){
 var newseat = document.getElementById("G3");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function G4(){
 var newseat = document.getElementById("G4");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function G5(){
 var newseat = document.getElementById("G5");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function G6(){
 var newseat = document.getElementById("G6");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function G7(){
 var newseat = document.getElementById("G7");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function G8(){
 var newseat = document.getElementById("G8");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function G9(){
 var newseat = document.getElementById("G9");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function G10(){
 var newseat = document.getElementById("G10");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function G11(){
 var newseat = document.getElementById("G11");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function G12(){
 var newseat = document.getElementById("G12");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function G13(){
 var newseat = document.getElementById("G13");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function G14(){
 var newseat = document.getElementById("G14");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function G15(){
 var newseat = document.getElementById("G15");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function H1(){
 var newseat = document.getElementById("H1");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function H2(){
 var newseat = document.getElementById("H2");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function H3(){
 var newseat = document.getElementById("H3");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function H4(){
 var newseat = document.getElementById("H4");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function H5(){
 var newseat = document.getElementById("H5");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function H6(){
 var newseat = document.getElementById("H6");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function H7(){
 var newseat = document.getElementById("H7");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function H8(){
 var newseat = document.getElementById("H8");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function H9(){
 var newseat = document.getElementById("H9");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function H10(){
 var newseat = document.getElementById("H10");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function H11(){
 var newseat = document.getElementById("H11");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function H12(){
 var newseat = document.getElementById("H12");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function H13(){
 var newseat = document.getElementById("H13");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function H14(){
 var newseat = document.getElementById("H14");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function H15(){
 var newseat = document.getElementById("H15");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function I1(){
 var newseat = document.getElementById("I1");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function I2(){
 var newseat = document.getElementById("I2");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function I3(){
 var newseat = document.getElementById("I3");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function I4(){
 var newseat = document.getElementById("I4");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function I5(){
 var newseat = document.getElementById("I5");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function I6(){
 var newseat = document.getElementById("I6");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function I7(){
 var newseat = document.getElementById("I7");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function I8(){
 var newseat = document.getElementById("I8");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function I9(){
 var newseat = document.getElementById("I9");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function I10(){
 var newseat = document.getElementById("I10");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function I11(){
 var newseat = document.getElementById("I11");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function I12(){
 var newseat = document.getElementById("I12");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function I13(){
 var newseat = document.getElementById("I13");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

    function I14(){
 var newseat = document.getElementById("I14");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();
    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();
    }
  }

    function I15(){
 var newseat = document.getElementById("I15");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();
    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();
    }
  }

    function J1(){
 var newseat = document.getElementById("J1");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();
    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();
    }
  }

    function J2(){
 var newseat = document.getElementById("J2");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();
    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();
    }
  }

    function J3(){
 var newseat = document.getElementById("J3");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();
    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();
    }
  }

    function J4(){
 var newseat = document.getElementById("J4");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();
    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();
    }
  }

    function J5(){
 var newseat = document.getElementById("J5");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();
    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();
    }
  }

    function J6(){
 var newseat = document.getElementById("J6");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();
    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();
    }
  }

    function J7(){
 var newseat = document.getElementById("J7");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();
    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();
    }
  }

    function J8(){
 var newseat = document.getElementById("J8");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();
    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();
    }
  }

    function J9(){
 var newseat = document.getElementById("J9");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();
    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();
    }
  }

    function J10(){
 var newseat = document.getElementById("J10");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();
    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();
    }
  }

    function J11(){
 var newseat = document.getElementById("J11");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();
    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();
    }
  }

    function J12(){
 var newseat = document.getElementById("J12");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();
    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();
    }
  }

    function J13(){
 var newseat = document.getElementById("J13");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();
    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();
    }
  }

    function J14(){
 var newseat = document.getElementById("J14");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();
    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();
    }
  }

    function J15(){
 var newseat = document.getElementById("J15");
    if (newseat.className=="seat") {

      newseat.className="booked-seat";
      newseat.setAttribute("class" , "booked-seat");
      var fill = newseat.value;
    document.getElementById("fill").value += fill + " ";
    Seat();

    } else  {

      newseat.style.backgroundColor = 'seat';
      newseat.setAttribute("class" , "seat");
            var fill = newseat.value;
    document.getElementById("fill").value -= fill + " ";
    BookedSeat();

    }
  }

  // box /////////////////////////////////////////////////////////////////

  function Box1(){
    var newseat = document.getElementById("Box1");
    if (newseat.className=="box") {

      newseat.className="booked-box";
      newseat.setAttribute("class" , "booked-box");
      var fill = newseat.value;
    document.getElementById("BoxSeats").value += " "+fill + " ";
    Box();


    } else  {

      newseat.style.backgroundColor = 'box';
      newseat.setAttribute("class" , "box");
      var fill = newseat.value;
    document.getElementById("BoxSeats").value -= fill + " ";
    BookedBox();

    }
  }

    function Box2(){
    var newseat = document.getElementById("Box2");
    if (newseat.className=="box") {

      newseat.className="booked-box";
      newseat.setAttribute("class" , "booked-box");
      var fill = newseat.value;
    document.getElementById("BoxSeats").value += " "+fill + " ";
    Box();


    } else  {

      newseat.style.backgroundColor = 'box';
      newseat.setAttribute("class" , "box");
      var fill = newseat.value;
    document.getElementById("BoxSeats").value -= fill + " ";
    BookedBox();

    }


  }

    function Box3(){
    var newseat = document.getElementById("Box3");
    if (newseat.className=="box") {

      newseat.className="booked-box";
      newseat.setAttribute("class" , "booked-box");
      var fill = newseat.value;
    document.getElementById("BoxSeats").value += " "+fill + " ";
    Box();


    } else  {

      newseat.style.backgroundColor = 'box';
      newseat.setAttribute("class" , "box");
      var fill = newseat.value;
    document.getElementById("BoxSeats").value -= fill + " ";
    BookedBox();

    }


  }

    function Box4(){
    var newseat = document.getElementById("Box4");
    if (newseat.className=="box") {

      newseat.className="booked-box";
      newseat.setAttribute("class" , "booked-box");
      var fill = newseat.value;
    document.getElementById("BoxSeats").value += " "+fill + " ";
    Box();


    } else  {

      newseat.style.backgroundColor = 'box';
      newseat.setAttribute("class" , "box");
      var fill = newseat.value;
    document.getElementById("BoxSeats").value -= fill + " ";
    BookedBox();

    }


  }

    function Box5(){
    var newseat = document.getElementById("Box5");
    if (newseat.className=="box") {

      newseat.className="booked-box";
      newseat.setAttribute("class" , "booked-box");
      var fill = newseat.value;
    document.getElementById("BoxSeats").value += " "+fill + " ";
    Box();


    } else  {

      newseat.style.backgroundColor = 'box';
      newseat.setAttribute("class" , "box");
      var fill = newseat.value;
    document.getElementById("BoxSeats").value -= fill + " ";
    BookedBox();

    }
 }

    function Box6(){
    var newseat = document.getElementById("Box6");
    if (newseat.className=="box") {

      newseat.className="booked-box";
      newseat.setAttribute("class" , "booked-box");
      var fill = newseat.value;
      document.getElementById("BoxSeats").value += " "+fill + " ";

      Box();


    } else  {

      newseat.style.backgroundColor = 'box';
      newseat.setAttribute("class" , "box");
      var fill = newseat.value;
      document.getElementById("BoxSeats").value -= fill + " ";
     BookedBox();
    }
 }

// Things in the if condtion goes in normal one and things in else condition goes in normal condition

function BookedBox(){
  //  var Total =  parseInt(document.getElementById("BoxPrice").value)  ;
  //  Total.value = 0;
  //  var NewTotal = Total - 1500 ;
  //  document.getElementById("BoxPrice").value = NewTotal ;
    var count= document.getElementById('CalculatedTotal').innerHTML;
    if(count==1500){
      count= 00;
    }
    else{
    count--;
    count = (count + 1) - 1500;
  }
    document.getElementById('CalculatedTotal').innerHTML = count;
}

function Box(){
  //  var Total =  parseInt(document.getElementById("BoxPrice").value)  ;
  //  Total.value = 0;
  //  var NewTotal = Total + 1500 ;
  //  document.getElementById("BoxPrice").value = NewTotal ;
    var count= document.getElementById('CalculatedTotal').innerHTML;
    if(count==0){
      count= 1500;
    }
    else{
    count++;
    count = (count-1)+1500;
  }
    document.getElementById('CalculatedTotal').innerHTML = count;
}

function Seat(){
  //var Total =  parseInt(document.getElementById("SeatPrice").value)  ;
  //  Total.value = 0;
//    var NewTotal = Total + 700 ;
  //  document.getElementById("SeatPrice").value = NewTotal ;
    var count= document.getElementById('CalculatedTotal').innerHTML;
    if(count==0){
      count= 700;
    }
    else{
    count++;
    count = (count-1)+700;
  }
    document.getElementById('CalculatedTotal').innerHTML = count;
}

function BookedSeat(){
//  var Total =  parseInt(document.getElementById("SeatPrice").value)  ;
//    Total.value = 0;
//    var NewTotal = Total - 700 ;
//    document.getElementById("SeatPrice").value = NewTotal ;
    var count= document.getElementById('CalculatedTotal').innerHTML;
    if(count==700){
      count= 0.00;
    }
    else{
    count--;
    count = (count+1) -700 ;
  }
    document.getElementById('CalculatedTotal').innerHTML = count;
}

function Half(){

  var halfseats = parseInt(document.getElementById("noofhalves").value);
  var count = document.getElementById('CalculatedTotal').innerHTML;
    count = count- (halfseats*300);
   document.getElementById('CalculatedTotal').innerHTML = count;
//  if (halfseats<fullseats) {
//    fullseats = fullseats - halfseats;
//    document.getElementById("Price").value = fullseats;
//    document.getElementById("halfs").value = halfseats;
//
//  } else {
//    alert("please enter a value less than full seats");
//    document.getElementById("noofhalfs").value = "Number of Half Seats" ;
//    history.go(0);

//  }
}
