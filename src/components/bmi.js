export class Calculate {
  constructor(heigth, weigth, age, gender, activ_coefficient){
    this.heigth = heigth
    this.weigth = weigth
    this.age = age
    this.gender = gender
    this.activ_coefficient = activ_coefficient
  }

  static create(...args) {
    return new BodyMassIndex(...args);
  }

  calculateBMI(){
    let heigth_m = this.heigth / 100;
    let calc_bmi = this.weigth / (Math.pow(heigth_m, 2));
    return calc_bmi.toFixed(2);
  }

  idealWeight() {
    let iweight = 0;
    if(this.gender == 'male'){
      iweight = this.heigth - 100;
    }
    else {
      iweight = this.heigth - 110;
    }
    return iweight.toFixed(0);
  }
  
  basicLevelMetabolic() {
    return this.weigth * 24;
  }

  basicMetabolicRate() {
    let basicmetabolic = 0;
    if(this.gender = 'male') {
      basicmetabolic = 66.47 + (13.75 * this.weigth) + (5 * (this.heigth / 100)) - (6.76 * this.age);
    }
    else {
      basicmetabolic = 665.1 + (9.56 * this.weigth) + (1.85 * (this.heigth / 100)) - (4.68 * this.age);
    }
    return basicmetabolic.toFixed(0);
  }

  metabolism() {
    return (this.basicMetabolicRate() * this.activ_coefficient).toFixed(0);
  }
}