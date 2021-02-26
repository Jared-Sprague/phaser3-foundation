/*
global Phaser
*/

import PreloadScene from 'scenes/PreloadScene';
import MainScene from 'scenes/MainScene';
import MenuScene from 'scenes/MenuScene';

export default class Game extends Phaser.Game {

    constructor() {
        const config = {
            type : Phaser.AUTO,
            scale: {
                mode      : Phaser.Scale.FIT,
                parent    : 'phaser-game',
                autoCenter: Phaser.Scale.CENTER_BOTH,
                width     : 800,
                height    : 600,
            },
            physics: {
                default: 'arcade',
                arcade : {
                    gravity: { y: 300 },
                    debug  : false,
                },
            },
            scene: [PreloadScene, MenuScene, MainScene],
        };
        super(config);
    }
}

