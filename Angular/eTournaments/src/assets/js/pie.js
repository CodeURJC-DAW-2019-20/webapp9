//pie
var loadPie = ( function(){
    
    return{
		fn: function(losses,wins){
			var ctxP = document.getElementById("pieChart").getContext('2d');
			var myPieChart = new Chart(ctxP, {
				type: 'pie',
				data: {
					labels: ["Losses", "Wins"],
					datasets: [{
					data: [losses, wins],
					backgroundColor: ["#F7464A", "#46BFBD"],
					hoverBackgroundColor: ["#FF5A5E", "#5AD3D1"]}]
				},
			});
		}
	}
}
)(loadPie||{})
