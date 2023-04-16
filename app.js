var firebaseConfig = {
    apiKey: "AIzaSyBqz67cIZmnuZNooicF7LSodWqFCwj-iq4",
    authDomain: "fir-javascriptcrud-6f0d0.firebaseapp.com",
    projectId: "fir-javascriptcrud-6f0d0",
    storageBucket: "fir-javascriptcrud-6f0d0.appspot.com",
    messagingSenderId: "304452017552",
    appId: "1:304452017552:web:790534078d0cd5438a6715"
  };

  // Initialize Firebase
  var app = initializeApp(firebaseConfig);

  firebaseConfig.initializeApp(firebaseConfig);

  var db = firebase.database();
  var reviews = document.getElementById("reviews");
  var reviewsRef = db.ref("/reviews");

  reviewsForm.addEventListener("submit", e => {
    e.preventDefault();

    var fullName = document.getElementById("fullName");
    var message = document.getElementById("message");
    var hiddenId = document.getElementById("hiddenId");

    var id = hiddenId.value || Date.now();

    db.ref("reviews/" + id).set({
      fullName: fullName.value,
      message: message.value,
      createdAt: firebase.database.ServerValue.TIMESTAMP
    });

    clearForm();

  })


  reviewsRef.on("child_added", data =>{
    var li = document.createElement("li");
    li.id = data.key;
    li.innerHTML = reviewTemplate(data.val());
    reviews.appendChild(li);
  })


  reviews.addEventListener("click", e => {
    updateReview(e);
  });

  reviewsRef.on("child_changed", data => {
    var reviewNode = document.getElementById(data.key);
    reviewNode.innerHTML = reviewTemplate(data.val());
  })

  reviewsRef.on("child_remove", data => {
    var reviewNode = document.getElementById(data.key);
    reviewNode.parentNode.removeChild(reviewNode);
  })

  function deleteReview(e) {
    var reviewNode = e.target.parentNode;

    if (e.target.classlist.contains("delete")) {
      var id = reviewNode.id;
      db.ref("reviews/" + id).remove();

      clearForm();
      
    }
  }

  function updateReview(e) {
    var reviewNode = e.target.parentNode;

    if (e.target.classList.contains("edit")) {
      fullName.value = reviewNode.querySelector(".fullName").innerText;
      message.value = reviewNode.querySelector(".message").innerText;

      hiddenId.value = reviewNode.id;
      Materialize.updateTextFields();
      clearForm();
    }
  }

  function clearForm() {
    fullName.value = "";
    message.value = "";
    hiddenId.value = "";
  }

  function reviewTemplate({fullName, message, createdAt}) {
    var createdAtFormatted = new Date(createdAt);

    return `
    <div>
        <label>Full Name:</label>
        <label class="fullName"><strong>${ fullName }</strong></label>
    </div>
    <div>
        <label>Message:</label>
        <label class="message"><strong>${ message }</strong></label>
        <br/>
    </div>
    <div>
        <label>Created:</label>
        <label class="createdAt"><strong>${ createdAtFormatted }</strong></label>
        <br/>
    </div>

        <button class="waves-effect waves-light btn delete">Delete</button>
        <button class="waves-effect waves-light btn edit">Update</button>
        <br/><br/><br/><br/>`;
      
  }
