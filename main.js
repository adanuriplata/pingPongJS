//Definicion de clase Board en una funcion anonima
// Se toma como un Modelo
	(function(){
		 self.Board = function(width,height){
			this.width = width;
			this.height = height;
			this.playing = false;
			this.game_over = false;
			this.bars = []; 
			this.ball = null;
		}
//DEfinicion de metodo get por medio de prototype
//Se toma como un modelo
		self.Board.prototype = {
			get elements(){
				var elements = this.bars;
				elements.push(this.ball);
				return elements;
			}
		}
	})();
//Definiciond e la clase Bar por medio de una funcion anomima
	(function(){
		self.Bar = function(x,y,width,height,board){
			this.x = x;
			this.y = y;
			this.width = width;
			this.height = height;
			this.board = board;
			this.board.bars.push(this); //accedo al board al arreglo bar y le garego la misma barra
			this.kind = "rectangle";
		}

		self.Bar.prototype = {
			down: function(){

			},
			up: function(){

			}
		}
	})();

//Definicion de clase BoardView en una funcion anonima
//Se toma como una Vista
(function(){
	self.BoardView = function(canvas,board){
		this.canvas = canvas;
		this.canvas.width = board.width;
		this.canvas.height = board.height;
		this.board = board;
		this.ctx = canvas.getContext("2d");
console.log(canvas);
	}

	self.BoardView.prototype={
		draw: function(){
			for (var i = this.board.elements.length - 1; i >= 0; i--) {
				var el = this.board.elements[i];
				draw(this.ctx,el);
			}
		}
	}

//Funcion que dibuja la figura
	function draw(ctx,element){
		if (element !== null && element.hasOwnProperty("kind")) {
			switch(element.kind){
			case "rectangle":
			ctx.fillRect(element.x,element.y,element.width,element.height);
			break;
		}
		}
		
	}
})();

self.addEventListener("load",main);
//Funcion principal
//Se toma como un controlador
	function main(){
		//instancio de objeto Board
		var board = new Board(800,400);

		var bar = new Bar(20,100,40,100,board);
		var bar = new Bar(720,100,40,100,board);


		//obteniendo el canvas del html
		var canvas = document.getElementById('canvas');
		//instancia de objeto BoardView
		var board_View = new BoardView(canvas,board);

		board_View.draw();
}




