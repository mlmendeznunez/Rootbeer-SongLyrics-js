describe('someBottles', function() {
  it('creates song for 1 bottle of rootbeer', function() {
    expect(someBottles(1)).to.equal('1 bottle of root beer on the wall, 1 bottle of root beer. Take one down and pass it around, 0    of root beer on the wall. ; No more bottles of root beer on the wall, no more bottles of root beer! <br> Go to the store and buy some more, 1 bottles of root beer! <br>');
  });
});

describe('createSong', function() {
  it("creates song for 1 bottle of rootbeer", function() {
    var initialArray = createSong(1);
    var songArray = ["1 bottle of root beer on the wall, 1 bottle of root beer. Take one down and pass it around, 0    of root beer on the wall. ", " No more bottles of root beer on the wall, no more bottles of root beer! <br> Go to the store and buy some more, 1 bottles of root beer! <br>"];
    expect(initialArray).to.eql(songArray);
  });

  it("creates song for 0 bottle of rootbeer", function() {
    var songArray = ["There are no bottles of root beer on your wall! Go to the store and buy some bottles of root beer!"];
    expect(createSong(0)).to.eql(songArray);
  });
});
