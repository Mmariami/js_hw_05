class StringBuilder {
    constructor(str) {
       this.value = str;
        

    }
    getValue () {
       return this.str;
    }


    append(str){
        this.value = this.value + str;

    }

    prepend(str){
        this.value = str + this.value;
    }
    pad(str){
        this.value = str + this.value + str;
    }
};


const builder = new StringBuilder('.');
console.log(builder.value);
builder.append('^');
console.log(builder.value); // '.^'
builder.prepend('^');
console.log(builder.value); // '^.^'
builder.pad('=');
console.log(builder.value); // '=^.^='