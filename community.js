var database = firebase.database();
window.onload = load;

var user = sessionStorage.username;

function load(){ //loads the function
  database.ref("messages").once("value").then(function(snap){
    var messages =snap.val();
    for (var i =1; i<= Object.keys(messages).length; i ++){ //add the message everytime
      var m = "m" + i;
      var info = messages[m]; //variable for messages
      var username = info.username; //variable for username
      var message = info.msg; // variable for message
      addMessage(info.username , info.msg); //adds the message and the username
    }


  });
}
function addMessage(username , message){ //function to bring username and message together
  var aMessage = document.createElement("p"); //makes the message into a paragraph
  aMessage.innerHTML= username + ": " + message; //
  var text = document.getElementById("Messages");//calles the message
  text.appendChild(aMessage); //appends the message
}

function storeTheData(){ //stores into data base

    database.ref("messages").once("value").then(function(snap){ //looking at database in messages
      var messages =snap.val();
      var numberOfMsg = Object.keys(messages).length + 1; //adding the number of the messages
        var m = "m" + numberOfMsg; //howver many plus one
        var Message = document.getElementById('key').value; //getting the value of the text
        var UserName = sessionStorage.username;//keeps the username logged in to do the message thing
        database.ref("messages/" + m).set({username: UserName , msg:Message}); //sets it into database
        var div = document.getElementById ('Messages');
        while (div.hasChildNodes()) { //keeps removing children
            div.removeChild(div.lastChild);
        }
        load();

    });
  }






//var ref = firebase.database().ref("users");
//ref.once("value")
//.then(function(snapshot) {
  //  var name = snapshot.child("users").val();
