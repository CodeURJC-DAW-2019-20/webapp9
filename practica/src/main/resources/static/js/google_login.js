function sendObject(googleSession){
	$.ajax({
        method: "POST",
        url: 'https://localhost:8443/registerGoogle',
        data: JSON.stringify(googleSession),
        processData: false,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (googleSession) {
        console.log("Item created: " + JSON.stringify(googleSession));
    })
}

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
 /*   console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());*/
    var googleSession = {
    	/*name : profile.getGivenName(),
    	userName : profile.getGivenName(),
    	email : profile.getEmail()*/
    	name : "alejandro",
        user : "avaden",
        email : "huevos@gmail.com"
    }
    sendObject(googleSession);
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      
    });
  }

