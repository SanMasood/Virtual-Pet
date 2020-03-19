const Pet = require('../src/pet');

describe('constructor', () => {
  beforeEach(() => {
    const pet = new Pet('Rocky');

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
  
  });
  
});