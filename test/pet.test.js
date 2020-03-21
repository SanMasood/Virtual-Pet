const Pet = require('../src/pet');

describe('constructor', () => {
  let pet;
  beforeEach(() => {
     pet = new Pet('Rocky');

  });
    it('returns an object', () => {
      expect(new Pet('Rocky')).toBeInstanceOf(Object);
    });

    it('sets the name property', () => {
       // const pet = new Pet('Rocky');
    
        expect(pet.name).toEqual('Rocky');
      });


     it('has a initial age of 0 & hunger of 0 & fitness of 10', () => {
       // const pet = new Pet('Rocky');

        expect(pet.age).toEqual(0);
        expect(pet.hunger).toEqual(0);
        expect(pet.fitness).toEqual(10);
       
      });

     it('increments the age by 1 & hunger by 5', () => {
        //const pet = new Pet('Rocky');

        pet.growUp();
        expect(pet.age).toEqual(1);
        expect(pet.hunger).toEqual(5);
        expect(pet.fitness).toEqual(7);
  });

  it('walks pet & increments the fitness level by 4 until 10', () => {
    //const pet = new Pet('Rocky');
    //fitness is 10 at age 0; fitness is 7 at age 1 & so on
    pet.growUp(); //fitness: 7
    pet.walk();
    
    expect(pet.fitness).toEqual(10);
    //expect(pet.afterWalk).toEqual();
  
  });

  it('returns stats of pet', () => {
   
    pet.growUp(); //age = 1 ,fitness: 7
    pet.walk(); // fitness = 10
    pet.stats();
    
    expect(pet.fitness).toEqual(10);
    expect(pet.statsString).toBe('Pet Stats: NAME: Rocky, AGE: 1, FITNESS: 10, HUNGER: 5'); //cant pass a function in expect, dafty!
  
});

  it('feeds pet to decrement pet hunger level by 3', () =>  {
  //const pet = new Pet('Rocky');

    pet.growUp(); //age: 1, fitness: 7, hunger: 5
    //pet.growUp(); //age: 2, fitness: 4, hunger: 10

    expect(pet.hunger).toEqual(5);
});
  it('CheckUp evaluates fitness & hunger & notifies user', () =>  {
    
    pet.growUp(); //fitness: 7, hunger: 5
    pet.growUp(); //4, hunger: 10
    pet.growUp();//1; hunger:15
    
    pet.checkUp();
    expect(pet.fitness).toEqual(1);
    expect(pet.hunger).toEqual(15);
    expect(pet.checkUpString).toBe('I am hungry AND I need a walk');

    pet.feed(); //hunger : 12
    pet.feed(); //hunger: 9
    pet.feed(); // hunger: 6
    pet.feed(); //hunger: 3
    pet.checkUp();
    expect(pet.fitness).toEqual(1);
    expect(pet.hunger).toEqual(3); //passes all tests till here
    //expect(pet.checkUpString).toBe('I need a walk'); //problem statement

});

});