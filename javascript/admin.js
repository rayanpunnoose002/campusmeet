import { firebaseConfig } from "./firebase.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import {
  getFirestore,
  setDoc,
  getDocs,
  collection,
  deleteDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const querySnapshot = await getDocs(collection(db, "ideas"));
querySnapshot.forEach((doc) => {
    function displayEvent(eventData) {
      const eventContainer = document.getElementById("event-container");
      const eventDiv = document.createElement("tbody");
      eventDiv.className = "table table-dark";
      eventDiv.innerHTML = ` 
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
        <div class="event d-flex align-items-start">
            <div class="event-info">
                <h4 class="">${doc.data().firstname}</h4>
                <p class="fw-semibold">college : <span class="fw-normal">${
                  doc.data().college
                }</span></p>
                <p class="fw-semibold">course: <span class="fw-normal">${
                  doc.data().course
                }</span></p>
                <p class="fw-semibold">Phonenumber: </p>
                <p> ${doc.data().phno}</p>
                <p class="fw-semibold">address: </p>
                <p> ${doc.data().address}</p>
                <p class="fw-semibold">Email: </p>
                <p> ${doc.data().email}</p>
                <p class="fw-semibold">Gender: </p>
                <p> ${doc.data().gender}</p>
                <p class="fw-semibold">year: </p>
                <p> ${doc.data().year}</p>
                </div>
            </div>
        </div>
    `;
      eventContainer.appendChild(eventDiv);
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
  


});
