var userscore=0;
var computerscore=0;
const userscorespan=document.getElementById("user-score");
const computerscorespan=document.getElementById('comp-score');
const result_p=document.querySelector(".result>p");
const scoreboard=document.querySelector(".scoreboard");
const rock_div=document.getElementById('r');
const paper_div=document.getElementById('p');
const scissors_div=document.getElementById('s');

function getComputerchoice()
{
   var choice=Math.floor(Math.random()*3);
   var choices=['r','p','s'];
return choices[choice];


}
function convert(letter)
{
    if(letter==="r")return "Rock";
    else if(letter==="s") return "Scissors";
    else return "Paper";
}
function win(userchoice,computerchoice)
{
    userscore++;
    userscorespan.innerHTML=userscore;
    computerscorespan.innerHTML=computerscore;
   
  result_p.innerHTML=`${convert(userchoice)} beats ${convert(computerchoice)} . You Win! `;
    document.getElementById(userchoice).classList.add('green-glow');
    setTimeout(function(){
        document.getElementById(userchoice).classList.remove('green-glow');
    },400);
}
function lose(userchoice,computerchoice)
{
    computerscore++;
    userscorespan.innerHTML=userscore;
    computerscorespan.innerHTML=computerscore;
   
  result_p.innerHTML=`${convert(computerchoice)} beats ${convert(userchoice)} . You Lose... `;
  document.getElementById(userchoice).classList.add('red-glow');
  setTimeout(function(){
    document.getElementById(userchoice).classList.remove('red-glow');
},400);
}
function draw(userchoice)
{
result_p.innerHTML="Its a draw!";
document.getElementById(userchoice).classList.add('grey-glow');
  setTimeout(function(){
    document.getElementById(userchoice).classList.remove('grey-glow');
},400);
}
function game(userchoice)
{
    var computerchoice=getComputerchoice();
    switch(userchoice+computerchoice)
    {
        case "pr":
        case "rs":
        case "sp":
            win(userchoice,computerchoice);

            break;
            case "pp":
            case "ss":
            case "rr":
           draw(userchoice);


            break;
            case "ps":
            case "rp":
            case "sr":
           lose(userchoice,computerchoice);
            break;
        
    }

}

function main()
{
    rock_div.addEventListener('click',function()
{
    game('r');

})
paper_div.addEventListener('click',function()
{
    game('p');
})
scissors_div.addEventListener('click',function()
{
    game('s');

})
}
main();