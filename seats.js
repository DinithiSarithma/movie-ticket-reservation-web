  
  var firebaseSeatStatusRef = firebase.database().ref().child("Seats");
  var date = sessionStorage.getItem("date");

  var A1 = firebaseSeatStatusRef.child(" A1  ");
  A1.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("A1").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("A1").setAttribute("class","seat");
    }
  });

  var A2 = firebaseSeatStatusRef.child("A2 ");
  console.log(A2);
  A2.equalTo(date).on('value',function(dateSnap){
    console.log(date);
    console.log(dateSnap.val());
      dateSnap.forEach(function(dateTrue){
        var ifDate = dateTrue.val();
        console.log(ifDate);
      });
  });

  A2.once("value", function(snapshot) {
      snapshot.forEach(function(child) {
          if (child.val()==sessionStorage.getItem("Date")) {
            // console.log(child.val());
            // console.log("Yes");
          }else{
            // console.log(child.val());
            // console.log("No")
          }
          // console.log(child.key+": "+child.val());
      });
  });

    A2.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
        document.getElementById("A2").setAttribute("class","notAvailable-seat");
    }else{
        document.getElementById("A2").setAttribute("class","seat");
    }
    });


  var A3 = firebaseSeatStatusRef.child("A3  ");
  A3.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("A3").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("A3").setAttribute("class","seat");
    }
  });

  var A4 = firebaseSeatStatusRef.child("A4  ");
  A4.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("A4").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("A4").setAttribute("class","seat");
    }
  });

  var A5 = firebaseSeatStatusRef.child("A5  ");
  A5.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("A5").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("A5").setAttribute("class","seat");
    }
  });

  var A6 = firebaseSeatStatusRef.child("A6  ");
  A6.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("A6").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("A6").setAttribute("class","seat");
    }
  });

  var A7 = firebaseSeatStatusRef.child("A7  ");
  A7.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("A7").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("A7").setAttribute("class","seat");
    }
  });

  var A8 = firebaseSeatStatusRef.child("A8  ");
  A8.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("A8").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("A8").setAttribute("class","seat");
    }
  });

  var A9 = firebaseSeatStatusRef.child("A9  ");
  A9.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("A9").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("A9").setAttribute("class","seat");
    }
  });

  var A10 = firebaseSeatStatusRef.child("A10  ");
  A10.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("A10").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("A10").setAttribute("class","seat");
    }
  });

  var A11 = firebaseSeatStatusRef.child("A11  ");
  A11.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("A11").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("A11").setAttribute("class","seat");
    }
  });

  var A12 = firebaseSeatStatusRef.child("A12  ");
  A12.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("A12").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("A12").setAttribute("class","seat");
    }
  });

  var A13 = firebaseSeatStatusRef.child("A13  ");
  A13.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("A13").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("A13").setAttribute("class","seat");
    }
  });

  var A14 = firebaseSeatStatusRef.child("A14  ");
  A14.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("A14").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("A14").setAttribute("class","seat");
    }
  });

  var A15 = firebaseSeatStatusRef.child("A15  ");
  A15.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("A15").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("A15").setAttribute("class","seat");
    }
  });

  var B1 = firebaseSeatStatusRef.child("B1  ");
  B1.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("B1").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("B1").setAttribute("class","seat");
    }
  });

  var B2 = firebaseSeatStatusRef.child("B2  ");
  B2.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("B2").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("B2").setAttribute("class","seat");
    }
  });

  var B3 = firebaseSeatStatusRef.child("B3  ");
  B3.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("B3").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("B3").setAttribute("class","seat");
    }
  });

  var B4 = firebaseSeatStatusRef.child("B4  ");
  B4.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("B4").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("B4").setAttribute("class","seat");
    }
  });

  var B5 = firebaseSeatStatusRef.child("B5  ");
  B5.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("B5").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("B5").setAttribute("class","seat");
    }
  });

  var B6 = firebaseSeatStatusRef.child("B6  ");
  B6.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("B6").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("B6").setAttribute("class","seat");
    }
  });

  var B7 = firebaseSeatStatusRef.child("B7  ");
  B7.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("B7").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("B7").setAttribute("class","seat");
    }
  });

  var B8 = firebaseSeatStatusRef.child("B8  ");
  B8.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("B8").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("B8").setAttribute("class","seat");
    }
  });

  var B9 = firebaseSeatStatusRef.child("B9  ");
  B9.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("B9").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("B9").setAttribute("class","seat");
    }
  });

  var B10 = firebaseSeatStatusRef.child("B10  ");
  B10.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("B10").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("B10").setAttribute("class","seat");
    }
  });

  var B11 = firebaseSeatStatusRef.child("B11  ");
  B11.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("B11").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("B11").setAttribute("class","seat");
    }
  });

  var B12 = firebaseSeatStatusRef.child("B12  ");
  B12.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("B12").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("B12").setAttribute("class","seat");
    }
  });

  var B13 = firebaseSeatStatusRef.child("B13  ");
  B13.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("B13").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("B13").setAttribute("class","seat");
    }
  });

  var B14 = firebaseSeatStatusRef.child("B14  ");
  B14.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("B14").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("B14").setAttribute("class","seat");
    }
  });

  var B15 = firebaseSeatStatusRef.child("B15  ");
  B15.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("B15").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("B15").setAttribute("class","seat");
    }
  });

  var C1 = firebaseSeatStatusRef.child("C1  ");
  C1.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("C1").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("C1").setAttribute("class","seat");
    }
  });

  var C2 = firebaseSeatStatusRef.child("C2  ");
  C2.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("C2").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("C2").setAttribute("class","seat");
    }
  });

  var C3 = firebaseSeatStatusRef.child("C3  ");
  C3.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("C3").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("C3").setAttribute("class","seat");
    }
  });

  var C4 = firebaseSeatStatusRef.child("C4  ");
  C4.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("C4").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("C4").setAttribute("class","seat");
    }
  });

  var C5 = firebaseSeatStatusRef.child("C5  ");
  C5.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("C5").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("C5").setAttribute("class","seat");
    }
  });

  var C6 = firebaseSeatStatusRef.child("C6  ");
  C6.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("C6").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("C6").setAttribute("class","seat");
    }
  });

  var C7 = firebaseSeatStatusRef.child("C7  ");
  C7.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("C7").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("C7").setAttribute("class","seat");
    }
  });

  var C8 = firebaseSeatStatusRef.child("C8  ");
  C8.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("C8").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("C8").setAttribute("class","seat");
    }
  });

  var C9 = firebaseSeatStatusRef.child("C9  ");
  C9.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("C9").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("C9").setAttribute("class","seat");
    }
  });

  var C10 = firebaseSeatStatusRef.child("C10  ");
  C10.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("C10").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("C10").setAttribute("class","seat");
    }
  });

  var C11 = firebaseSeatStatusRef.child("C11  ");
  C11.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("C11").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("C11").setAttribute("class","seat");
    }
  });

  var C12 = firebaseSeatStatusRef.child("C12  ");
  C12.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("C12").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("C12").setAttribute("class","seat");
    }
  });

  var C13 = firebaseSeatStatusRef.child("C13  ");
  C13.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("C13").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("C13").setAttribute("class","seat");
    }
  });

  var C14 = firebaseSeatStatusRef.child("C14  ");
  C14.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("C14").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("C14").setAttribute("class","seat");
    }
  });

  var C15 = firebaseSeatStatusRef.child("C15  ");
  C15.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("C15").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("C15").setAttribute("class","seat");
    }
  });

  var D1 = firebaseSeatStatusRef.child("D1  ");
  D1.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("D1").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("D1").setAttribute("class","seat");
    }
  });

  var D2 = firebaseSeatStatusRef.child("D2  ");
  D2.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("D2").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("D2").setAttribute("class","seat");
    }
  });

  var D3 = firebaseSeatStatusRef.child("D3  ");
  D3.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("D3").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("D3").setAttribute("class","seat");
    }
  });

  var D4 = firebaseSeatStatusRef.child("D4  ");
  D4.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("D4").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("D4").setAttribute("class","seat");
    }
  });

  var D5 = firebaseSeatStatusRef.child("D5  ");
  D5.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("D5").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("D5").setAttribute("class","seat");
    }
  });

  var D6 = firebaseSeatStatusRef.child("D6  ");
  D6.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("D6").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("D6").setAttribute("class","seat");
    }
  });

  var D7 = firebaseSeatStatusRef.child("D7  ");
  D7.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("D7").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("D7").setAttribute("class","seat");
    }
  });

  var D8 = firebaseSeatStatusRef.child("D8  ");
  D8.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("D8").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("D8").setAttribute("class","seat");
    }
  });

  var D9 = firebaseSeatStatusRef.child("D9  ");
  D9.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("D9").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("D9").setAttribute("class","seat");
    }
  });

  var D10 = firebaseSeatStatusRef.child("D10  ");
  D10.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("D10").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("D10").setAttribute("class","seat");
    }
  });

  var D11 = firebaseSeatStatusRef.child("D11  ");
  D11.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("D11").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("D11").setAttribute("class","seat");
    }
  });

  var D12 = firebaseSeatStatusRef.child("D12  ");
  D12.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("D12").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("D12").setAttribute("class","seat");
    }
  });

  var D13 = firebaseSeatStatusRef.child("D13  ");
  D13.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("D13").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("D13").setAttribute("class","seat");
    }
  });

  var D14 = firebaseSeatStatusRef.child("D14  ");
  D14.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("D14").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("D14").setAttribute("class","seat");
    }
  });

  var D15 = firebaseSeatStatusRef.child("D15  ");
  D15.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("D15").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("D15").setAttribute("class","seat");
    }
  });

  var E1 = firebaseSeatStatusRef.child("E1  ");
  E1.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("E1").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("E1").setAttribute("class","seat");
    }
  });

  var E2 = firebaseSeatStatusRef.child("E2  ");
  E2.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("E2").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("E2").setAttribute("class","seat");
    }
  });

  var E3 = firebaseSeatStatusRef.child("E3  ");
  E3.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("E3").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("E3").setAttribute("class","seat");
    }
  });

  var E4 = firebaseSeatStatusRef.child("E4  ");
  E4.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("E4").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("E4").setAttribute("class","seat");
    }
  });

  var E5 = firebaseSeatStatusRef.child("E5  ");
  E5.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("E5").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("E5").setAttribute("class","seat");
    }
  });

  var E6 = firebaseSeatStatusRef.child("E6  ");
  E6.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("E6").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("E6").setAttribute("class","seat");
    }
  });

  var E7 = firebaseSeatStatusRef.child("E7  ");
  E7.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("E7").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("E7").setAttribute("class","seat");
    }
  });

  var E8 = firebaseSeatStatusRef.child("E8  ");
  E8.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("E8").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("E8").setAttribute("class","seat");
    }
  });

  var E9 = firebaseSeatStatusRef.child("E9  ");
  E9.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("E9").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("E9").setAttribute("class","seat");
    }
  });

  var E10 = firebaseSeatStatusRef.child("E10  ");
  E10.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("E10").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("E10").setAttribute("class","seat");
    }
  });

  var E11 = firebaseSeatStatusRef.child("E11  ");
  E11.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("E11").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("E11").setAttribute("class","seat");
    }
  });

  var E12 = firebaseSeatStatusRef.child("E12  ");
  E12.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("E12").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("E12").setAttribute("class","seat");
    }
  });

  var E13 = firebaseSeatStatusRef.child("E13  ");
  E13.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("E13").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("E13").setAttribute("class","seat");
    }
  });

  var E14 = firebaseSeatStatusRef.child("E14  ");
  E14.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("E14").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("E14").setAttribute("class","seat");
    }
  });

  var E15 = firebaseSeatStatusRef.child("E15  ");
  E15.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("E15").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("E15").setAttribute("class","seat");
    }
  });

  var F1 = firebaseSeatStatusRef.child("F1  ");
  F1.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("F1").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("F1").setAttribute("class","seat");
    }
  });

  var F2 = firebaseSeatStatusRef.child("F2  ");
  F2.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("F2").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("F2").setAttribute("class","seat");
    }
  });

  var F3 = firebaseSeatStatusRef.child("F3  ");
  F3.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("F3").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("F3").setAttribute("class","seat");
    }
  });

  var F4 = firebaseSeatStatusRef.child("F4  ");
  F4.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("F4").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("F4").setAttribute("class","seat");
    }
  });

  var F5 = firebaseSeatStatusRef.child("F5  ");
  F5.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("F5").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("F5").setAttribute("class","seat");
    }
  });

  var F6 = firebaseSeatStatusRef.child("F6  ");
  F6.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("F6").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("F6").setAttribute("class","seat");
    }
  });

  var F7 = firebaseSeatStatusRef.child("F7  ");
  F7.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("F7").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("F7").setAttribute("class","seat");
    }
  });

  var F8 = firebaseSeatStatusRef.child("F8  ");
  F8.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("F8").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("F8").setAttribute("class","seat");
    }
  });

  var F9 = firebaseSeatStatusRef.child("F9  ");
  F9.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("F9").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("F9").setAttribute("class","seat");
    }
  });

  var F10 = firebaseSeatStatusRef.child("F10  ");
  F10.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("F10").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("F10").setAttribute("class","seat");
    }
  });

  var F11 = firebaseSeatStatusRef.child("F11  ");
  F11.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("F11").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("F11").setAttribute("class","seat");
    }
  });

  var F12 = firebaseSeatStatusRef.child("F12  ");
  F12.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("F12").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("F12").setAttribute("class","seat");
    }
  });

  var F13 = firebaseSeatStatusRef.child("F13  ");
  F13.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("F13").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("F13").setAttribute("class","seat");
    }
  });

  var F14 = firebaseSeatStatusRef.child("F14  ");
  F14.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("F14").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("F14").setAttribute("class","seat");
    }
  });

  var F15 = firebaseSeatStatusRef.child("F15  ");
  F15.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("F15").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("F15").setAttribute("class","seat");
    }
  });

  var G1 = firebaseSeatStatusRef.child("G1  ");
  G1.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("G1").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("G1").setAttribute("class","seat");
    }
  });

  var G2 = firebaseSeatStatusRef.child("G2  ");
  G2.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("G2").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("G2").setAttribute("class","seat");
    }
  });

  var G3 = firebaseSeatStatusRef.child("G3  ");
  G3.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("G3").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("G3").setAttribute("class","seat");
    }
  });

  var G4 = firebaseSeatStatusRef.child("G4  ");
  G4.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("G4").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("G4").setAttribute("class","seat");
    }
  });

  var G5 = firebaseSeatStatusRef.child("G5  ");
  G5.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("G5").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("G5").setAttribute("class","seat");
    }
  });

  var G6 = firebaseSeatStatusRef.child("G6  ");
  G6.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("G6").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("G6").setAttribute("class","seat");
    }
  });

  var G7 = firebaseSeatStatusRef.child("G7  ");
  G7.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("G7").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("G7").setAttribute("class","seat");
    }
  });

  var G8 = firebaseSeatStatusRef.child("G8  ");
  G8.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("G8").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("G8").setAttribute("class","seat");
    }
  });

  var G9 = firebaseSeatStatusRef.child("G9  ");
  G9.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("G9").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("G9").setAttribute("class","seat");
    }
  });

  var G10 = firebaseSeatStatusRef.child("G10  ");
  G10.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("G10").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("G10").setAttribute("class","seat");
    }
  });

  var G11 = firebaseSeatStatusRef.child("G11  ");
  G11.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("G11").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("G11").setAttribute("class","seat");
    }
  });

  var G12 = firebaseSeatStatusRef.child("G12  ");
  G12.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("G12").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("G12").setAttribute("class","seat");
    }
  });

  var G13 = firebaseSeatStatusRef.child("G13  ");
  G13.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("G13").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("G13").setAttribute("class","seat");
    }
  });

  var G14 = firebaseSeatStatusRef.child("G14  ");
  G14.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("G14").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("G14").setAttribute("class","seat");
    }
  });

  var G15 = firebaseSeatStatusRef.child("G15  ");
  G15.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("G15").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("G15").setAttribute("class","seat");
    }
  });

  var H1 = firebaseSeatStatusRef.child("H1  ");
  H1.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("H1").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("H1").setAttribute("class","seat");
    }
  });

  var H2 = firebaseSeatStatusRef.child("H2  ");
  H2.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("H2").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("H2").setAttribute("class","seat");
    }
  });

  var H3 = firebaseSeatStatusRef.child("H3  ");
  H3.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("H3").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("H3").setAttribute("class","seat");
    }
  });

  var H4 = firebaseSeatStatusRef.child("H4  ");
  H4.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("H4").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("H4").setAttribute("class","seat");
    }
  });

  var H5 = firebaseSeatStatusRef.child("H5  ");
  H5.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("H5").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("H5").setAttribute("class","seat");
    }
  });

  var H6 = firebaseSeatStatusRef.child("H6  ");
  H6.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("H6").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("H6").setAttribute("class","seat");
    }
  });

  var H7 = firebaseSeatStatusRef.child("H7  ");
  H7.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("H7").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("H7").setAttribute("class","seat");
    }
  });

  var H8 = firebaseSeatStatusRef.child("H8  ");
  H8.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("H8").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("H8").setAttribute("class","seat");
    }
  });

  var H9 = firebaseSeatStatusRef.child("H9  ");
  H9.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("H9").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("H9").setAttribute("class","seat");
    }
  });

  var H10 = firebaseSeatStatusRef.child("H10  ");
  H10.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("H10").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("H10").setAttribute("class","seat");
    }
  });  
  
  var H11 = firebaseSeatStatusRef.child("H11  ");
  H11.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("H11").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("H11").setAttribute("class","seat");
    }
  });

  var H12 = firebaseSeatStatusRef.child("H12  ");
  H12.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("H12").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("H12").setAttribute("class","seat");
    }
  });

  var H13 = firebaseSeatStatusRef.child("H13  ");
  H13.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("H13").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("H13").setAttribute("class","seat");
    }
  });

  var H14 = firebaseSeatStatusRef.child("H14  ");
  H14.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("H14").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("H14").setAttribute("class","seat");
    }
  });

  var H15 = firebaseSeatStatusRef.child("H15  ");
  H15.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("H15").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("H15").setAttribute("class","seat");
    }
  });

  var I1 = firebaseSeatStatusRef.child("I1  ");
  I1.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("I1").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("I1").setAttribute("class","seat");
    }
  });

  var I2 = firebaseSeatStatusRef.child("I2  ");
  I2.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("I2").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("I2").setAttribute("class","seat");
    }
  });

  var I3 = firebaseSeatStatusRef.child("I3  ");
  I3.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("I3").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("I3").setAttribute("class","seat");
    }
  });

  var I4 = firebaseSeatStatusRef.child("I4  ");
  I4.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("I4").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("I4").setAttribute("class","seat");
    }
  });

  var I5 = firebaseSeatStatusRef.child("I5  ");
  I5.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("I5").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("I5").setAttribute("class","seat");
    }
  });

  var I6 = firebaseSeatStatusRef.child("I6  ");
  I6.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("I6").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("I6").setAttribute("class","seat");
    }
  });

  var I7 = firebaseSeatStatusRef.child("I7  ");
  I7.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("I7").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("I7").setAttribute("class","seat");
    }
  });

  var I8 = firebaseSeatStatusRef.child("I8  ");
  I8.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("I8").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("I8").setAttribute("class","seat");
    }
  });

  var I9 = firebaseSeatStatusRef.child("I9  ");
  I9.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("I9").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("I9").setAttribute("class","seat");
    }
  });

  var I10 = firebaseSeatStatusRef.child("I10  ");
  I10.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("I10").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("I10").setAttribute("class","seat");
    }
  });

  var I11 = firebaseSeatStatusRef.child("I11  ");
  I11.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("I11").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("I11").setAttribute("class","seat");
    }
  });

  var I12 = firebaseSeatStatusRef.child("I12  ");
  I12.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("I12").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("I12").setAttribute("class","seat");
    }
  });

  var I13 = firebaseSeatStatusRef.child("I13  ");
  I13.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("I13").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("I13").setAttribute("class","seat");
    }
  });

  var I14 = firebaseSeatStatusRef.child("I14  ");
  I14.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("I14").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("I14").setAttribute("class","seat");
    }
  });

  var I15 = firebaseSeatStatusRef.child("I15  ");
  I15.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("I15").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("I15").setAttribute("class","seat");
    }
  });

  var J1 = firebaseSeatStatusRef.child("J1  ");
  J1.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("J1").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("J1").setAttribute("class","seat");
    }
  });

  var J2 = firebaseSeatStatusRef.child("J2  ");
  J2.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("J2").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("J2").setAttribute("class","seat");
    }
  });

  var J3 = firebaseSeatStatusRef.child("J3  ");
  J3.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("J3").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("J3").setAttribute("class","seat");
    }
  });

  var J4 = firebaseSeatStatusRef.child("J4  ");
  J4.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("J4").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("J4").setAttribute("class","seat");
    }
  });

  var J5 = firebaseSeatStatusRef.child("J5  ");
  J5.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("J5").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("J5").setAttribute("class","seat");
    }
  });

  var J6 = firebaseSeatStatusRef.child("J6  ");
  J6.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("J6").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("J6").setAttribute("class","seat");
    }
  });

  var J7 = firebaseSeatStatusRef.child("J7  ");
  J7.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("J7").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("J7").setAttribute("class","seat");
    }
  });

  var J8 = firebaseSeatStatusRef.child("J8  ");
  J8.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("J8").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("J8").setAttribute("class","seat");
    }
  });

  var J9 = firebaseSeatStatusRef.child("J9  ");
  J9.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("J9").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("J9").setAttribute("class","seat");
    }
  });

  var J10 = firebaseSeatStatusRef.child("J10  ");
  J10.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("J10").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("J10").setAttribute("class","seat");
    }
  });

  var J11 = firebaseSeatStatusRef.child("J11  ");
  J11.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("J11").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("J11").setAttribute("class","seat");
    }
  });

  var J12 = firebaseSeatStatusRef.child("J12  ");
  J12.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("J12").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("J12").setAttribute("class","seat");
    }
  });

  var J13 = firebaseSeatStatusRef.child("J13  ");
  J13.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("J13").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("J13").setAttribute("class","seat");
    }
  });

  var J14 = firebaseSeatStatusRef.child("J14  ");
  J14.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("J14").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("J14").setAttribute("class","seat");
    }
  });

  var J15 = firebaseSeatStatusRef.child("J15  ");
  J15.on('value', function(datasnap){
    var value = datasnap.val();
    if (value=="Booked") {
      document.getElementById("J15").setAttribute("class","notAvailable-seat");
    }else{
      document.getElementById("J15").setAttribute("class","seat");
    }
  });

