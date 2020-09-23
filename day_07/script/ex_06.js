var child = document.getElementsByTagName("footer")[0];

class Hero {
    constructor(name, type, intelligence, strength) {
        this.name = name.charAt(0).toUpperCase() + name.substring(1);
        this.type = type;
        this.intelligence = intelligence;
        this.strength = strength;
    }
    toString() {
        child.getElementsByTagName("div")[0].innerHTML += "I am " + this.name + " the " + this.type + ", I have " + this.intelligence + " intelligence points and " + this.strength + " strength points <br>";
    }
}

var mage = new Hero("amadeus", "mage", 10, 3);
var warrior = new Hero("pontius", "warrior", 1, 8);

mage.toString();
warrior.toString();