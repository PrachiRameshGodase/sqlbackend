const db=require('../util/database')

const Cart = require('./cart');




module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute(
      " INSERT INTO productss (title,price,imageUrl,description) VALUES(?,?,?,?)",
      [this.title, this.price, this.imageUrl, this.description]
    );
  }

  static deleteById(id) {
    
  }

  static async fetchAll() {
    try{
   const data= await db.execute('SELECT * FROM productss')
  //  console.log(data)
   return data;
    }catch(err){
      console.log(err)
    }
  }

  static findById(id) {
   return db.execute('SELECT * FROM productss WHERE productss.id=? ',[id])
  }
};
