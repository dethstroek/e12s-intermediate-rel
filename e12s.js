var application = new PIXI.Application(600, 700, { backgroundColor: 0x1099bb });
document.getElementById("game").appendChild(application.game);

var container = new PIXI.Container();
application.stage.addChild(container);

var state = {};
var textures = {};
var elems = {};

function loadTextures(){
    //Need background arena texture
    //Need boss texture
    textures.status.aero = PIXI.Texture.fromImage('img/aero.png');
    textures.status.flare = PIXI.Texture.fromImage('img/flare.png');
    textures.status.ice = PIXI.Texture.fromImage('img/ice.png');
    textures.status.gaze = PIXI.Texture.fromImage('img/gaze.png');
    textures.status.stack = PIXI.Texture.fromImage('img/stack.png');
    textures.status.return = PIXI.Texture.fromImage('img/return.png');
}