document.querySelector(".playBtn").onclick = function(){
    const grid = document.querySelector(".grid");
    this.classList.add('none');


    document.querySelector('.overlay').style.background = `white`;
    document.querySelector('.title').style.color = `black`;


    document.querySelector('.countDown').classList.remove('none');
    document.querySelector(".scoreBoard").classList.remove('none');




    var tableSq = document.querySelector('.tableSq');

    function createBoard(){
        for(i = 0; i < 9; i++){
            var card = document.createElement('div');
            card.setAttribute('class', 'square');
            card.setAttribute('id', i);
            tableSq.appendChild(card);
        };
    };

    createBoard();


    //CountDown & Score
    var countNum = 60;
    function countDown(){
        countNum = countNum - 1;
        document.querySelector('.count_num').textContent = countNum;
    };


    // Count Down
    var seconds  = 1000;
    while(seconds != 61000){
        setTimeout(countDown, seconds);
        setTimeout(randomImage, seconds);
        seconds = seconds + 1000;
    };

    


    var score = 0;
    function randomImage(){
        var index = Math.floor(Math.random() * 8);
        var whackImg = document.createElement('img');
        whackImg.setAttribute('class', 'whack');
        whackImg.src = `whack.png`;
        document.getElementById(index).appendChild(whackImg);

        whackImg.addEventListener('click', function(){
            score = score + 1;
            console.log(score);
            document.querySelector('.score_num').textContent = score;
        });

        function blankImg(){
            whackImg.remove();
        };

        setTimeout(blankImg,750);
    };











    


};








