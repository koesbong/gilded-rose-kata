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
    this.updateQuality();
    this.updateSellIn();
  }

  updateQuality() {
    let quality;

    if (this.sell_in > 0) {
      quality = this.quality - 1;
    } else {
      quality = this.quality - 2;
    }

    if (quality >= 0) {
      this.quality = quality;
    }
  }

  updateSellIn() {
    this.sell_in = this.sell_in - 1;
  }
}

class Sulfuras extends BaseItem {
	updateQuality() {}
  updateSellIn() {}
}

class ConjuredManaCake extends BaseItem {
  updateQuality() {
    let quality = this.quality - 2;

    if (quality >= 0) {
      this.quality = quality;
    }
  }
}

class AgedBrie extends BaseItem {
  updateQuality() {
    let quality;

    if (this.sell_in > 0) {
      quality = this.quality + 1;
    } else {
      quality = this.quality + 2;
    }

    if (quality <= 50) {
      this.quality = quality;
    }
  }
}

class BackstagePasses extends BaseItem {
  updateQuality() {
    let quality = 0;

    if (this.sell_in > 10) {
      quality = this.quality + 1;
    } else if (this.sell_in > 5) {
      quality = this.quality + 2;
    } else if (this.sell_in > 0) {
      quality = this.quality + 3;
    }

    this.quality = quality > 50 ? 50 : quality;
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
