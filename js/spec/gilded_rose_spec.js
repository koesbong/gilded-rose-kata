describe('Gilded Rose', function() {

  it('should update Conjured Mana Cake', function() {
    let item = new ConjuredManaCake('Conjured Mana Cake', 3, 6);
    item.update();
    expect(item.sell_in).toEqual(2);
    expect(item.quality).toEqual(4);

    item.update();
    expect(item.sell_in).toEqual(1);
    expect(item.quality).toEqual(2);
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

  // TODO: Add more tests for the rest of the items
});
