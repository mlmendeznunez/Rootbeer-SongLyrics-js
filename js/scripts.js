//main function to create song lyrics
var createSong = function(number) {
  var index = number;
  var song = "";

  if (index <= 0) {
    song = "There are no bottles of rootbeer on your wall! Go to the store and buy some bottles of rootbeer!";
  }
  else {
    song = someBottles(index);
  }
  return song.split(";");
};

//function to create song lyrics for x numbers of bottles
var someBottles = function(index) {
  //  debugger;
    var lyrics = "";
    var originalNumber = index;

    while ( index > 0 ) {
      var bottles = "bottles";
      if (index == 1) { bottles = "bottle"; }
      if (index == 0) {bottles = "no more bottles"; }

      lyrics += index + " " + bottles + " of root beer on the wall, " + index + " " + bottles + " of root beer. Take one down and pass it around, ";
      index --;

      if ( index == 1 ) { bottles = "bottle "; }
      if ( index == 0 ) {bottles = "  "; }
      lyrics += index + " " + bottles + " of rootbeer on the wall. ; ";
    }

    if ( index === 0 ) {
        lyrics += "No more bottles of root beer on the wall, no more bottles of root beer! <br> Go to the store and buy some more, " + originalNumber + " bottles of rootbeer! <br>";
      }
    return lyrics;
};


$(document).ready(function() {
  $("form#rootbeer").submit(function(event) { //#id on html
    //alert('Test 2');
    var number = parseInt($("input#number").val());
    var songArray = createSong(number);

    $("ul").empty();
      for (var i = 0; i < songArray.length; i++) {
        $("ul").append("<li>" + songArray[i] + "</li>");
      }
    $("#result").show();
    event.preventDefault();
  });
});
