$(document).ready(() => {
    /*$('#nav').affix({
        offset: {
            top: $('header').height()
        }
    });*/
    
    $('span.post-label:contains("archive")').addClass('archive-label');
    
    $.each(pages, (i, v) => {
        
        var html = "<li>";
        html += v.selected ? "<span class='page'>" + v.title + "</span>" : ( 
            v.post ? "<span class='post'>" + v.title + "</span>" : "<a href='" + v.url + "'>" + v.title + "</a>");
        html += "</li>";
        $("#main-menu").append(html); 
    });
});
