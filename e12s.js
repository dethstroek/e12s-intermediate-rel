var application = new PIXI.Application(600, 700, { backgroundColor: 0x1099bb });
document.getElementById("game").appendChild(application.game);

var container = new PIXI.Container();
application.stage.addChild(container);