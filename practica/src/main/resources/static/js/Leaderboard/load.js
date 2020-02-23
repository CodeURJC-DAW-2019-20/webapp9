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
        url: 'https://localhost:8443/leaderBoardLoaded'
    }).done(function (teams) {
    	console.log("olo");
    	callback(teams);
    });
}

//$(document).ready(function(){
	
	$("#btn").on('click', function() {
		
		loadTeams(function (teams) {
	        for (var i = 2; i < teams.length; i++) {
	            showTeam(i,teams[i]);	
	        }
	    });
	});
//});
	