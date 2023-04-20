var nameV, addressV, phoneV, emailV;

function readFom() {
  nameV = document.getElementById("name").value;
  addressV = document.getElementById("address").value;
  phoneV = document.getElementById("phone").value;
  emailV = document.getElementById("email").value;
  console.log(nameV, addressV, phoneV, emailV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("users/" + rollV)
    .set({
      name: nameV,
      address: addressV,
      phone: phoneV,
      email: emailV,
    });
  alert("Data Inserted");
  document.getElementById("name").value = "";
  document.getElementById("address").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("users/" + rollV)
    .on("value", function (snap) {
      document.getElementById("name").value = snap.val().name;
      document.getElementById("address").value = snap.val().address;
      document.getElementById("phone").value = snap.val().phone;
      document.getElementById("email").value = snap.val().email;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("users/" + rollV)
    .update({
      //   name: nameV,
      address: addrressV,
      phone: phoneV,
      email: emailV,
    });
  alert("Data Update");
  document.getElementById("name").value = "";
  document.getElementById("address").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("users/" + rollV)
    .remove();
  alert("Data Deleted");
  document.getElementById("name").value = "";
  document.getElementById("address").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
};
