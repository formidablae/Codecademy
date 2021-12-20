const robot = {
    energyLevel: 100,
    checkEnergy: function() {
        console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
}

robot.checkEnergy();
