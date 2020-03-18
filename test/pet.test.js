const Pet = require('../src/pet');


describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Rocky')).toBeInstanceOf(Object);
    });

    it('sets the name property', () => {
        const pet = new Pet('Rocky');
    
        expect(pet.name).toEqual('Rocky');
      });


     it('has a initial age of 0', () => {
        const pet = new Pet('Rocky');

        expect(pet.age).toEqual(0);
      });
     it('increments the age by 1', () => {
        const pet = new Pet('Rocky');

        pet.growUp();
        expect(pet.age).toEqual(1);
  });
  
});