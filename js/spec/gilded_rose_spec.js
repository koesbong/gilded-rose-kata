describe('Gilded Rose', function() {
  let item;

  function runTest({sellInExpectation, qualityExpectation}) {
    item.update();
    expect(item.sell_in).toEqual(sellInExpectation);
    expect(item.quality).toEqual(qualityExpectation);
  }

  it('should update Elixir of the Mongoose', function() {
    item = new BaseItem('Elixir of the Mongoose', 2, 2);
    runTest({sellInExpectation: 1, qualityExpectation: 1});
    runTest({sellInExpectation: 0, qualityExpectation: 0});
    runTest({sellInExpectation: -1, qualityExpectation: 0});
  });

  it('should update Conjured Mana Cake', function() {
    item = new ConjuredManaCake('Conjured Mana Cake', 3, 6);
    runTest({sellInExpectation: 2, qualityExpectation: 4});
    runTest({sellInExpectation: 1, qualityExpectation: 2});

    item = new ConjuredManaCake('Conjured Mana Cake', 1, 1);
    runTest({sellInExpectation: 0, qualityExpectation: 0});
    runTest({sellInExpectation: -1, qualityExpectation: 0});
  });

  it('should update Sulfuras', function() {
    item = new Sulfuras('Sulfuras, Hand of Ragnaros', 0, 80);
    runTest({sellInExpectation: 0, qualityExpectation: 80});

    item = new Sulfuras('Sulfuras, Hand of Ragnaros', -1, 80);
    runTest({sellInExpectation: -1, qualityExpectation: 80});
  });

  it('should update Aged Brie', function() {
    item = new AgedBrie('Aged Brie', 2, 0);
    runTest({sellInExpectation: 1, qualityExpectation: 1});
    runTest({sellInExpectation: 0, qualityExpectation: 2});
    runTest({sellInExpectation: -1, qualityExpectation: 4});
  });

  it('should update Backstage Passes', function() {
    // > 10
    item = new BackstagePasses('Backstage passes to a concert', 15, 20);
    runTest({sellInExpectation: 14, qualityExpectation: 21});

    // > 5, < 10
    item = new BackstagePasses('Backstage passes to a concert', 8, 20);
    runTest({sellInExpectation: 7, qualityExpectation: 22});

    // > 0, < 5
    item = new BackstagePasses('Backstage passes to a concert', 1, 20);
    runTest({sellInExpectation: 0, qualityExpectation: 23});

    // <= 0
    item = new BackstagePasses('Backstage passes to a concert', 0, 20);
    runTest({sellInExpectation: -1, qualityExpectation: 0});
  });
});
