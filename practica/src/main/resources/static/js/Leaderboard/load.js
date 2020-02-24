function showTeam(pos,team) {
	$("#table").append(
  	         
		'<tr>' +
		'<th scope="row">' + pos + '</th>' +
		'<td>' + team.name + '</td>' +
		'<td>' + team.elo + '</td>' +
		'</tr>'
	);
}

function loadTeams(callback) {
    $.ajax({
        url: 'https://localhost:8443/leaderBoardLoaded?_csrf='+csrf
    }).done(function (teams) {
    	console.log("olo");
    	callback(teams);
    });
}

$(document).ready(function(){
	var cont = 2;
$("#btn").on('click', function() {
		
		loadTeams(function (teams) {
	        for (var i = cont; i < teams.length; i++) {
	        	cont = i + 1;
	        	console.log(cont);
	            showTeam(cont,teams[i]);	
	        }
	    });
	});
	
});
	

	