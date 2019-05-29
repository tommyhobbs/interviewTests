//bogof strawberries

const strawberry = {
  name: 'strawberry',
  price: 5.9
};

const bread = {
  name: 'bread',
  price: 6.2
};

const egg = {
  name: 'egg',
  price: 3.33
};

class Basket {
  constructor() {
    this.totalCost = 0;
    this.items = [];
    this.toProcess = [];
  }

  add(item) {
    this.items.push(item);
  }

  bogof() {
    let strawberryCount = 0;
    this.items.forEach((item, i) => {
      if (item.name === 'strawberry') {
        strawberryCount++;
      } else {
        this.toProcess.push(item);
      }
    });
    console.log(
      `${strawberryCount} strawberries cost £${(Math.floor(
        strawberryCount % 2
      ) +
        Math.floor(strawberryCount / 2)) *
        strawberry.price}`
    );
    this.totalCost +=
      (Math.floor(strawberryCount % 2) + Math.floor(strawberryCount / 2)) *
      strawberry.price;
  }

  noOffer() {
    this.toProcess.forEach((item, i) => {
      console.log(`${item.name} at £${item.price}`);
      this.totalCost += item.price;
    });
  }

  total() {
    this.bogof();
    this.noOffer();
    return this.totalCost.toFixed(2);
  }
}

basket = new Basket();

basket.add(strawberry);
basket.add(egg);
basket.add(bread);
basket.add(strawberry);
basket.add(strawberry);
basket.add(strawberry);

console.log(`TOTAL: £${basket.total()}`);
