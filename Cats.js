function cats(arr) {
let pets = {};
for ( let cat of arr){
    let [ animal , age] = cat.split(' ');
    pets.animal = animal;
    pets.age = age;
    console.log(`${pets.animal}, age ${pets.age} says Meow`);
}


}
//cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);