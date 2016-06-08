$(document).ready(function(){
  var column = $('#center_column');
  var input = $('#user-input');
  var submit = $('#submit');
  submit.click(function(event){
    event.preventDefault();
    $.getJSON('http://www.omdbapi.com/?s='+input.val(),function(data){
      var results = data.Search;
      column.html('');
      console.log(results);
      for(var i=0;i<results.length;i++){
        var title = $('<p>');
        title.text(results[i].Title);
        title.appendTo(column);
        var poster = $('<img>');
        poster.addClass('movie_poster');
        if(results[i].Poster === 'N/A'){
          poster.attr('src','mockups/images/no_image.png');
        } else {
          poster.attr('src',results[i].Poster);
        }
        poster.appendTo(column);
      }
    })
  })
})
