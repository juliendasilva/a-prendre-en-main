$.getJSON( "./js/config.json", function( data ) {
var urlAPI = data.apiURL;
  $.ajax({
    url: urlAPI,
    context: document.body
  }).done(function(json) {
    var commited = json.amount_raised;
    var goal = json.goal;
    document.getElementById("ulule-commited").innerHTML = commited;
    document.getElementById("ulule-goal").innerHTML = goal;
  });

});