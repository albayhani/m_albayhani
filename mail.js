const firebaseConfig = {
  apiKey: "AIzaSyARlLgiE_i18zaZUOhKzLbWTW-tF0f62uk",
  authDomain: "contactform-5114d.firebaseapp.com",
  databaseURL: "https://contactform-5114d-default-rtdb.firebaseio.com",
  projectId: "contactform-5114d",
  storageBucket: "contactform-5114d.appspot.com",
  messagingSenderId: "1097519611904",
  appId: "1:1097519611904:web:47227caa197d5a279618e5"
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

