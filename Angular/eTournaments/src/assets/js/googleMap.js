var loadMap = (function() {

    return {
        func1: function (latitude, longitude){
            var latlng = new google.maps.LatLng(latitude, longitude);
    
            var myOptions = {
    	        zoom: 4,
    	        center: latlng,
    	        mapTypeId: google.maps.MapTypeId.ROADMAP
    	    };
    
            var map = new google.maps.Map(document.getElementById("map_container"),myOptions);
    
            var marker = new google.maps.Marker({
                position: latlng, 
                map: map, 
                title:"Tournament Title"
            });
        }   
    }
})(loadMap||{})




