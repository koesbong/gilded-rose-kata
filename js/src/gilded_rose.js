// Do not alter the item function as that belongs to the goblin in the
// corner who will insta-rage and one-shot you as he doesn't believe
// in shared code ownership.
function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

class BaseItem extends Item {
  update() {
    this.getDegradeFactor();
    this.updateQuality();
    this.updateSellIn();
  }

  updateQuality() {
    let quality = this.quality - this.degradeFactor;

    if (quality < 0) {
      quality = 0;
    }

    if (quality > 50) {
      quality = 50;
    }

    this.quality = quality;
  }

  updateSellIn() {
    this.sell_in = this.sell_in - 1;
  }

  getDegradeFactor() {
    this.degradeFactor = 1;
  }
}

class Sulfuras extends BaseItem {
  updateQuality() {}
  updateSellIn() {}
}

class ConjuredManaCake extends BaseItem {
  getDegradeFactor() {
    this.degradeFactor = 2;
  }
}

class AgedBrie extends BaseItem {
  getDegradeFactor() {
    if (this.sell_in > 0) {
      this.degradeFactor = -1;
    } else {
      this.degradeFactor = -2;
    }
  }
}

class BackstagePasses extends BaseItem {
  getDegradeFactor() {
    if (this.sell_in > 10) {
      this.degradeFactor = -1;
    } else if (this.sell_in > 5) {
      this.degradeFactor = -2;
    } else if (this.sell_in > 0) {
      this.degradeFactor = -3;
    }
  }
}

class GildedRoseStore {
  constructor(items = []) {
    this.items = items;
  }

  updateItem() {
    this.items.map(item => item.update());
  }
}
