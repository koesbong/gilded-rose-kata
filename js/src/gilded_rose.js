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
    this.degradeFactor = this.qualityDegradeFactor();
    this.quality = this.calculateQuality();
    this.sell_in = this.calculateSellIn();
  }

  calculateQuality() {
    let quality = this.quality - this.degradeFactor;

    if (quality < 0) {
      quality = 0;
    }

    if (quality > 50) {
      quality = 50;
    }

    return quality;
  }

  calculateSellIn() {
    return this.sell_in - 1;
  }

  qualityDegradeFactor() {
    return 1;
  }
}

class Sulfuras extends BaseItem {
  qualityDegradeFactor() {
    return 0;
  }
  calculateSellIn() {
    return this.sell_in;
  }
}

class ConjuredManaCake extends BaseItem {
  qualityDegradeFactor() {
    return 2;
  }
}

class AgedBrie extends BaseItem {
  qualityDegradeFactor() {
    if (this.sell_in > 0) {
      return -1;
    } else {
      return -2;
    }
  }
}

class BackstagePasses extends BaseItem {
  qualityDegradeFactor() {
    if (this.sell_in > 10) {
      return -1;
    } else if (this.sell_in > 5) {
      return -2;
    } else if (this.sell_in > 0) {
      return -3;
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
