let spaceship = {
    'Fuel Type': 'Turbo Fuel',
    homePlanet: 'Earth'
};

// Write your code below
function greenEnergy(objParam) {
    objParam['Fuel Type'] = 'avocado oil';
}

function remotelyDisable(objParam) {
    objParam.disabled = true;
}

greenEnergy(spaceship);
remotelyDisable(spaceship);
console.log(spaceship);
