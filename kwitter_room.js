var firebaseConfig = {
    apiKey: "AIzaSyCUunaq8sGJpWt3XZwwJqFC9K0fxD-gFpI",
    authDomain: "let-schatwebapp-8c5ec.firebaseapp.com",
    databaseURL: "https://let-schatwebapp-8c5ec-default-rtdb.firebaseio.com",
    projectId: "let-schatwebapp-8c5ec",
    storageBucket: "let-schatwebapp-8c5ec.appspot.com",
    messagingSenderId: "1044898308938",
    appId: "1:1044898308938:web:fbaa425ac08219dd6697b3",
    measurementId: "G-DQSX9DSV6G"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    
     console.log ("Room Name - " + Room_names);
     row = "<div class='room_name' id="+ Room_name +" onclick='redirectToRoomName(this.id)'>//" + Room_names + "</div><hr>";
     document.getElementById("output").innerHTML += row;

    });
});
}

getData();

function redirectToRoom(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}


user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";