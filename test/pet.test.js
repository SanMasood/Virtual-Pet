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
  
      expect(pet.name).toEqual('Rocky');
  });


  it('has a initial age of 0 & hunger of 0 & fitness of 10', () => {

      expect(pet.age).toEqual(0);
      expect(pet.hunger).toEqual(0);
      expect(pet.fitness).toEqual(10);
       
    });

  it('GROW UP: increments the age by 1 & hunger by 5', () => {

      //pet.isAlive();
      pet.growUp();
      expect(pet.age).toEqual(1);
      expect(pet.hunger).toEqual(5);
      expect(pet.fitness).toEqual(7);
      pet.age = 31;
      expect(pet.isAlive).toEqual(pet.deathString);
    });

  it('WALK: walks pet & increments the fitness level by 4 until 10', () => {
  
      pet.fitness = 7; //fitness: 7
      pet.walk();
          
      expect(pet.fitness).toEqual(10);
     ;
  
    });

  it('returns stats of pet', () => { //Just a fancy method to display pet's stats :)
   
      pet.age = 1;
      pet.fitness = 10;
      pet.hunger = 5;
      pet.stats();
    
      expect(pet.statsString).toBe('Pet Stats: NAME: Rocky, AGE: 1, FITNESS: 10, HUNGER: 5');   
    });

  it('feeds pet to decrement pet hunger level by 3', () =>  {
  
    pet.growUp(); 
    expect(pet.hunger).toEqual(5);

  });

  it('CheckUp evaluates fitness & hunger & notifies user', () =>  {
  
    pet.fitness = 1;
    pet.hunger = 15
    pet.checkUp();
    
    expect(pet.checkUpString).toBe('I am hungry AND I need a walk');

    pet.fitness = 1;
    pet.hunger = 3
    pet.checkUp();
    
    expect(pet.checkUpString).toBe('I need a walk'); //problem statement

});
  it('checks whether the pet is alive', () =>  {

    return (pet.age < 30 || pet.fitness > 0 || pet.hunger < 10) ?  expect(pet.isAlive).toEqual('Your pet is alive.') : expect(pet.isAlive).toEqual('Your pet has passed away.');

});

});