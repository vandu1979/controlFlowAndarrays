const adventurer = {
    name: "Vandana",
    hitpoints: 10,
    belongings: ["sword", "potion", "tums"],
    companion: {
        name: "Velma",
        type: "Bat",
        companion: {
            name: "Tim",
            type: "parasite",
            belongings: ["SCUBA tank", "Rogan josh", "health insurance"]
        }
    }
}
/*console.log(adventurer.companion)
console.log(adventurer.belongings[0]);
console.log(1);
for (let i=0; i < adventurer.belongings.length; i++) {
	console.log(adventurer.belongings[i]);
}
console.log(adventurer.companion.type)
console.log(adventurer.companion.companion.type)
console.log(adventurer.companion.belongings);
console.log(adventurer.companion.companion.belongings[2]);
const movies = [ { title: "Tokyo Story" },  { title: "Paul Blart: Mall Cop" }, { title: "L'Avventura" } ];
console.log(movies[0].title);
for (let i=0; i < movies.length; i++) {
	console.log(movies[i].title);*/


class  Character {
    constructor (eyes, hair, name, age, lovesCats = false, lovesDogs ) {
        this.legs = 2;
        this.arms = 2;
        this.eyes = eyes;
        this.hair = hair;
        this.name = name;
        this.age = age;
        this.lovesCats = lovesCats;
        this.lovesDogs = lovesDogs || true;
      }
    greet (otherCharacter) {
        console.log('hi ' + otherCharacter + '!');
        
   }
   classyGreeting (otherClassyCharacter) {
    console.log('Greetings ' + otherClassyCharacter.name + '!');
  }
   setHair (hairColor) {
    this.hair = hairColor;
}

   smite () {
    console.log('I smited thee'); 
}
}
const hobbit = new Character('Mr Baggins', 33, 'brown', 'black')
console.log(hobbit);

//const me = new Character('black', 'black', 'Vandana', 40, true, true);
//const you = new Character('brown', 'gray', 'Sam', 35, 'great');
//me.hair = 'supernova red';

//me.classyGreeting(you);
//you.classyGreeting(me);

//console.log(me);
//console.log(you);
//you.setHair('red');


//me.greet('bob');
//me.walk();
//you.greet('bob');
//you.walk();


/*console.log(me);
console.log(you);
console.log(typeof me);
console.log(typeof you);*/

class Hobbit extends Character {
    constructor (name, age, eyes, hair) {
      super(name, age, eyes, hair);
      this.skills = ["thievery", "speed", "willpower"];
    }
    steal () {
      console.log('lets get away!');
    }
    greet (otherCharacter) {
      console.log('Greetings ' + otherCharacter);
    }
    smite () {
      super.smite();
      this.steal();
    }
  }
  const frodo = new Hobbit('Frodo', 30, 'brown', 'black')
  console.log(frodo);
  class Car {
    constructor (maker, serialNumber) {
      this.serialNumber = serialNumber;
      this.maker = maker
    }
    drive () {
      console.log('Vroom Vroom');
    }
  }
  
  const newCar = new Car('Mazda', 12345);
  console.log(newCar);

  class Factory {
    constructor (company) {
      this.company = company;
      this.cars = [];
    }
    generateCar () {
      const newCar = new Car(this.company, this.cars.length);
      this.cars.push(newCar);
    }
    findCar (index) {
      return this.cars[index];
    }
  }
  const tesla = new Factory('Tesla');
  tesla.generateCar();
  tesla.generateCar();
  tesla.generateCar();
  tesla.generateCar();
  console.log(tesla);
  console.log(tesla.findCar(0));

  const porche = new Factory('Porche');
  porche.generateCar();
  porche.generateCar();
  console.log(porche);
  console.log(porche.findCar(0)); 








