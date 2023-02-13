let driverLicense = {
    class: 'S',
    expiration: '12-14-03',
    id: 'A1356021',
    name: { first: 'Spongebob', last: 'Squarepants' },
    address: {
        street: '124 Conch street',
        city: 'Bikini Bottom',
        country: 'Hawai',
    },
    sex: 'M',
    hair: 'yellow',
    eyes: 'blue',
    height: '0-04',
    weight: '1 oz',
    birthdate: '07-14-86',
    validity: false,
    describe: function () {
        return str = this.name.first + " " + this.name.last + " " + this.birthdate;
    }
};

////////////// Question 1 //////////////////////

console.log("---------------------------------------")
console.log("---------------------------------------")
console.log("Question 1 : Premier objet")
console.log("---------------------------------------")

console.log("Conducteur : " + driverLicense.name.first + " " + driverLicense.name.last);

console.log("Validity : " + driverLicense.validity);
driverLicense.validity = true;
console.log("Validity : " + driverLicense.validity);

console.log(driverLicense.describe());

delete driverLicense.expiration;
console.log(driverLicense.expiration);

////////////// Question 2 //////////////////////

console.log("---------------------------------------")
console.log("---------------------------------------")
console.log("Question 2 : Objet depuis une fonction")
console.log("---------------------------------------")

function DriverLicense() {
    this.class = 'S';
    this.expiration = '12-14-03';
    this.id = 'A1356021';
    this.name = {
        first: 'Spongebob',
        last: 'Squarepants',
    }
}

let functionDriverLicense = new DriverLicense();

console.log(functionDriverLicense);

////////////// Question 3 //////////////////////

console.log("---------------------------------------")
console.log("---------------------------------------")
console.log("Question 3 : Héritage")
console.log("---------------------------------------")

function Personne(nom, age) {
    this.nom = nom;
    this.age = age
}

function Pilote(nom, age, nbTitres) {
    Personne.call(this, nom, age);
    this.nbTitres = nbTitres
}

let pilote = new Pilote ('Max',26,2);

console.log(pilote);