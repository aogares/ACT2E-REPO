conts firebaseConfig = {
    apiKey: "AIzaSyAWv4pyvOp7oQDAcDD3HbeL-9rhTRUpljE",
    authDomain: "react-contact-c4b2c.firebaseapp.com",
    databaseURL: "https://react-contact-c4b2c-default-rtdb.firebaseio.com",
    projectId: "react-contact-c4b2c",
    storageBucket: "react-contact-c4b2c.appspot.com",
    messagingSenderId: "60437522505",
    appId: "1:60437522505:web:83baa2ceedb73a608af798"
  };

  const app = initializeApp(firebaseConfig);

  const database = firebase.database()

  function save() {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const username = document.getElementById('username').value
    const say_something = document.getElementById('say_something').value
    const favourite_food = document.getElementById('favourite_food').value

    database.ref('users/' + username).set({
        email : email,
        password : password,
        username : username,
        say_something : say_something,
        favourite_food : favourite_food,
    })

    alert (Saved)
  }

  function get() {

    const username = document.getElementById('username').value
    const user_ref = database.ref('users/' + '')
    user_ref.on('value',function(snapshot){
        const data = snapshot.val()

        alert(data.email)

    })
  }

  function updates() {
    const email = document.getElementById('email').value
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    const updates = {
        email : email,
        username : username,
        password : password,


    database.ref('users/' + username).update(updates)


        alert('updated')
    }
  }

  function remove() {
    const username = document.getElementById('username').value

    database.ref('users/' + username).remove()

    alert('deleted')
  }