/* global Phaser */

const consola = require('consola').withTag('PreloadScene');

export default class PreloadScene extends Phaser.Scene {

    constructor() {
        super({ key: 'PreloadScene' });
    }

    preload() {
        consola.info('Loading assets..');
        this.load.spritesheet('fullscreen', '../assets/images/fullscreen-white.png', { frameWidth: 64, frameHeight: 64 });
    }

    /**
     * Pre-create any static objects that will be used in the game e.g. animations
     */
    create() {
        consola.success('Game loaded');
        this.scene.start('MenuScene');
    }
}
