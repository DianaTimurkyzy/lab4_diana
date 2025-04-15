class Product {
    static #products = [];

    static getAll() {
        return this.#products;
    }

    static add(product) {
        this.#products.push(product);
    }

    static findByName(name) {
        return this.#products.find(product => product.name === name);
    }

    static deleteByName(name) {
        this.#products = this.#products.filter(product => product.name !== name);
    }

    static getLast() {
        return this.#products[this.#products.length - 1];
    }
}

module.exports = Product;