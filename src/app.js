var UI = require('ui');
var Vector2 = require('vector2');

var splashWindow = new UI.Window({ fullscreen: true});
var splashLogo = new UI.Image ({
  posisiton: new Vector2 (0,0),
  size: new Vector2 (144,168),
  image: "images/pebbleosu.png"
});
splashWindow.add(splashLogo);
splashWindow.show();

var userInfo = [
  {
    title: "Username",
    subtitle: "user"
  },
  {
    title: "Global Rank",
    subtitle: "global"
  },
  {
    title: "PP",
    subtitle: "pp"
  },
  {
    title: "National Rank",
    subtitle: "national"
  },
  {
    title: "Accuracy",
    subtitle: "Acc"
  }
];

var userMenu = new UI.Menu({
  sections: [{
    title: 'User Info',
    items: userInfo
  }]
});

splashWindow.hide();
userMenu.show();
