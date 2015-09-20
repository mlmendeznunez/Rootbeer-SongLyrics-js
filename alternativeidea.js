// 
// var createSong = function(number) {
//   debugger;
//   var index = number;
//   if (index <= 0) {
//     return "There are no bottles of rootbeer on your wall! Go to the store and buy some bottles of rootbeer!";
//   } else {
//     var song = someBottles(index);
//   }
//   return song;
// };
//
// var noBottles = function(number) {
//   return "There are no bottles of rootbeer on your wall! Go to the store and buy some bottles of rootbeer!";
// };
//
// var someBottles = function (number){
//   var song = "bottles of beer on wall";//sprintf("%1$d bottles of beer on the wall, %1$d bottles of beer. Take one down and pass it around, %2$d bottles of beer on the wall.", number, number-1);
//   return song + " <br> " + someBottles(n - 1);
// };
//
//
// var createSong = function(number) {
//   var index = number;
//   var song = []; //array needed
//
//   if (index <= 0) {
//     song = noBottles(index);
//   }
//   else {
//     song = someBottles(index);
//   }
//   return song;
// };
//
// var noBottles = function(index) {
//   return "There are no bottles of rootbeer on your wall! Go to the store and buy some bottles of rootbeer!";
// };
//
// var someBottles = function(index) {
//     var song = [];
//     while ( index > 0 ) {
//       var lyrics = ""; //blank string?  array needed?
//       var originalNumber = index;
//       var bottles = "bottles";
//
//       if (index == 1) {
//         bottles = "bottle"
//       }
//       if (bottles == 0) {
//          bottles = "no more bottles";
//        }
//
//       lyrics += index + " " + bottles "of rootbeer on the wall, " + index + " " + bottles + "of rootbeer. Take one down and pass it around, ";
//
//       index --;
//       lyrics += index + " " + bottles + "of rootbeer on the wall. <br>";
//     }
//       song.push(lyrics);
//
//     if ( index === 0) {
//         var lyrics= "No more bottles of rootbeer on the wall, no more bottles of rootbeer. Go to the store and buy some more, " + originNumber + "bottles of rootbeer on the wall. <br>"
//         song.push(lyrics);
//       }
//     return song;
// };
//
// $(document).ready(function() {
//   $("form#rootbeer").submit(function(event) { //#id on html
//     var number = parseInt($("input#number").val());
//     var result = createSong(number);
//
//     $(".song").text(result);
//     $("#result").show();
//     event.preventDefault();
//   });
// });
