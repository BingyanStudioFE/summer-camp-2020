document.addEventListener('DOMContentLoaded',()=>{
    const grid=document.querySelector('.grid');
    let squares=Array.from(document.querySelectorAll('.grid div'));
    const scoreDisplay=document.querySelector('#score');
    const startBtn=document.querySelector('#start-button');
    const width=10;
    let nextRandom = 0;
    let timeId;
    let score = 0;
    const colors = [
        'orange',
        'red',
        'purple',
        'green',
        'blue'
    ]

    //The Tetrominoes
    const lTetromino = [
        [1, width+1, width*2+1, 2],
        [width, width+1, width+2, width*2+2],
        [1, width+1, width*2+1, width*2],
        [width, width*2, width*2+1, width*2+2],
    ]
    
    const zTetromino = [
        [0,width,width+1,width*2+1],
        [width+1, width+2,width*2,width*2+1],
        [0,width,width+1,width*2+1],
        [width+1, width+2,width*2,width*2+1]
      ]
    
    const tTetromino = [
        [1,width,width+1,width+2],
        [1,width+1,width+2,width*2+1],
        [width,width+1,width+2,width*2+1],
        [1,width,width+1,width*2+1]
      ]
    
    const oTetromino = [
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1]
      ]
    
    const iTetromino = [
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3],
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3]
      ]

    const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino];

    let currentPosition = 4;
    let currentRotation = 0;

    //randomly select a Tetromino
    let random = Math.floor(Math.random()*theTetrominoes.length);
    let current = theTetrominoes[random][currentRotation];

    //draw the Tetromino
    function draw(){
          current.forEach(index => {
              squares[currentPosition + index].classList.add('tetromino');
              squares[currentPosition + index].style.backgroundColor = colors[random];
          })
    }
    
    //undraw the Tetromino
    function undraw(){
        current.forEach(index => {
            squares[currentPosition + index].classList.remove('tetromino');
            squares[currentPosition + index].style.backgroundColor = '';
        })
    }

    //make the tetromino move down every second
    //timeId = setInterval(moveDown, 500);

    //assign functions to keyCodes
    function control(event){
        if(event.keyCode === 37){
            moveLeft();
        }else if (event.keyCode === 38){
            rotate();
        }else if (event.keyCode === 39){
            moveRight();
        }else if (event.keyCode === 40){
            moveDown();
        }
    }
    document.addEventListener('keyup',control)

    //move down function
    function moveDown(){
        undraw();
        currentPosition += width;
        draw();
        freeze();
    }

    //freeze the tetromino when it hits the bottom
    function freeze(){
        if(current.some(index => squares[currentPosition + index + width].classList.contains('taken'))){
            current.forEach(index => squares[currentPosition + index].classList.add('taken'));
            //start a new teromino falling
            random = nextRandom;
            nextRandom = Math.floor(Math.random()*theTetrominoes.length);
            current = theTetrominoes[random][currentRotation];
            currentPosition = 4;
            draw();
            displayShape();
            addScore();
            gameOver();
        }
    }

    //move the tetromino left, unless it's at the edge or there's a blockage
    function moveLeft(){
        undraw();
        const isAtLeftEdge = current.some(index => (currentPosition + index)%width === 0)

        if(!isAtLeftEdge) currentPosition -= 1;
        if(current.some(index => squares[currentPosition + index].classList.contains('taken'))){
            currentPosition += 1;
        }
        draw();   
    }

    //move the tetromino right, same condition as uppon
    function moveRight(){
        undraw();
        const isAtRightEdge = current.some(index => (currentPosition + index)%width === width - 1)

        if(!isAtRightEdge) currentPosition += 1;
        if(current.some(index => squares[currentPosition + index].classList.contains('taken'))){
            currentPosition -= 1;
        }
        draw();
    }

    //rotate the tetromino
    function rotate(){
        undraw();
        currentRotation++;
        if(currentRotation === current.length){
            currentRotation = 0;
        }
        current = theTetrominoes[random][currentRotation];
        draw();
    }

    //show up-next tetromino in mini-grid display
    const displaySquares = document.querySelectorAll('.mini-grid div');
    const displayWidth = 4;
    const displayIndex = 0;

    //the Tetromino without rotation
    const upNextTetrominoes =[
        [1, displayWidth+1, displayWidth*2+1 ,2], //lTetromino
        [0, displayWidth, displayWidth+1, displayWidth*2+1], //zTetromino
        [1, displayWidth, displayWidth+1, displayWidth+2], //tTetromino
        [0, 1, displayWidth, displayWidth+1], //oTetromino
        [1, displayWidth+1, displayWidth*2+1, displayWidth*3+1] //iTetromino
    ]

    //display the shape in the mini-grid display
    function displayShape(){
        //remove any trace of a tetromino form the entire grid
        displaySquares.forEach(square=>{
            square.classList.remove('tetromino');
            square.style.backgroundColor = '';
        })
        upNextTetrominoes[nextRandom].forEach(index => {
            displaySquares[displayIndex + index].classList.add('tetromino');
            displaySquares[displayIndex + index].style.backgroundColor = colors[nextRandom];
        })
    }

    //add functionality to the button
    startBtn.addEventListener('click',() => {
        if(timeId){
            clearInterval(timeId);
            timeId = null;
        } else {
            draw();
            timeId = setInterval(moveDown, 1000);
            nextRandom = Math.floor(Math.random()*theTetrominoes.length);
            displayShape();
        } 
    })

    //add score
    function addScore(){
        for (let i = 0; i<199 ; i += width){
            const row = [i, i+1, i+2, i+3, i+4, i+5, i+6, i+7, i+8, i+9];

            if(row.every(index => squares[index].classList.contains('taken'))){
                score +=100;
                scoreDisplay.innerHTML = score;
                row.forEach(index=>{
                    squares[index].classList.remove('taken');
                    squares[index].classList.remove('tetromino');
                    squares[index].style.backgroundColor='';
                })
                const squaresRemoved = squares.splice(i,width);
                squares = squaresRemoved.concat(squares);
                squares.forEach(cell => grid.appendChild(cell));
            }
        }
    }

    //gameover
    function gameOver(){
        if(current.some(index => squares[currentPosition + index].classList.contains('taken'))){
            scoreDisplay.innerHTML = 'end';
            clearInterval(timeId);
        }
    }
})