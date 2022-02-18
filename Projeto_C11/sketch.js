var piso, pisoImg;
var menino, meninoImg;
var esquerda, direita;

function preload(){

  pisoImg = loadImage("path.png");
  meninoImg = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Fundo em movimento
  piso=createSprite(200,200);
  piso.addImage(pisoImg);
//dar velocidade ao chão
  piso.velocityY= 10;
// mudar o tamanho do chão
  piso.scale = 1.2;

//criando menino que corre
  menino=createSprite(180, 340, 30, 30);
// mudar o tamanho do chão
  menino.scale = 1.0;
// dar uma animação ao menino
  menino.addAnimation("JakeRunning", meninoImg);
  
// crie Boundary (Limite) esquerdo
  esquerda=createSprite(0,0,100,800);
//criando borda esquerda invisivel
  esquerda.visible = false;
//crie Boundary direito (limite)
  direita=createSprite(400,0,100,800);
// criando borda invisivel direita
  direita.visible = false;
}

function draw() {
  background(0);
  
  piso.velocityY = 10;
  // menino se movendo no eixe X com o mouse
  menino.x = World.mouseX;
  //criando as bordas
  edges = createEdgeSprites();
  //fazendo o menino colidir com as bordas no indice 3
  menino.collide(edges);
  // fazendo o menino colidir com a borda invisivel esquerda

  // fazendo o menino colidir com a borda invisivel direita

  
  //código para reiniciar o fundo
  if(piso.y > 400){
    piso.y=height/2;
 }
  
  drawSprites();
}
