function showBills(){
  console.log("hello");
  if (document.getElementById('womensrights').checked) {
    console.log("checked");
    sessionStorage.setItem("womensrights", true);
  } else {
    console.log("not checked");
    sessionStorage.setItem("womensrights", false);
  }
  if (document.getElementById('lgbtrights').checked) {
    console.log("checked");
    sessionStorage.setItem("lgbtrights", true);
  } else {
    console.log("not checked");
    sessionStorage.setItem("lgbtrights", false);
  }
  if (document.getElementById('environment').checked) {
    console.log("checked");
    sessionStorage.setItem("environment", true);
  } else {
    console.log("not checked");
    sessionStorage.setItem("environment", false);
  }
  if (document.getElementById('raceethnic').checked) {
    console.log("checked");
    sessionStorage.setItem("raceethnic", true);
  } else {
    console.log("not checked");
    sessionStorage.setItem("raceethnic", false);
  }
  window.location.href = "viewbills.html";

}
