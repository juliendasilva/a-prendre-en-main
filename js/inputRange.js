var slider = new Slider('#ex1', {
  formatter: function(value) {
    var text                                           = value * (value / 10);
    document.getElementById("donationValue").innerHTML = Math.floor(text) + ' €';

    if (value < 25) {
      $("#femme1").show();
      $("#femme2").hide();
      $("#femme3").hide();
      $("#femme4").hide();
    }
    else if (value < 50){
      $("#femme1").hide();
      $("#femme2").show();
      $("#femme3").hide();
      $("#femme4").hide();
    }
    else if (value < 75){
      $("#femme1").hide();
      $("#femme2").hide();
      $("#femme3").show();
      $("#femme4").hide();
    }
    else{
      $("#femme1").hide();
      $("#femme2").hide();
      $("#femme3").hide();
      $("#femme4").show();
    }

    return 'Current value: ' + value;
  }
});