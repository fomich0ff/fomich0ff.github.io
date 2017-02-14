$(document).ready(() => {
    $('#nav').affix({
        offset: {
            top: $('header').height()
        }
    });
    
    $.each(pages, (i, v) => {
        
        var html = "<li>";
        html += v.selected ? "<span>" + v.title + "</span>" : "<a href='" + v.url + "'>" + v.title + "</a>";
        html += "</li>";
        var a = $("#main-menu").append(html); 
        if(v.selected)
            a.addClass("active");
    });
});