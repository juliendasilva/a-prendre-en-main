var slider = new Slider('#ex1', {
  formatter: function(value) {
    var text = value * (value / 10);
    document.getElementById("donationValue").innerHTML = Math.floor(text) + ' €';
    return 'Current value: ' + value;
  }
});