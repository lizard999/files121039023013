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
