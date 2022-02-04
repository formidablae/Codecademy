// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase())
    }
    return newStrand
}

/**
 * Create a factory function pAequorFactory() that has two parameters:
 * The first parameter is a number
 * No two organisms should have the same number.
 * The second parameter is an array of 15 DNA bases.
 * pAequorFactory() should return an object that contains the properties specimenNum and dna that correspond to the parameters provided.
 */
const pAequorFactory = (specimenNumber, dnaArray) => {
    return {
        specimenNum: specimenNumber,
        dna: dnaArray,
        mutate: function () {
            /**
             * mutate() is responsible for randomly selecting a base in the object’s dna property
             * and changing the current base to a different base. Then .mutate() will return the object’s dna.
             * For example, if the randomly selected base is the 1st base and it is 'A',
             * the base must be changed to 'T', 'C', or 'G'. But it cannot be 'A' again.
             */
            let randomBaseIndex = Math.floor(Math.random() * this.dna.length);
            console.log("randomBaseIndex", randomBaseIndex);
            let randomBase = this.dna[randomBaseIndex];
            console.log("randomBase", randomBase);
            let newBase = returnRandBase();
            console.log("newBase", newBase);
            while (randomBase === newBase) {
                newBase = returnRandBase()
                console.log("newBase", newBase);
            }
            this.dna[randomBaseIndex] = newBase;
        },
        compareDNA: function (newpAequor) {
            /**
             * behavior of compareDNA() is to compare the current pAequor‘s dna with the passed in pAequor‘s dna
             * and compute how many bases are identical and in the same locations.
             * compareDNA() does not return anything, but prints a message that states the percentage of DNA the two objects have in common
             * use the specimenNum to identify which pAequor objects are being compared.
             */
            let dna1 = this.dna;
            let dna2 = newpAequor.dna;
            let sameBases = 0;
            for (let i = 0; i < dna1.length; i++) {
                if (dna1[i] === dna2[i]) {
                    sameBases++;
                }
            }
            let percentage = (sameBases / dna1.length) * 100;
            console.log(`Speciment #${this.specimenNum} and speciment #${newpAequor.specimenNum} have ${percentage}% DNA in common.`);
        },
        willLikelySurvive: function () {
            /**
             * willLikelySurvive() returns true if the object’s dna array contains at least 60% 'C' or 'G' bases.
             * Otherwise, willLikelySurvive() returns false.
             */
            let cgCount = 0;
            for (let i = 0; i < this.dna.length; i++) {
                if (this.dna[i] === 'C' || this.dna[i] === 'G') {
                    cgCount++;
                }
            }
            let percentage = (cgCount / this.dna.length) * 100;
            return percentage >= 60;
        }
    }
}
let pAequor = pAequorFactory(1, mockUpStrand());
console.log(pAequor);
newpAequor = pAequor.mutate();
console.log(pAequor);

let ex1 = pAequorFactory(1, ['A', 'C', 'T', 'G']);
let ex2 = pAequorFactory(2, ['C', 'A', 'T', 'T']);
ex1.compareDNA(ex2);

let pAequorInstance = [];
while(pAequorInstance.length < 30) {
    let newpAequor = pAequorFactory(pAequorInstance.length + 1, mockUpStrand());
    if (newpAequor.willLikelySurvive()) {
        pAequorInstance.push(newpAequor);
    }
}
console.log(pAequorInstance);
