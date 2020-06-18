class Circle {
  constructor(radius){
    this.radius = radius;
  }
  
  get PI(){
    return Math.PI;
  }
  
  get diameter(){
    return this.radius * 2;
  }
  
  get circumference(){
    return this.PI * this.diameter;
  }
  
  get diameter(){
    return this.radius * 2;
  }
}