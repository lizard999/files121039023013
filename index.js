var database = firebase.database();

function emails(){
  var name = document.getElementById('representative').value;
  database.ref("representatives/" + name).once('value').then(function(snapshot){
      var info = snapshot.val();
      var email = info.email;
      var party = info.party;
      var district = info.district;
      var address = info.address;
      var phone = info.phone;
      document.getElementById('party').innerHTML= party;
      document.getElementById('email').innerHTML= email;
      document.getElementById('district').innerHTML= district;
      //document.getElementById('address').innerHTML= address;
      //document.getElementById('phone').innerHTML = phone;
      var str = " "
      for (var key in info.address){
        str = str + info.address[key] + "\n"
        address = str;
      }
      document.getElementById('address').innerHTML= address;

      var str = " "
      for (var key in info.phone){
        str = str + info.phone[key] + "\n"
        phone = str;
      }
      document.getElementById('phone').innerHTML= phone;
      });
}

function storeData(){
    var key = document.getElementById('key').value;
    var val = document.getElementById('value').value;
    database.ref("users/" + key).set({password : val});
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
          window.location.href = "community.html";
        } else {
          toBeDisplayed = "WRONG PASSWORD";
        }
      } else {
        toBeDisplayed = "USERNAME NOT FOUND";
      }
      document.getElementById('loadValue').innerHTML = toBeDisplayed;
    });
  }
