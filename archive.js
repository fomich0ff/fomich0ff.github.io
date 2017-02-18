$(document).ready(()=>{
	$.getJSON( "/feeds/posts/default?alt=json", function( data ) {

    var years = [];
    var monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    $.each(data.feed.entry, (index, value)=>{

      var published = new Date(value.published.$t);

      /* get year */
      var year = published.getFullYear().toString();
      if(years.indexOf(year) == -1) {
         years.push({
           "year" : year,
           "months": []
         );
      }
      var yearIndex = years.indexOf(year);      

      /* get month */
      var month = monthNames[published.getMonth()];

      if(years[yearIndex].months[month] === undefined){
         years[yearIndex].months[month] = [];
      }

      /*get day*/
      var day = published.getDay();
      if(years[yearIndex].months[month].indexOf(day) == -1) {
         years[yearIndex].months[month].push({
            "day":day,
            "posts": []
         });
      }

      
      var dayIndex = years[yearIndex][month].indexOf(day);

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