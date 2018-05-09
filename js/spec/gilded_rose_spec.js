describe('Gilded Rose', function() {

  it('should update Elixir of the Mongoose', function() {
    let item = new BaseItem('Elixir of the Mongoose', 2, 2);
    item.update();
    expect(item.sell_in).toEqual(1);
    expect(item.quality).toEqual(1);

    item.update();
    expect(item.sell_in).toEqual(0);
    expect(item.quality).toEqual(0);

    item.update();
    expect(item.sell_in).toEqual(-1);
    expect(item.quality).toEqual(0);
  });

  it('should update Conjured Mana Cake', function() {
    let item = new ConjuredManaCake('Conjured Mana Cake', 3, 6);
    item.update();
    expect(item.sell_in).toEqual(2);
    expect(item.quality).toEqual(4);

    item.update();
    expect(item.sell_in).toEqual(1);
    expect(item.quality).toEqual(2);

    item = new ConjuredManaCake('Conjured Mana Cake', 1, 1);
    item.update();
    expect(item.sell_in).toEqual(0);
    expect(item.quality).toEqual(0);

    item.update();
    expect(item.sell_in).toEqual(-1);
    expect(item.quality).toEqual(0);
  });

  it('should update Sulfuras', function() {
    let item = new Sulfuras('Sulfuras, Hand of Ragnaros', 0, 80);
    item.update();
    expect(item.sell_in).toEqual(0);
    expect(item.quality).toEqual(80);

    item = new Sulfuras('Sulfuras, Hand of Ragnaros', -1, 80);
    item.update();
    expect(item.sell_in).toEqual(-1);
    expect(item.quality).toEqual(80);
  });

  it('should update Aged Brie', function() {
    let item = new AgedBrie('Aged Brie', 2, 0);
    item.update();
    expect(item.sell_in).toEqual(1);
    expect(item.quality).toEqual(1);

    item.update();
    expect(item.sell_in).toEqual(0);
    expect(item.quality).toEqual(2);

    item.update();
    expect(item.sell_in).toEqual(-1);
    expect(item.quality).toEqual(4);
  });

  it('should update Backstage Passes', function() {
    // > 10
    let item = new BackstagePasses('Backstage passes to a concert', 15, 20);
    item.update();
    expect(item.sell_in).toEqual(14);
    expect(item.quality).toEqual(21);

    // > 5, < 10
    item = new BackstagePasses('Backstage passes to a concert', 8, 20);
    item.update();
    expect(item.sell_in).toEqual(7);
    expect(item.quality).toEqual(22);

    // > 0, < 5
    item = new BackstagePasses('Backstage passes to a concert', 1, 20);
    item.update();
    expect(item.sell_in).toEqual(0);
    expect(item.quality).toEqual(23);

    // <= 0
    item = new BackstagePasses('Backstage passes to a concert', 0, 20);
    item.update();
    expect(item.sell_in).toEqual(-1);
    expect(item.quality).toEqual(0);
  });
});
