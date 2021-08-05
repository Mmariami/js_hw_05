class Car {

    static getSpecs (Car){
        console.log (`maxspped : ${Car.maxSpeed},speed : ${Car.speed}, car is on: ${Car.isOn}, 
        distance : ${Car.distance}, price : ${Car.price}`)
    }

  constructor({speed, price, maxSpeed, isOn, distance}) {
            this.speed = speed;
            speed = 0 ;
            this.price = price;
            this.maxSpeed = maxSpeed;
            this.isOn = isOn;
            isOn = true ;
            this.distance = distance;
            distance = 0 ;
  }

  get carPrice (){
      return this.carPrice
  }

  set carPrice (price){
      this.carPrice = price;
  }

  turnOn() {
      this.isOn = true ;
  }

  turnOff() {
      this.isOn = false;
      this.speed = 0 ;
  }
  
  accelerate(value) {
      if (value < this.maxSpeed){
        this.speed = value;
      } return this.speed;
  }

  decelerate(value) {
      if (this.speed - value > 0){
          this.speed = this.speed - value;
      } return this.speed;
  }
 
  drive(hours) {
      if (this.isOn) {
        this.distance = hours * this.speed
      } return this.distance
  }
}
const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);
Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();
Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000