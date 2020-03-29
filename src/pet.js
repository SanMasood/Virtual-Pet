const FITNESS_THRESHOLD = 6;
const MAX_FITNESS_LEVEL = 10;
const HUNGER_THRESHOLD = 2;
const MIN_FITNESS_THRESHOLD = 3;

function Pet() {
   this.name = name;
   this.age = 0;
   this.hunger = 0;
   this.fitness = MAX_FITNESS_LEVEL;
   this.statsString = 0;
   this.deathString = 'Your pet has passed away.';
   this.children = [];
}
   
   Pet.prototype = {          

   get isAlive() {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    },

    deathChecker (){
        if (!this.isAlive) 
            throw new Error(this.deathString);
        },

   growUp(){
        this.deathChecker();

        this.age+=1;
        (this.fitness <= MIN_FITNESS_THRESHOLD) ? this.fitness = 0 : this.fitness -=3; 
        this.hunger += 5;
                   
    },

   walk(){
    this.deathChecker();
           
        (this.fitness >= FITNESS_THRESHOLD) ? this.fitness = MAX_FITNESS_LEVEL : this.fitness+= 4;
    },
    

    stats(){
        this.statsString = `Pet Stats: NAME: ${this.name}, AGE: ${this.age}, FITNESS: ${this.fitness}, HUNGER: ${this.hunger}`;
        return this.statsString;
    },

   feed(){
    this.deathChecker();    
    (this.hunger <= HUNGER_THRESHOLD) ? this.hunger = 0 : this.hunger -= 3 ;
    
    },  

    checkUp(){

    this.deathChecker();

    {                   
        if (this.fitness <= 3 && this.hunger<5)
        return `I need a walk`;
     
        if (this.fitness>3 && this.hunger >= 5)
        return 'I am hungry';
        
        if (this.fitness <= 3 && this.hunger >= 5)
        return `I am hungry AND I need a walk`;
        
        else return 'I feel great!';
        }
    },

    haveBaby(child){
        child = new Pet ('Kitten'); //creates new pet with properties of Pet
        this.children.push(child);
        
       /* function theChild(){
        Pet.call (this);
        this.voice = 'Meow'; 
        

        child.prototype = Object.create(Pet.prototype);//will also inherit methods of Pet
        }*/

        
    },

   

} //end of Pet.prototype =
   

module.exports = Pet;