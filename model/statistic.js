const fs = require('fs');
const path = require('path');

class Statistic {
    constructor(positionAndAmount, data, category, id) {
        this.data = data;
        this.category = category;
        this.positionAndAmount = positionAndAmount; //має прилітати готовий масив з обєктами
        this.id = id;
    }

    toJSON() {
        return {
        data: this.data,
        category: this.category,
        positionAndAmount: this.positionAndAmount,
        id: this.id,
        }
      };

    async save() {
        const statistic = await Statistic.getAll();
        console.log('From SAVE STAT', this.toJSON());
        statistic.push(this.toJSON());

        return new Promise((resolve, reject) => {
            fs.writeFile(
                path.join(__dirname, '..', 'data', 'statistic.json'),
                JSON.stringify(statistic),
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
        console.log('get all')
        return new Promise((resolve, reject) => {
            fs.readFile(
                path.join(__dirname, '..', 'data', 'statistic.json'),
                'utf-8',
                (err, content) => {
                    if(err) {
                        console.log(__dirname, 'error')
                        reject()
                    } else {
                        console.log('CONTENT', content)
                        resolve(JSON.parse(content))
                    }
                }
            )
        })
    };
    static async getById(id) {
        const category = await Statistic.getAll();
        return category.find(c => c.id === id);
      }
}

module.exports = Statistic;