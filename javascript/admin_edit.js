import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import {
  getFirestore,
  setDoc,
  getDocs,
  collection,
  updateDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
import { firebaseConfig } from "./firebase.js";
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
submit.addEventListener("click", (e) => {
  e.preventDefault();
  async function hello() {
    var eventname = document.getElementById("eventname").value;
    var sdate = document.getElementById("sdate").value;
    var time = document.getElementById("time").value;
    var edate = document.getElementById("edate").value;
    var timeto = document.getElementById("timeto").value;
    var url = document.getElementById("url").value;
    var ldate = document.getElementById("ldate").value;
    var location = document.getElementById("location").value;
    var req = document.getElementById("req").value;
    var namme = document.getElementById("namme").value;
    const docRef = doc(db, "Events", namme);
    const data = {
      name: eventname,
      startdate: sdate,
      time: time,
      enddate: edate,
      timet: timeto,
      link: url,
      lastedate: ldate,
      local: location,
      reqirments: req,
    };
    updateDoc(docRef, data).then((docRef) => {
        Swal.fire({
            title: "success",
            text: "event sucessfully updated",
            icon: "success",
            confirmButtonText: "continue",
          });
          setTimeout(function () {
            window.location.reload();
          }, 2000);
    });
  }
  hello();

});
const querySnapshot = await getDocs(collection(db, "ideas"));
var dropdown = document.getElementById("dropdown");
querySnapshot.forEach((doc) => {
  function displayEvent(eventData) {
    var option = document.createElement("option");
    option.value = doc.id;
    option.text = doc.data().firstname;
    dropdown.appendChild(option);
  }
  const eventData = {
    name: "Arduino Workshop",
    date: "12th October 2023",
    time: "9:00 am",
    registrations: 38,
    location: "SCIE Lab",
    registerBefore: "10th October, 11:59pm",
    requirements: ["Laptop", "Basic HTML Knowledge"],
    registrationLink: "https://docs.google.com/forms/u/0/",
  };
  displayEvent(eventData);
  dropdown.addEventListener("change", (e) => {
    e.preventDefault();
    console.log(doc.data().firstname);
    var selectedValue = dropdown.value;
    document.getElementById("namme").value = doc.data().firstname;
    if (doc.id == selectedValue) {
      document.getElementById("eventname").value = doc.data().firstname;
      document.getElementById("sdate").value = doc.data().course;
      document.getElementById("time").value = doc.data().college;
      document.getElementById("edate").value = doc.data().phno;
      document.getElementById("timeto").value = doc.data().email;
      document.getElementById("url").value = doc.data().address;
      document.getElementById("ldate").value = doc.data().year;
    }
    $("#event-data").show();
    $("#filler").hide();
  });
});
