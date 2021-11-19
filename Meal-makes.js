//this program generates your order by randomly creating a three course meal using JS

const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },

  get appetizers() {},
  get mains() {},
  get desserts() {},

  set appetizers(value1) {},
  set mains(value2){},
  set desserts(value3){},

  get courses() { 
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },

  addDishToCourse(courseName,dishName,dishPrice)
  {
   const dish = {
     name: dishName,
     price: dishPrice
   }
    this._courses[courseName].push(dish);
  },

  getRandomDishFromCourse(courseName)
  {
    const dishes = this._courses[courseName]
    let randomIndex = Math.floor(Math.random()*dishes.length);
    return dishes[randomIndex];
  },

  generateRandomMeal() { 
    const appetizer = this.getRandomDishFromCourse('appetizers');

    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');

    const totalPrice = appetizer.price + main.price + dessert.price;

    return `You meal is ${appetizer.name}, ${main.name}, and ${dessert.name} which comes out to a total of $${totalPrice}`;
  }
};

menu.addDishToCourse('appetizers','calimari',11);
menu.addDishToCourse('mains','pasta',24);
menu.addDishToCourse('desserts','ice cream',7
);

const meal = menu.generateRandomMeal();

console.log(meal);
