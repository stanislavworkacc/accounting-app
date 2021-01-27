const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

class Category {
    constructor(title, price, position) {
        this.title = title;
        this.price = price;
        this.position = position;
        this.id = uuidv4();
    }

    toJSON() {
        return {
          title: this.title,
          price: this.price,
          position: this.position,
          id: this.id
        }
      };

      static async update(positionsAndPrice, id) {
        const categories = await Category.getAll();

        const idx = categories.findIndex(c => c.id === id);
        categories[idx].position = positionsAndPrice.position;
        categories[idx].price = positionsAndPrice.price;
        console.log(categories)

        return new Promise((res, rej) => {
          fs.writeFile(
            path.join(__dirname, '..', 'data', 'category.json'),
            JSON.stringify(categories),
            (err) => {
              if(err) {
                rej(err)
              } else {
                res()
              }
            }
          )
        });
      };

      async save() {
        const category = await Category.getAll();
        console.log('From SAVE', this.toJSON())
        category.push(this.toJSON());

        return new Promise((resolve, reject) => {
            fs.writeFile(
                path.join(__dirname, '..', 'data', 'category.json'),
                JSON.stringify(category),
                (err) => {
                  if (err) {
                    reject(err)
                  } else {
                    resolve()
                  }
                }
              )
        })
    };

    static getAll() {
        return new Promise((resolve, reject) => {
            fs.readFile(
                path.join(__dirname, '..', 'data', 'category.json'),
                'utf-8',
                (err, content) => {
                    if(err) {
                        reject()
                    } else {
                        resolve(JSON.parse(content))
                    }
                }
            )
        })
    };

    static async getById(id) {
      const category = await Category.getAll()
      return category.find(c => c.id === id)
    }
}

module.exports = Category;