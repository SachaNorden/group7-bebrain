import Phaser from 'phaser';
import ScoreLabel from './ScoreLabel';

import backgroundSky from '../../img/trackingBackground.jpg';
import bombAsset from '../../assets/bomb.png';
import trackingButton from '../../img/tracking_button.png';
import restart from '../../img/restart.png';


const BOMB_KEY = 'bomb';

let circle;

class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
    this.cursors = undefined;
    this.scoreLabel = undefined;
    this.gameOver = false;
    }

  preload() {
    this.load.image('sky', backgroundSky);
    this.load.image(BOMB_KEY, bombAsset);
    this.load.image('trackButton', trackingButton);
    this.load.image('restart', restart);
  }

  create() {
    this.gameOver=false;
    this.add.image(400, 300, 'sky').setScale(2);
    this.scoreLabel = this.createScoreLabel(16, 16, 0);
    circle =this.matter.add.image(400, 300, 'trackButton'); // initial position of the circle
    this.matter.world.setBounds().disableGravity();
    this.gameOverText = this.add.text(200, 200, 'Game Over', { fontSize: '64px', fill: '#000' });
    this.gameOverTextRestart = this.add.text(250, 250, 'RESTART', { fontSize: '64px', fill: '#000' });
    this.gameOverText.visible = false;
    this.gameOverTextRestart.visible = false;
    this.triggerTimer = this.time.addEvent({
      callback: this.gameFinished,
        callbackScope: this,
        delay: 10000, // 1000 ms = 1s
        loop: false
    });

    circle.setCircle(640); // la taille de la boule qui peut se cogner
    circle.setScale(0.08); // la taille de l'image de la boule
    circle.setAngularVelocity(0.8);
    circle.setBounce(1.001); // prend de la vitesse mais de très très peu
    circle.setFriction(0, 0, 0); // ralenti avec de la friction comme de l'air
    circle.setVelocity(1,1); // vitesse de départ de la balle

  }

  createScoreLabel(x, y, score) {
    const style = {fontSize: '32px', fill: '#000000', fontFamily: 'Agency FB'};
    const label = new ScoreLabel(this, x, y, score, style);
    this.add.existing(label);
    return label;
  }

  gameFinished() {
    this.gameOver = true;
    this.gameOverText.visible = true;
    this.gameOverTextRestart.visible = true;
    this.input.on('pointerdown', () => this.scene.start('StartGame'));
    const score =this.scoreLabel.getScore();
    console.log(score);
  }

  update() {
    if (this.gameOver) { // quand il est ici il fait plus rien car il est coincé dans le if
      return;
    }
    const xPosition=circle.x;
    const yPosition=circle.y;
    if(this.input.mousePointer.position.x<=800 && this.input.mousePointer.position.y<=500 && this.input.mousePointer.position.x>0 && this.input.mousePointer.position.y>0) {
      if (this.input.mousePointer.x > xPosition - 50 && this.input.mousePointer.x < xPosition + 50 && this.input.mousePointer.y > yPosition - 50 && this.input.mousePointer.y < yPosition + 50) {
        this.scoreLabel.add(1);
        this.scoreLabel.setStyle({fontSize: '32px', fill: '#00FF00'});
      } else {
        this.scoreLabel.add(-1);
        this.scoreLabel.setStyle({fontSize: '32px', fill: '#FF0000'});
      }
    }
  }

}

export default GameScene;
