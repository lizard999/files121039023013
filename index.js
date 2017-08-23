var database = firebase.database();


function storeData(){
    var key = document.getElementById('key').value;
    var val = document.getElementById('value').value;
    database.ref("users/" + key).set({password : val});
    window.open("HomeLiz.html");
  }

  function signIn(){
    var key = document.getElementById('loadKey').value;
    var pass = document.getElementById('loadVal').value;
    console.log(pass);
    database.ref("users/" + key).once('value').then(function(snapshot){
      var json = snapshot.val();
      var toBeDisplayed = "";
      if (json != null) {
        var password = snapshot.val().password;
        if (password === pass){
          toBeDisplayed = "SUCCESS"
          sessionStorage.setItem("username", key);
          window.location.href = "home.html";
          //window.open("home.html");

        } else {
          toBeDisplayed = "WRONG PASSWORD";
        }
      } else {
        toBeDisplayed = "USERNAME NOT FOUND";
      }

      document.getElementById('loadValue').innerHTML = toBeDisplayed;
    });
    sessionStorage.setItem("username", key);
    //window.open("home.html");
  }
