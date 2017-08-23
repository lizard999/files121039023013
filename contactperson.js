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
      document.getElementById('party').innerHTML= "Party:\t" + party;
      document.getElementById('email').innerHTML= "Email:\t" + email;
      document.getElementById('district').innerHTML= "District:\t" + district;
      //document.getElementById('address').innerHTML= address;
      //document.getElementById('phone').innerHTML = phone;
      var str = " "
      for (var key in address){
        var city = address[key];
        console.log(city);
        str = str + key + " : " + info.address[key] + "<br>";
        //address = str + "\n";
      }
      document.getElementById('address').innerHTML= str;

      var str = " "
      for (var key in info.phone){
        str = str + key + " : " + info.phone[key] + '<br>';
        phone = str;
      }
      document.getElementById('phone').innerHTML=  phone;
      });
}
