<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCSQO3WY8KmfVXM6siqZVj4-hqHbB4rirk",
    authDomain: "fir-crud-dc0ee.firebaseapp.com",
    databaseURL: "https://fir-crud-dc0ee-default-rtdb.firebaseio.com",
    projectId: "fir-crud-dc0ee",
    storageBucket: "fir-crud-dc0ee.appspot.com",
    messagingSenderId: "578294013427",
    appId: "1:578294013427:web:54894730874ac48b80c686"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

const dbRef = firebase.database().ref();
const usersRef = dbRef.child('users');

const userListUI = document.getElementById("userList");
usersRef.on("child_added", snap => {
    let user = snap.val();
    let $li = document.createElement("li");
    $li.innerHTML = user.name;
    $li.setAttribute("child-key", snap.key);
    $li.addEventListener("click", userClicked) userListUI.append($li);
});

function userClicked(e) {
    var userID = e.target.getAttribute("child-key");
    const userRef = dbRef.child('users/' + userID);
    const userDetailUI = document.getElementById("userDetail");
    userDetailUI.innerHTML = ""
    userRef.on("child_added", snap => {
        var $p = document.createElement("p");
        $p.innerHTML = snap.key + " - " + snap.val() userDetailUI.append($p);
    });
}
</script>
