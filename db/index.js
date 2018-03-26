const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/demo_db', {
  logging: false
});

const Product = conn.define('product', {
  name: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.INTEGER
  },
  quantity: {
    type: Sequelize.INTEGER
  }
})

const sync = () => {
  return conn.sync({ force: true })
}

const seed = () => {
  return Promise.all([
    Product.create({ name: 'Toothpaste', price: '3', quantity: '5' }),
    Product.create({ name: 'Gum', price: '2', quantity: '7' }),
    Product.create({ name: 'Wallet', price: '17', quantity: '2' }),
  ])
}

module.exports = {
  sync,
  seed,
  models: {
    Product
  }
}
