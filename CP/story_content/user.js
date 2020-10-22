function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5vQ6PpDy6cA":
        Script1();
        break;
      case "6OQ0arDa6Yx":
        Script2();
        break;
      case "6HplyNk4eWI":
        Script3();
        break;
      case "6JRuoSvUiIC":
        Script4();
        break;
      case "6WgZtdemwb6":
        Script5();
        break;
      case "6NE1Fe3vUwo":
        Script6();
        break;
  }
}

function Script1()
{
  var player=GetPlayer;
var res = player.GetVar("TextEntry30");
alert("Your variable is " + res + ".");


}

function Script2()
{
  var thePlayer = GetPlayer();
var theChar = thePlayer.GetVar("TextEntry24");
var theLength = theChar.length;
theChar = theChar.substring(8,theLength-2);


thePlayer.SetVar("v",theChar);
}

function Script3()
{
  var player=GetPlayer;
var res = player.GetVar("TextEntry30");
alert("Your variable is " + res + ".");


}

function Script4()
{
  var player=GetPlayer;
var res = player.GetVar("TextEntry30");
alert("Your variable is " + res + ".");


}

function Script5()
{
  var player=GetPlayer;
var res = player.GetVar("TextEntry30");
alert("Your variable is " + res + ".");


}

function Script6()
{
  var player=GetPlayer;
var res = player.GetVar("TextEntry30");
alert("Your variable is " + res + ".");


}

