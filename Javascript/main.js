

var mainToken;
db.get('userData').then(function(doc){
    if(doc.token != ""){
        mainToken = doc.token;
        location.href = "HTML/Dashboard.html"
    }
}).catch(function(error){
    console.log('User Credentials Not Found! Login Required');
})

window.addEventListener("onunload", function(){
    alert('hey');
    alert();
});


function login(){
    var id = document.getElementById("login").value;
    var pass = document.getElementById("password").value;
    var data = JSON.stringify({
        "username": id,
        "password": pass
       });
       var x = document.getElementById("snackbar");
       var xhr = new XMLHttpRequest();
       xhr.withCredentials = false;
       
       xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {   
            x.innerHTML = "Welcome to VBB-DashBoard";
            x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
            x.innerHTML = "";
          var response = JSON.parse(this.responseText);
          console.log(this.responseText.token);
          console.log(response);
          var userData = {
              _id: 'userData',
            token: response.token,
            username: response.user.username,
            email: response.user.email
          }
          db.put(userData);
          location.href = "HTML/DashBoard.html";
          // STORE DATA HERE
        }else{
            x.innerHTML = "Failed To Login. Please Check Credentials!"
            x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
            x.innerHTML = "";
        }
       });
       
       xhr.open("POST", "");
       xhr.setRequestHeader("mode", "no-cors");
       xhr.setRequestHeader("content-type", "application/json");
       xhr.setRequestHeader("cache-control", "no-cache");
       xhr.send(data);
}

