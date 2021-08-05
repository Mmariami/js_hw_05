// Задание 5
// Напиши класс Car с указанными свойствами и методами.
class Car {
  /*
   * Добавь статический метод `getSpecs(car)`,
   * который принимает объект-машину как параметр и выводит
   * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
   */
  
    static getSpecs (Car){
        console.log (`maxspped : ${Car.maxSpeed},speed : ${Car.speed}, car is on: ${Car.isOn}, 
        distance : ${Car.distance}, price : ${Car.price}`)
    }


//    * Конструктор получает объект настроек.
//    *
//    * Добавь свойства будущеего экземпляра класса:
//    *  speed - текущая скорость, изначально 0
//    *  price - цена автомобиля
//    *  maxSpeed - максимальная скорость
//    *  isOn - заведен ли автомобиль, значения true или false. Изначально false
//    *  distance - общий киллометраж, изначально 0
//    */
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
  /*
   * Добавь геттер и сеттер для свойства price,
   * который будет работать с свойством цены автомобиля.
   */
  /*
   * Добавь код для того чтобы завести автомобиль
   * Записывает в свойство isOn значение true
   */
  turnOn() {
      this.isOn = true ;
  }
  /*
   * Добавь код для того чтобы заглушить автомобиль
   * Записывает в свойство isOn значение false,
   * и сбрасывает текущую скорость в 0
   */
  turnOff() {
      this.isOn = false;
      this.speed = 0 ;
  }
  /*
   * Добавялет к свойству speed полученное значение,
   * при условии что результирующая скорость
   * не больше чем значение свойства maxSpeed
   */
  accelerate(value) {
      if (value < this.maxSpeed){
        this.speed = value;
      } return this.speed;
  }
  /*
   * Отнимает от свойства speed полученное значение,
   * при условии что результирующая скорость не меньше нуля
   */
  decelerate(value) {
      if (this.speed - value > 0){
          this.speed = this.speed - value;
      } return this.speed;
  }
  /*
   * Добавляет в поле distance киллометраж (hours * speed),
   * но только в том случае если машина заведена!
   */
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