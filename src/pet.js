const FITNESS_THRESHOLD = 6;
const MAX_FITNESS_LEVEL = 10;
const HUNGER_THRESHOLD = 2;

function Pet(pname) {
   this.name = pname;
   this.age = 0;
   this.hunger = 0;
   this.fitness = MAX_FITNESS_LEVEL;
   this.statsString = 0;
   this.checkUpString;
   
   

   Pet.prototype.growUp = function(){
       this.age+=1;
       this.hunger += 5;
       this.fitness -= 3;
       
   }
   Pet.prototype.walk = function (){
   (this.fitness >= FITNESS_THRESHOLD) ? this.fitness = MAX_FITNESS_LEVEL : this.fitness+= 4;
    }
    

    Pet.prototype.stats = function (){
        this.statsString = `Pet Stats: NAME: ${this.name}, AGE: ${this.age}, FITNESS: ${this.fitness}, HUNGER: ${this.hunger}`;
        return this.statsString;
    }

   Pet.prototype.feed = function(){
    (this.hunger <= HUNGER_THRESHOLD) ? this.hunger = 0 : this.hunger -= 3 ;
    
   
   }      
    Pet.prototype.checkUp = function (){
                
        if (this.fitness <= 3 && this.hunger<5){
        this.checkUpString = `I need a walk`;
        return this.checkUpString;
        }
                

        else if (this.fitness>3 && this.hunger >= 5){
        this.checkUpString = 'I am hungry';
        return this.checkUpString;

        }
                
        
        else if (this.fitness <= 3 && this.hunger >= 5){
        this.checkUpString = 'I am hungry AND I need a walk';
        return this.checkUpString;
        }

        else return 'I feel great!';
     

    }
   
 
}
module.exports = Pet;