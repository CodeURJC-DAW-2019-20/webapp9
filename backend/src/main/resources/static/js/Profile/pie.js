//pie
$(function(){
var ctxP = document.getElementById("pieChart").getContext('2d');


$.ajax({
    url: 'https://localhost:8443/getTeamData?id='+ id
}).done(function (team) {
	var varLosses = team.losses;
	var varWins = team.wins;
	var myPieChart = new Chart(ctxP, {
		type: 'pie',
		data: {
		labels: ["Losses", "Wins"],
		datasets: [{
		data: [varLosses, varWins],
		backgroundColor: ["#F7464A", "#46BFBD"],
		hoverBackgroundColor: ["#FF5A5E", "#5AD3D1"]
		}]
		},
		options: {
		responsive: true
		}
		});
	console.log("Variable perdidas" + varLosses);
	console.log("Variable ganadas" + varWins);
	console.log("Objeto perdidas" + team.losses);
	console.log("Objeto ganadas" + team.wins);
	console
});


});