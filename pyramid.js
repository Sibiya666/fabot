const Repeat = function (repeat, weight) {
    this.repeat = repeat,
        this.weight = weight;
};
const Pyramid = function () {
    this.STEP_REPEAT = 2;
    this.WEIGHT_IN_PERCENT = {
        FIRST: 40,
        SECOND: 55,
        THIRD: 70,
        FOURTH: 75,
        FIFTH: 80,
        MAX: 100
    };
    this.onePercentWeight;
    this.settings = [];
};

Pyramid.prototype.calcOnePercentWeight = function (maxWeight) {
    return maxWeight / this.WEIGHT_IN_PERCENT.MAX;
};

Pyramid.prototype.calcWeight = function (weightInPercent) {
    return this.onePercentWeight * weightInPercent
};

Pyramid.prototype.fillSettings = function (key, index) {
    this.settings.push(new Repeat(
        this.maxRepeat - (this.STEP_REPEAT * index),
        this.calcWeight(this.WEIGHT_IN_PERCENT[key]
        )));
};

Pyramid.prototype.createSettings = function () {
    Object.keys(this.WEIGHT_IN_PERCENT).forEach((key, index) => this.fillSettings(key, index))
};

Pyramid.prototype.onStart = function (maxWeight, maxRepeat) {
    this.onePercentWeight = this.calcOnePercentWeight(maxWeight);
    this.maxRepeat = maxRepeat;
    this.createSettings();
}

module.exports = new Pyramid();
