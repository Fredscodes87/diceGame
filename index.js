var randNumber = () => Math.floor(Math.random() * 6) + 1;

winner();

function player1Die() {
  var randNumb = randNumber();
  var randImg = document.getElementsByClassName("img1")[0];

  var randImg1 = "images/dice" + randNumb + ".png";

  randImg.setAttribute("src", randImg1);
  var p1die = randNumb;
  return p1die;
}

function player2Die() {
  var randNumb = randNumber();
  var randImg = document.getElementsByClassName("img2")[0];

  var randImg2 = "images/dice" + randNumb + ".png";

  randImg.setAttribute("src", randImg2);

  var p2die = randNumb;
  return p2die;
}
function winner() {
  var winner;
  var p1die = player1Die();
  var p2die = player2Die();

  if (p1die > p2die) {
    winner = document.getElementById("winner").innerHTML = "✌️ Player 1 wins";
  } else if (p1die < p2die) {
    winner = document.getElementById("winner").innerHTML = "Player 2 wins ✌️";
  } else {
    winner = document.getElementById("winner").innerHTML = "🤝 Draw 🤝";
  }
}
