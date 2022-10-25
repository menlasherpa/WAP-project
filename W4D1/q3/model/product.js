class Product {
  constructor(id, name, price, description) {
    this._id = id;
    this._name = name;
    this._price = price;
    this._description = description;
  }
  getName() {
    return this._name;
  }
  setName(name) {
    this._name = name;
  }
  getId() {
    return this._id;
  }
  setId(id) {
    this._id = id;
  }
  getPrice() {
    return this._price;
  }
  setPrice(price) {
    this._price = price;
  }
  getDescription() {
    return this._description;
  }
  setDescription(decription) {
    this._description = description;
  }
  static getAllProducts() {
    return products;
  }
}
products = [];
hp = new Product(1, "Laptop", 10, "HP Brand new Laptop");
samsung = new Product(2, "mobile", 30, "Samsung  mobile");
mac = new Product(3, "Laptop", 2, "MacBook Pro 2017");
car = new Product(4, "car", 18, "new Tesla 2021 ");

products = [hp, samsung, mac, car];

module.exports = Product;
