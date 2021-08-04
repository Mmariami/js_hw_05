class Storage {
    constructor(items) {
        this._items = items;
    }
    getItems() {
        return this._items;
    }
    addItem(item) {
        return this._items.push(item);
    }
    removeItem(item) {
       let index = this._items.indexOf(item);
       if(index !== -1){
        this._items.splice(index,1);
       }
       return this._items;
     }
};


const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);
const items = storage.getItems();

console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');


console.table(storage._items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]


storage.removeItem("Пролонгер");

console.table(storage._items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]