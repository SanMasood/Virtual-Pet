const FITNESS_THRESHOLD = 6;
const MAX_FITNESS_LEVEL = 10;

function Pet(pname) {
   this.name = pname;
   this.age = 0;
   this.hunger = 0;
   this.fitness = MAX_FITNESS_LEVEL;
   this.statsString = 0;
   this.afterWalk = 'FITNESS IS NOW: ';
   this.fitnessCheck;
   

   this.growUp = function(){
       this.age+=1;
       this.hunger += 5;
       this.fitness -= 3;
       
   }
   Pet.prototype.walk = function (){
    this.fitnessCheck = (this.fitness >= FITNESS_THRESHOLD) ? this.fitness = MAX_FITNESS_LEVEL : this.fitness+= 4;
   // return (this.afterWalk);

    }
    

    this.stats = function (){
        this.statsString = `Pet Stats: NAME: ${this.name}, AGE: ${this.age}, FITNESS: ${this.fitness}, HUNGER: ${this.hunger}`;
        return this.statsString;
    }

   /*this.feedMe = function(){
       this.hunger -= 1;
       
   }*/
      
   
 
}
module.exports = Pet;