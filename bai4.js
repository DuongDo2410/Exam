class Animal{
    name;
    weight;

    constructor(name, weight){
        this.name = name;
        this.weight = weight;
    }

    getName(){
        return this.name
    }

    setName(name){
        this.name = name
    }

    getWeight(){
        return this.weight
    }

    setWeight(weight){
        this.weight = weight
    }

    toString(){
        return `Tên: ${this.name}, cân nặng: ${this.weight}`
    }
}

let objAnimalt = new Animal();
objAnimalt.setName("Elephant");
objAnimalt.setWeight(45.6);
objAnimalt.toString();
document.write(objAnimalt.toString());

let objAnimalt2 = new Animal("cat", 3)
objAnimalt2.setName("Mouse")

document.write(`Tên sau khi thay đổi: ${objAnimalt2.getName()}`);
