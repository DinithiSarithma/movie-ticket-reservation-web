
function bookingConfirm(){

    // var random = Math.floor(Math.random() * 100) + 1;
    var firebaseRootRef = firebase.database().ref().child("Orders");
    var firebaseIdRef = firebaseRootRef.push();

    // firebaseIdRef.child("id").set(random);
    firebaseIdRef.child("user").set(sessionStorage.getItem("userName"));
    firebaseIdRef.child("movie").set(sessionStorage.getItem("movie"));
    firebaseIdRef.child("date").set(sessionStorage.getItem("date"));
    firebaseIdRef.child("seats").set(sessionStorage.getItem("seats"));
    firebaseIdRef.child("snacks").set(sessionStorage.getItem("snacks"));
    firebaseIdRef.child("ticket price").set(sessionStorage.getItem("total"));
    firebaseIdRef.child("snack price").set(sessionStorage.getItem("snackPrice"));
    firebaseIdRef.child("total price").set(sessionStorage.getItem("finalPrice"));
    var finalPrice = sessionStorage.getItem("finalPrice");
    var seat = sessionStorage.getItem("seats");

    firebaseIdRef.child("total price").set(finalPrice, function(error) {
        if (error) {
            alert("Data could not be saved " + error);
        } else {
            var firebaseSeatRef = firebase.database().ref().child("Seats");

            if (seat.length<5) {
                // firebaseSeatRef.child(seat).set("Booked");
                firebaseSeatRef.child(seat).push().set(sessionStorage.getItem("date"));
                alert("Booking details stored successfully");
                window.location.href = "main.html";
            }else if (seat.length<9){
                console.log(seat.length);
                console.log(seat[0]+seat[1]+seat[2]+seat[3]);
                console.log(seat[4]+seat[5]+seat[6]+seat[7]);
                firebaseSeatRef.child(seat[0]+seat[1]+seat[2]+seat[3]).push().set(sessionStorage.getItem("date"));
                firebaseSeatRef.child(seat[4]+seat[5]+seat[6]+seat[7]).push().set(sessionStorage.getItem("date"));
                alert("Booking details stored successfully");
                window.location.href = "main.html";
            } else if (seat.length<13) {
                console.log(seat.length);
                console.log(seat[0]+seat[1]+seat[2]+seat[3]);
                console.log(seat[4]+seat[5]+seat[6]+seat[7]);
                console.log(seat[8]+seat[9]+seat[10]+seat[11]);
                firebaseSeatRef.child(seat[0]+seat[1]+seat[2]+seat[3]).push().set(sessionStorage.getItem("date"));
                firebaseSeatRef.child(seat[4]+seat[5]+seat[6]+seat[7]).push().set(sessionStorage.getItem("date"));
                firebaseSeatRef.child(seat[8]+seat[9]+seat[10]+seat[11]).push().set(sessionStorage.getItem("date")); 
                alert("Booking details stored successfully");
                window.location.href = "main.html";           
            }else if (seat.length<17) {
                firebaseSeatRef.child(seat[0]+seat[1]+seat[2]+seat[3]).push().set(sessionStorage.getItem("date"));
                firebaseSeatRef.child(seat[4]+seat[5]+seat[6]+seat[7]).push().set(sessionStorage.getItem("date"));
                firebaseSeatRef.child(seat[8]+seat[9]+seat[10]+seat[11]).push().set(sessionStorage.getItem("date"));
                firebaseSeatRef.child(seat[12]+seat[13]+seat[14]+seat[15]).push().set(sessionStorage.getItem("date"));
                alert("Booking details stored successfully");
                window.location.href = "main.html";
            }else{
                alert("Couldn't save data.. please select less than 5 seats");
            }
        }

    });

}

function quit(){
    sessionStorage.removeItem("seats");
    sessionStorage.removeItem("total");
    alert("All sessions stored will be removed");
    // window.location.href = "main.html";
    document.getElementById("quithref").setAttribute("href","main.html");
}