// Write your code here:
const dogFactory = (name, breed, weight) => {
    return {
        _name: name,
        _breed: breed,
        _weight: weight,
        get name() {
            return this._name;
        },
        get breed() {
            return this._breed;
        },
        get weight() {
            return this._weight;
        },
        set name(newName) {
            this._name = newName;
        },
        set breed(newBreed) {
            this._breed = newBreed;
        },
        set weight(newWeight) {
            this._weight = newWeight;
        },
        bark() {
            return "ruff! ruff!";
        },
        eatTooManyTreats() {
            this._weight += 1;
        },
    };
}
