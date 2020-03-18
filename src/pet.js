function Pet(pname) {
   this.name = pname;
   this.age = 0;
   

   this.growUp = function(){
       this.age+=1;
   }
 
}
module.exports = Pet;