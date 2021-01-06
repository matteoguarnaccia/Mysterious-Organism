// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (number, func) => {
  return {
    specimenNum: number,
    dna: func(),

    mutate(){
      const randomIndex = Math.floor(Math.random()*15);
      let randomBase = returnRandBase();
      while(randomBase === this.dna[randomIndex]){
        randomBase = returnRandBase();
      }
      this.dna[randomIndex] = randomBase;
    },

    compareDNA(pAequorObj){
      let counter = 0;
      for(let i in this.dna){
        if(this.dna[i] === pAequorObj.dna[i]){
          counter++;
        }
      }
      console.log(`speciment ${this.specimenNum} and specimen ${pAequorObj.specimenNum} have ${Math.round(counter*100/15)}% DNA in common`);
    },

    willLikelySurvive(){
      let counter = 0;
      for(let i in this.dna){
        if(this.dna[i] === 'C' || this.dna[i] === 'G'){
          counter++;
        }
      }
      if(Math.round(counter*100/15)>=60){
        return true;
      } else {
        return false;
      }
    }
  }
}

const survivorArray = [];
for(i=0; i<30; i++){
  let newOrganism = pAequorFactory(i, mockUpStrand);
  while(!newOrganism.willLikelySurvive()){
    newOrganism = pAequorFactory(i, mockUpStrand);
  }
  survivorArray.push(newOrganism);
}
console.log(survivorArray);
//const organism1 = pAequorFactory(7, mockUpStrand);
//const organism2 = pAequorFactory(86, mockUpStrand);

//console.log(organism1.dna);
//console.log(organism2.dna);

//console.log(organism1.willLikelySurvive());

//organism1.compareDNA(organism2);

//console.log(pAequorFactory(7, mockUpStrand));





