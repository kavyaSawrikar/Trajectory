class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory = [];
    //this.trajectory = [[200,40], [300, 50],[], [], []................];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    var position = [this.body.position.x, this.body.position.y];
    this.trajectory.push(position)

    // for the length of the trajectory array we want to loop over
    for(var i = 0; i< this.trajectory.length; i++ ){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }

   
  }
}
