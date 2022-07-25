function ajaxpost () {
    var form = document.getElementById("form");
    var data = new FormData(form);
    fetch("Index.html", { method:"POST", body:data })
    .then(res=>res.text())
    .then((response) => {
      console.log(response);
       alert("THANK YOU FOR CONTACT US.........."); 
       form.reset();
    })
    .catch((err) => { console.error(err); });
    return false;
  }