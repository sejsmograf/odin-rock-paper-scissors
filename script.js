const weapons = document.querySelectorAll(".weapons img");

const elements = ['water','fire','tree'];

function getComputerChoice(){
    const randomIndex = Math.floor(Math.random() * 3);
    return elements[randomIndex];
}

function playRound(playerChoice, computerChoice = getComputerChoice()){
    if(playerChoice == computerChoice){return "it's a draw";}
    else if(playerChoice =='water'){
        if(computerChoice=='fire'){ return "you've won";}
        else{ return "you've lost";}
    }
    else if(playerChoice=='fire'){
        if(computerChoice=='water'){ return "you've lost";}
        else{return "you've lost";}
    }
    else{
        if(computerChoice=='water'){return "you've won";}
        else{return "you've lost";}
    }
}


weapons.forEach(
    weapon => {
        weapon.addEventListener('click', () => console.log(playRound(weapon.getAttribute('src').slice(0,-4))));
    }
)