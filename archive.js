$(document).ready(()=>{
	$.getJSON( "/feeds/posts/default?alt=json", function( data ) {

    var years = [];
    var monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    $.each(data.feed.entry, (index, value)=>{

      var published = new Date(value.published.$t);

      /* get year */
      var year = published.getFullYear().toString();

	var foundYear = $.filter(years, (index, value) => {
		return value.year == year;
	})[0];

      if(!foundYear) {
         years.push({
           "year" : year,
           "months": []
         });

	foundYear = years[years.length-1];
      }

      var yearIndex = years.indexOf(foundYear);      

      /* get month */
      var month = monthNames[published.getMonth()];

      if(years[yearIndex].months[month] === undefined){
         years[yearIndex].months[month] = [];
      }

      /*get day*/
      var day = published.getDay();

	var foundDay = $.filter(years[yearIndex].months[month], (index, item) => {
		return item.day == day;
	});

	if (!foundDay)
	{
		years[yearIndex].months[month].push({
			"day":day,
			"posts": []
		});
		foundDay = years[yearIndex].months[month][years[yearIndex].months[month].length - 1];
	}

    
	var dayIndex = years[yearIndex][month].indexOf(foundDay);

	years[yearIndex][month][dayIndex].push({
		"title" : value.title.$t,
		"link" : value.link.filter((item) => { return item.rel == 'alternate'; })[0].href
	});

});


    var ViewModel = function(data) {
       this.data = ko.observable(data);
    };
 
    ko.applyBindings(new ViewModel(years)); 

    console.debug(data, years);
  });
});