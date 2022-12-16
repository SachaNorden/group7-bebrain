import Phaser from 'phaser';
import startButton from '../../img/tracking_button.png';
import backgroundSky from "../../img/trackingBackground.jpg";
import start from "../../img/start.png";
import ScoreLabel from "./ScoreLabel";


let circle;


class StartGame extends Phaser.Scene {

  constructor() {
    super('StartGame');

    this.startButton = undefined;
     }

  preload() {
    this.load.image('sky', backgroundSky);
    this.load.image('startButton', startButton);
    this.load.image('start', start);
  }

  create() {
    this.add.image(400, 300, 'sky').setScale(2);
    this.scoreLabel = this.createScoreLabel(16, 16, 0);
    this.add.text(300, 110, 'Pointez la planète', { fontSize: '40px', fill: '#000' , fontFamily: 'Agency FB'});
    this.add.text(330, 160, 'Start', { fontSize: '80px', fill: '#000' , fontFamily: 'Agency FB'});
    circle =this.matter.add.image(400, 300, 'startButton'); // initial position of the circle
    this.matter.world.setBounds().disableGravity();
    circle.setCircle(640);
    circle.setScale(0.08);
  }

  update(){
    const xPosition=circle.x;
    const yPosition=circle.y;
    if (this.input.mousePointer.x > xPosition - 50 && this.input.mousePointer.x < xPosition + 50 && this.input.mousePointer.y > yPosition - 50 && this.input.mousePointer.y < yPosition + 50) {
      if(this.input.mousePointer.isDown){
        this.scene.start('GameScene');
      }
    }

  }

  createScoreLabel(x, y, score) {
    const style = { fontSize: '32px', fill: '#000', fontFamily: 'Agency FB' };
    const label = new ScoreLabel(this, x, y, score, style);
    // console.log('score:', label);
    this.add.existing(label);

    return label;
  }
}
export default StartGame;