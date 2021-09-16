const { fabric } = require("./fabric");

var canvas = new fabric.Canvas('myCanvas');
var player_object = "";
var image_object = "";
player_x = 10;
player_y = 10;
block_image_width = 30;
block_image_height = 30;

function player_update() {
    fabric.Image.fromURL('player.png', function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x,
        });
        canvas.add(player_object);
    });

}
function new_image(get_img) {
    fabric.Image.fromURL(get_img, function (Img) {
        image_object = Img;
        image_object.scaleToWidth(block_image_width);
        image_object.scaleToHeight(block_image_height);
        image_object.set({
            top: player_y,
            left: player_x,
        });
        canvas.add(image_object);
    });

}

