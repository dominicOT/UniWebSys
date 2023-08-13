// const firebaseConfig = {
//   apiKey: "AIzaSyC2IU2xhf4ZFIZef88_-Ia3CRn-HdKIUx8",
//   authDomain: "unimak-web-sys.firebaseapp.com",
//   databaseURL: "https://unimak-web-sys-default-rtdb.firebaseio.com",
//   projectId: "unimak-web-sys",
//   storageBucket: "unimak-web-sys.appspot.com",
//   messagingSenderId: "905725107073",
//   appId: "1:905725107073:web:0bba1d2c1f3f7cb81e2680",
//   measurementId: "G-P97MFFLQSD"
// };

// firebase.initializeApp(firebaseConfig);

// var regDB = firebase.database().ref('registrationForm');


// document.getElementById('registrationForm').addEventListener('submit', submitForm);

// function submitForm(event) {
//   event.preventDefault();

//   // get form data

//   var firstName = document.getElementById('firstName').value.trim();
//   var middleName = document.getElementById('middleName').value.trim();
//   var lastName = document.getElementById('lastName').value.trim();
//   var phone = document.getElementById('phone').value.trim();
//   var email = document.getElementById('email').value.trim();
//   var address = document.getElementById('address').value.trim();
//   var department = document.getElementById('department').value.trim();
//   var year = document.getElementById('year').value;
//   var semester = document.getElementById('semester').value;
//   var fees = document.getElementById('fees').value;
//   var parentFirstName = document.getElementById('parentFirstName').value.trim();
//   var parentLastName = document.getElementById('parentLastName').value.trim();
//   var parentPhone = document.getElementById('parentPhone').value.trim();
//   var parentEmail = document.getElementById('parentEmail').value.trim();

//   // console.log(firstName, middleName, lastName, phone, email, address, department, parentFirstName, parentLastName, parentPhone, parentEmail);

//   saveMessages(firstName, middleName, lastName, phone, email, address, department, year, semester, fees, parentFirstName, parentLastName, parentPhone, parentEmail);

//   // enable alert
//   document.querySelector('.alert').style.display = 'block';

//   // remove the alert
//   setTimeout(() => {
//   document.querySelector('.alert').style.display = 'none';
//   }, 5000);

//   // reset form
//   document.getElementById('registrationForm').reset();
// }


// const saveMessages = (firstName, middleName, lastName, phone, email, address, department, year, semester, fees, parentFirstName, parentLastName, parentPhone, parentEmail) => {
//   var newRegDB = regDB.push();

//   newRegDB.set({
//     firstName: firstName,
//     middleName: middleName,
//     lastName: lastName,
//     phone: phone,
//     email: email,
//     address: address,
//     department: department,
//     year: year,
//     semester: semester,
//     fees: fees,
//     parentFirstName: parentFirstName,
//     parentLastName: parentLastName,
//     parentPhone: parentPhone,
//     parentEmail: parentEmail
//   })
// }

// const getElementValue = (id) => {
//   return document.getElementById(id).value;
// }

