const Pet = require('../src/pet');

describe('constructor', () => {
  let pet;

  beforeEach(() => {
     pet = new Pet('Rocky');
     expect(new Pet('Rocky')).toBeInstanceOf(Object);
     expect(pet.name).toEqual('Rocky');

  });

  it('has a initial age of 0 & hunger of 0 & fitness of 10', () => {

      expect(pet.age).toEqual(0);
      expect(pet.hunger).toEqual(0);
      expect(pet.fitness).toEqual(10);
       
    });

  it('GROW UP: increments the age by 1 & hunger by 5', () => {

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

});
