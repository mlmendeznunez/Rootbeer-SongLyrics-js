describe('noBottles', function() {
  it("creates song for 0 bottle of rootbeer", function() {
    expect(noBottles(0)).to.equal("There are no bottles of rootbeer on your wall! Go to the store and buy some bottles of rootbeer!");
  });

  it("creates song for -1 bottle of rootbeer", function() {
    expect(noBottles(-1)).to.equal("There are no bottles of rootbeer on your wall! Go to the store and buy some bottles of rootbeer!");
  });

});

describe('createSong', function() {
  it("creates song for 1 bottle of rootbeer", function() {
    expect(createSong(1)).to.equal("1 bottles of beer on the wall, 1 bottles of beer. Take one down and pass it around, no more bottles of beer on the wall., No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 1 bottles of beer on the wall. <br>");
  });
});
