var noV, nameV, phoneV, emailV;

function readFom() {
  noV = document.getElementById("no").value;
  nameV = document.getElementById("name").value;
  phoneV = document.getElementById("phone").value;
  emailV = document.getElementById("email").value;
  console.log(noV, nameV, emailV, phoneV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("users/" + noV)
    .set({
      No: noV,
      name: nameV,
      phone: phoneV,
      email: emailV,
    });
  alert("Data Inserted");
  document.getElementById("no").value = "";
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("users/" + noV)
    .on("value", function (snap) {
      document.getElementById("no").value = snap.val().No;
      document.getElementById("name").value = snap.val().name;
      document.getElementById("phone").value = snap.val().phone;
      document.getElementById("email").value = snap.val().email;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("users/" + noV)
    .update({
      //   No: noV,
      name: nameV,
      phone: phoneV,
      email: emailV,
    });
  alert("Data Update");
  document.getElementById("no").value = "";
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("users/" + noV)
    .remove();
  alert("Data Deleted");
  document.getElementById("no").value = "";
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
};
