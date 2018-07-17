var nsg = require("node-sprite-generator");

nsg(
  {
    src: ["assets/images/*.png*"],
    spritePath: "../../assets/images/sprite.png",
    layout: "packed",
    stylesheet: "css",
    stylesheetPath: "../styles/sprite.css",
    compositor: "jimp"
  },
  function(err) {
    if (err) console.log(err);
    else console.log("Sprite generated!");
  }
);
