class Key {
  constructor(private signature: number = Math.random()) {}
  getSignature = (): number => this.signature;
}

class Person {
  constructor(private key: Key) {}
  getKey = (): Key => this.key;
}

abstract class House {
  protected door = false;
  protected tenants: Person[] = [];

  constructor(protected houseKey: Key) {}

  public comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log('Person enters the house');
    }
  }

  abstract openDoor(doorKey: Key): void;
}

class MyHouse extends House {
  openDoor(myDoorKey: Key): void {
    if (myDoorKey.getSignature() === this.houseKey.getSignature()) {
      this.door = true;
      console.log('The door of MyHouse is open');
    }
  }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);
