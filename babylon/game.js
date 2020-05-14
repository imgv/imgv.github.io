///<reference path="babylon.d.ts" />
var Game = /** @class */ (function () {
    function Game(canvasElement) {
        // Create canvas and engine.
        this._canvas = document.getElementById(canvasElement);
        this._engine = new BABYLON.Engine(this._canvas, true);
    }
    Game.prototype.createScene = function () {
        // Create a basic BJS Scene object.
        this._scene = new BABYLON.Scene(this._engine);
        // Create a FreeCamera, and set its position to (x:0, y:5, z:-10).
        // this._camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5,-10), this._scene);
        // Target the camera to scene origin.
        // this._camera.setTarget(BABYLON.Vector3.Zero());
        // Attach the camera to the canvas.
        // this._camera.attachControl(this._canvas, false);
        // Create a basic light, aiming 0,1,0 - meaning, to the sky.
        // this._light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,0), this._scene);
        // Create a built-in "sphere" shape; with 16 segments and diameter of 2.
        // let sphere = BABYLON.MeshBuilder.CreateSphere('sphere',
        // {segments: 16, diameter: 2}, this._scene);
        // Move the sphere upward 1/2 of its height.
        // sphere.position.y = 1;
        // Create a built-in "ground" shape.
        // let ground = BABYLON.MeshBuilder.CreateGround('ground',
        // {width: 6, height: 6, subdivisions: 2}, this._scene);
        BABYLON.SceneLoader.Append("../", "water-tank.obj", this._scene, function (scene) {
            // Create a default arc rotate camera and light.
            scene.createDefaultCameraOrLight(true, true, true);
            // The default camera looks at the back of the asset.
            // Rotate the camera by 180 degrees to the front of the asset.
            scene.activeCamera.alpha += Math.PI;
        });
    };
    Game.prototype.doRender = function () {
        var _this = this;
        // Run the render loop.
        this._engine.runRenderLoop(function () {
            _this._scene.render();
        });
        // The canvas/window resize event handler.
        window.addEventListener('resize', function () {
            _this._engine.resize();
        });
    };
    return Game;
}());
window.addEventListener('DOMContentLoaded', function () {
    // Create the game using the 'renderCanvas'.
    var game = new Game('renderCanvas');
    // Create the scene.
    game.createScene();
    // Start render loop.
    game.doRender();
});
