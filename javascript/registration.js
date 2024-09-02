import { firebaseConfig } from "./firebase.js";

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
const usersCollection = db.collection("ideas");
const auth = firebase.auth();

auth.onAuthStateChanged((user) => {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    var fname = document.getElementById("fname").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;
    var phno = document.getElementById("phno").value;
     var course = document.getElementById("course").value;
     var college = document.getElementById("college").value;
     var gender1 = document.querySelector('input[name="gender"]:checked');
     const  gender= gender1.value
     var year1 = document.querySelector('input[name="year"]:checked');
     const year=year1.value
    // var timestamp = document.getElementById("dateandtime").value;
    // var insights = document.getElementById("insights").value;
    if (
      (fname &&
        address &&
        email &&
        phno ) === ""
    ) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "error",
        title: "please fill all the fields",
      });
    } else if (phno.length != "10") {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "error",
        title: "phone number must a 10 digit number",
      });
    } else {
      db.collection("ideas").doc(fname)
        .set({
          firstname: fname,
          address: address,
          email: email,
          phno: phno,
          course:course,
          year:year,
          gender:gender,
          college:college

          
        })
        .then((docRef) => {
          Swal.fire({
            title: "success",
            text: "Regisration Sucessfull",
            icon: "success",
            confirmButtonText: "continue",
          });
          setTimeout(function () {
            window.location.reload();
          }, 2000);
        })
        .catch((error) => {
          console.log("Error adding document: ", error);
        })
        .catch((error) => {
          alert("Error getting documents: ", error);
        });
    }
  });
});
