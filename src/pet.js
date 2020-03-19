const FITNESS_THRESHOLD = 6;

function Pet(pname) {
   this.name = pname;
   this.age = 0;
   this.hunger = 0;
   this.fitness = 10;
   

   this.growUp = function(){
       this.age+=1;
       this.hunger += 5;
       this.fitness -= 3;
       
   }
   this.walk = function (){
    return (this.fitness >= FITNESS_THRESHOLD) ? this.fitness = 10 : this.fitness+= 4;

}
   /*this.feedMe = function(){
       this.hunger -= 1;
       
   }*/
      
   
 
}
module.exports = Pet;