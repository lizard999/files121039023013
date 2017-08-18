var database = firebase.database();


function storeThedata(){
    var key = document.getElementById('key').value;
    var val = document.getElementById('value').value;
    database.ref("users/" + key).set({message : val});
  }
