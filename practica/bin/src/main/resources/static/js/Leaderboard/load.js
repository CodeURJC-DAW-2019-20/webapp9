
$(document).ready(function(){
	var data = [{name: "team1", elo: "100"},
				{name: "team2", elo: "200"},
				{name: "team3", elo: "300"},
				{name: "team4", elo: "400"},
				{name: "team5", elo: "500"},
				];
    var cont = 1;
	
	var template = 	"{{#.}} " +
    				"<tr>" +
    				"<th scope='row'>" + cont++ +"</th> " +
    				"<td>{{name}}</td> " +
    				"<td>{{elo}}</td> " +
    				"</tr>" +
    				"{{/.}} ";
    
    var text = Mustache.render(template, data);        

    $("#table").html(text);
});

$("#btn").on('click', function() {

    
});


/*


"<ul>{{#.}}<li>{{name}} {{elo}}</li>{{/.}}</ul>"
*/