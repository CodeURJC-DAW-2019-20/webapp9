    
    function loadGamesData()$.ajax({
        url: 'https://localhost:8443/loadGamesData'
    
    
    
    $(document).ready(function(){
    	
    	
    	
    })


	var ctxP = document.getElementById("myPie1").getContext('2d');
    var myPieChart = new Chart(ctxP, {
      type: 'pie',
      data: {
        labels: ["Loses", "Wins"],
        datasets: [{
          data: [300, 50,],
          backgroundColor: ["#F7464A", "#46BFBD"],
          hoverBackgroundColor: ["#FF5A5E", "#5AD3D1"]
        }]
      },
      options: {
        responsive: true
      }
    });
