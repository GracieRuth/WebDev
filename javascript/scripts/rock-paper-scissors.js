let score=JSON.parse(localStorage.getItem('score')) ||{wins:0,losses:0,ties:0};
            
            updateScore();

            function playGame(playerMove){
                const compmove=pickCompMove();
                let result=' ';
                if (playerMove ==='rock'){
                    if(compmove==='rock'){
                        result='Tie'
                    }
                        else if(compmove==='paper'){
                        result='You lose'
                    }
                        else if(compmove==='scissors'){
                        result='You win'
                    }
                }
                
                else if (playerMove ==='paper'){
                    if(compmove==='paper'){
                        result='Tie'
                    }
                        else if(compmove==='scissors'){
                        result='You lose'
                    }
                        else if(compmove==='rock'){
                        result='You win'
                    }
                }

                else if (playerMove ==='scissors'){
                    if(compmove==='scissors'){
                        result='Tie'
                    }
                        else if(compmove==='rock'){
                        result='You lose'
                    }
                        else if(compmove==='paper'){
                        result='You win'
                    }
                }
                if(result==='You win'){
                    score.wins+=1;
                }
                else if(result==='You lose'){
                    score.losses+=1;
                }
                else if(result==='Tie'){
                    score.ties+=1;
                }
                localStorage.setItem('score',JSON.stringify(score));
                updateScore()

                document.querySelector('.js-result').innerHTML=result;
                
                document.querySelector('.js-move').innerHTML=`You
            <img class="move-icon" src="images/${playerMove}-emoji.png">
            <img class="move-icon" src="images/${compmove}-emoji.png">
            Computer `;

            }

            function updateScore(){
                document.querySelector('.js-score')
                .innerHTML=`wins:${score.wins},losses:${score.losses},ties:${score.ties}`;
            }

            function pickCompMove(){
                const n1=Math.random();
                let compmove= ' ';

                if(n1>=0 && n1<1/3){
                    compmove='rock';
                }
                else if(n1>=1/3 && n1<2/3){
                    compmove='paper';
                }
                else if(n1>=2/3 && n1<1){
                    compmove='scissors';
                }
                return compmove;
            }
            