const Pet = require('../src/pet');


  let petCat;

  beforeEach(() => {
     petCat = new Pet();    

  });

describe('constructor', () => {

  it ('Creates petCat as an instance of an Object', () => {
    expect(petCat).toBeInstanceOf(Object);

  });

  it ('petCat has the specified name', () => {

    petCat.name = 'Rocky';
    expect(petCat.name).toEqual('Rocky');

    petCat.name = 'Bravo';
    expect(petCat.name).toEqual('Bravo');

  });


  it('petCat has a initial age of 0', () => {

    expect(petCat.age).toEqual(0);
   
  });

  it('has a initial hunger of 0', () => {

    expect(petCat.hunger).toEqual(0);
  });

  it('has a initial fitness of 10', () => {

    expect(petCat.fitness).toEqual(10);
  });
  
}); 

describe('growUp', () => {

  it('increments petCat\'s age by 1', () => {
    //petCat.age = 0;
    petCat.growUp();
    expect (petCat.age).toEqual(1);

    petCat.growUp();
    expect (petCat.age).toEqual(2);

  });

  it ('increments hunger by 5', () => {
    petCat.growUp();
    expect(petCat.hunger).toEqual(5);

    petCat.hunger = 3;    
    petCat.growUp();
    expect(petCat.hunger).toEqual(8);
    
  });

  it('Pet cannot grow beyond age 30', () => {
    petCat.age = 30;
    expect(() => petCat.growUp()).toThrow(petCat.deathString);

  });

  it('Pet cannot grow if hunger is 10', () => {
    petCat.hunger = 10;
    expect(() => petCat.growUp()).toThrow(petCat.deathString);
  });

  it('Pet cannot grow if fitness is 0', () => {
    petCat.fitness = 0;
    expect(() => petCat.growUp()).toThrow(petCat.deathString);
  });

});

describe('walk', () => {
  it('takes the pet for a walk and increments fitness level by 4', () => {

    petCat.fitness = 4;
    petCat.walk();
    expect(petCat.fitness).toEqual(8);
  });

  it ('Does not let fitness be more than 10', () => {

    petCat.fitness = 8;
    petCat.walk();
    expect(petCat.fitness).toEqual(10);

  });

  it('Pet cannot walk if fitness is 0', () => {
    petCat.fitness = 0;
    expect(() => petCat.walk()).toThrow(petCat.deathString);

});
});

describe('stats', () => {
  it('returns a string of the current stats of petCat', () => {

    petCat.name = 'Rocky';
    petCat.age = 1;
    petCat.fitness = 10;
    petCat.hunger = 5;
    petCat.stats();
    
    expect(petCat.statsString).toBe('Pet Stats: NAME: Rocky, AGE: 1, FITNESS: 10, HUNGER: 5');   

  });
});


describe('feed', () => {
  it('feeds petCat and decrements hunger level by 3', () => {

    petCat.hunger = 9;
    petCat.feed();
    expect(petCat.hunger).toEqual(6);

  });

  it('Does not let hunger go beyond 0', () => {

    petCat.hunger = 1;
    petCat.feed();
    expect(petCat.hunger).toEqual(0);

  });

  it('Pet cannot be fed if hunger is 10', () => {
    petCat.hunger = 10;
    expect(() => petCat.feed()).toThrow(petCat.deathString);
  
  });
});


describe('checkUp', () => {
  it('returns PetCat is hungry & needs a walk' , () => {
    petCat.fitness = 1;
    petCat.hunger = 9;
    petCat.checkUp();
  
    expect(petCat.checkUp()).toBe('I am hungry AND I need a walk');
  });

  it('returns PetCat just needs a walk' , () => {
    petCat.fitness = 1;
    petCat.hunger = 3;
    petCat.checkUp();
  
    expect(petCat.checkUp()).toBe('I need a walk');

  });

  it('returns PetCat just is hungry' , () => {
    petCat.fitness = 9;
    petCat.hunger = 8;
    petCat.checkUp();

    expect(petCat.checkUp()).toBe('I am hungry');

  });

  it('returns PetCat feels great' , () => {
    petCat.fitness = 9;
    petCat.hunger = 2;
    petCat.checkUp();

    expect(petCat.checkUp()).toBe('I feel great!');

  });

  it('returns deathString if pet is dead' , () => {

    petCat.age = 30;
    petCat.hunger = 10;
    petCat.fitness = 0;
    expect(() => petCat.checkUp()).toThrow(petCat.deathString);

  });

});
describe('isAlive', () => {
  it ('returns true for age < 30' , () => {
    petCat.age = 7;
    expect(petCat.isAlive).toBe(true);

  });
  
  it ('returns false for age >= 30' , () => {
    petCat.age = 30;
    expect(petCat.isAlive).toBe(false);
    expect(() => petCat.deathChecker()).toThrow(petCat.deathString);

  });

  it ('returns true for hunger < 10 ', () => {
    petCat.hunger = 6;
    expect(petCat.isAlive).toBe(true);

  });

  it ('returns false for hunger >= 10', () => {
  
    petCat.hunger = 10;
    expect(petCat.isAlive).toBe(false);
    expect(() => petCat.deathChecker()).toThrow(petCat.deathString);


  });

  it ('returns true for fitness > 0', () => {
    petCat.fitness = 2;
    expect(petCat.isAlive).toBe(true);

  });

  it ('returns false for fitness = 0', () =>{

    petCat.fitness = 0;
    expect(petCat.isAlive).toBe(false);
    
    expect(() => petCat.deathChecker()).toThrow(petCat.deathString);

  });

});

describe('haveBaby', () => {
it ('Has a baby and pushes it into children[]', () => {
  
    petCat.haveBaby('kitten');
    expect(petCat.children[0]).toBe(petCat.children['kitten']);


});

});




//----------------- OLD CODE -----------------------------------------------
/*it('GROW UP: increments the age by 1 & hunger by 5', () => {

      pet.age = 30;
    
      expect(() => pet.growUp()).toThrow(pet.deathString);;

      pet.age = 0;
      pet.growUp();
      expect(pet.age).toEqual(1);
      expect(pet.hunger).toEqual(5);
      expect(pet.fitness).toEqual(7);

    });
    

  it('WALK: walks pet & increments the fitness level by 4 until 10', () => {

    pet.fitness = 0;  
    expect(() => pet.walk()).toThrow(pet.deathString);

      pet.fitness = 7; 
      pet.walk();
          
      expect(pet.fitness).toEqual(10);
  
    });

  it('returns stats of pet', () => { //Just a fancy method to display pet's stats :)

      pet.age = 1;
      pet.fitness = 10;
      pet.hunger = 5;
      pet.stats();
    
      expect(pet.statsString).toBe('Pet Stats: NAME: Rocky, AGE: 1, FITNESS: 10, HUNGER: 5');   
    });

  it('FEED : feeds pet to decrement pet hunger level by 3', () =>  {


      pet.hunger = 9;
      pet.feed();
      expect(pet.hunger).toEqual(6);

  
      pet.hunger = 10;
      expect(() => pet.feed()).toThrow(pet.deathString);
       

  });

  it('CHECKUP: evaluates fitness & hunger & notifies user', () =>  {
       
      pet.fitness = 1;
      pet.hunger = 9;
      pet.checkUp();
    
      expect(pet.checkUp()).toBe('I am hungry AND I need a walk');

      pet.fitness = 1;
      pet.hunger = 3;
      pet.checkUp();
    
      expect(pet.checkUp()).toBe('I need a walk');

      pet.age = 30;
      pet.hunger = 10;
      pet.fitness = 0;
      expect(() => pet.checkUp()).toThrow(pet.deathString);
  });
  */