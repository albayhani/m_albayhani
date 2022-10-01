const firebaseConfig = {
  apiKey: "AIzaSyA9xCtLBm_wy0NnvBzWibZgSUCyjQEDnmE",
  authDomain: "contactform-5bb4b.firebaseapp.com",
  databaseURL: "https://contactform-5bb4b-default-rtdb.firebaseio.com",
  projectId: "contactform-5bb4b",
  storageBucket: "contactform-5bb4b.appspot.com",
  messagingSenderId: "89244140404",
  appId: "1:89244140404:web:c4c038ac28eb408df0e221"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
