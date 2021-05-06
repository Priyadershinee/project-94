
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyATWDvKP0qMUWQOfh6BEZMNC6dDASI4n7k",
      authDomain: "kwitter-7ccc5.firebaseapp.com",
      databaseURL: "https://kwitter-7ccc5-default-rtdb.firebaseio.com",
      projectId: "kwitter-7ccc5",
      storageBucket: "kwitter-7ccc5.appspot.com",
      messagingSenderId: "381139732652",
      appId: "1:381139732652:web:8568354a719fbf6db6b709",
      measurementId: "G-3TY9DZVMWP"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome!"+user_name+"!";
    function addRoom(){
          room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
});
localStorage.setItem("room_name",room_name);
window.location="Chat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room name = "+Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;

      //End code
      });});}

getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="Chat_page.html";
}