class GuessingGame {
    constructor() { }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return this.candidate = Math.round((this.min + this.max) / 2);
    }

    lower() {
        this.setRange(this.min, this.candidate);
    }

    greater() {
        this.setRange(this.candidate, this.max);
    }
}

module.exports = GuessingGame;
