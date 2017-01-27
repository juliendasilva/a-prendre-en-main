$.ajax({
  url: "https://api.ulule.com/v1/projects/10-days-10-songs",
  context: document.body
}).done(function(json) {
  console.log(json);
  var commited = json.amount_raised;
  var goal = json.goal;
  document.getElementById("ulule-commited").innerHTML = commited;
  document.getElementById("ulule-goal").innerHTML = goal;
});