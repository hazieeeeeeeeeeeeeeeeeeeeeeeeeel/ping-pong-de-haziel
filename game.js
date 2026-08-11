const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const game = {
  width: canvas.width,
  height: canvas.height,
  paddleWidth: 12,
  paddleHeight: 100,
  paddleSpeed: 6,
  ballRadius: 8,
  leftPaddle: { x: 20, y: canvas.height / 2 - 50, score: 0 },
  rightPaddle: { x: canvas.width - 32, y: canvas.height / 2 - 50, score: 0 },
  ball: { x: canvas.width / 2, y: canvas.height / 2, speedX: 4, speedY: 3 },
  keys: {},
};

function resetBall() {
  game.ball.x = game.width / 2;
  game.ball.y = game.height / 2;
  game.ball.speedX = 4;
  game.ball.speedY = 3;
}

function updatePaddles() {
  if (game.keys["w"] && game.leftPaddle.y > 0) {
    game.leftPaddle.y -= game.paddleSpeed;
  }
  if (game.keys["s"] && game.leftPaddle.y + game.paddleHeight < game.height) {
    game.leftPaddle.y += game.paddleSpeed;
  }
  if (game.keys["ArrowUp"] && game.rightPaddle.y > 0) {
    game.rightPaddle.y -= game.paddleSpeed;
  }
  if (game.keys["ArrowDown"] && game.rightPaddle.y + game.paddleHeight < game.height) {
    game.rightPaddle.y += game.paddleSpeed;
  }
}

function updateBall() {
  game.ball.x += game.ball.speedX;
  game.ball.y += game.ball.speedY;

  if (game.ball.y - game.ballRadius <= 0 || game.ball.y + game.ballRadius >= game.height) {
    game.ball.speedY *= -1;
  }

  if (
    game.ball.x - game.ballRadius <= game.leftPaddle.x + game.paddleWidth &&
    game.ball.y >= game.leftPaddle.y &&
    game.ball.y <= game.leftPaddle.y + game.paddleHeight
  ) {
    game.ball.speedX *= -1;
    game.ball.x = game.leftPaddle.x + game.paddleWidth + game.ballRadius;
  }

  if (
    game.ball.x + game.ballRadius >= game.rightPaddle.x &&
    game.ball.y >= game.rightPaddle.y &&
    game.ball.y <= game.rightPaddle.y + game.paddleHeight
  ) {
    game.ball.speedX *= -1;
    game.ball.x = game.rightPaddle.x - game.ballRadius;
  }

  if (game.ball.x < 0) {
    game.rightPaddle.score += 1;
    resetBall();
  }

  if (game.ball.x > game.width) {
    game.leftPaddle.score += 1;
    resetBall();
  }
}

function drawBackground() {
  ctx.fillStyle = "#111";
  ctx.fillRect(0, 0, game.width, game.height);
  ctx.strokeStyle = "#fff";
  ctx.setLineDash([10, 10]);
  ctx.beginPath();
  ctx.moveTo(game.width / 2, 0);
  ctx.lineTo(game.width / 2, game.height);
  ctx.stroke();
  ctx.setLineDash([]);
}

function drawPaddles() {
  ctx.fillStyle = "#fff";
  ctx.fillRect(game.leftPaddle.x, game.leftPaddle.y, game.paddleWidth, game.paddleHeight);
  ctx.fillRect(game.rightPaddle.x, game.rightPaddle.y, game.paddleWidth, game.paddleHeight);
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(game.ball.x, game.ball.y, game.ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#ff5f5f";
  ctx.fill();
}

function drawScores() {
  ctx.fillStyle = "#fff";
  ctx.font = "32px Arial";
  ctx.fillText(game.leftPaddle.score, game.width / 2 - 50, 40);
  ctx.fillText(game.rightPaddle.score, game.width / 2 + 20, 40);
}

function update() {
  updatePaddles();
  updateBall();
}

function draw() {
  drawBackground();
  drawPaddles();
  drawBall();
  drawScores();
}

function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

window.addEventListener("keydown", (event) => {
  game.keys[event.key] = true;
});

window.addEventListener("keyup", (event) => {
  game.keys[event.key] = false;
});

loop();
