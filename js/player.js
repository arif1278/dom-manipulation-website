const playerNameList = [];

//  showPlayer Function
function showPlayer() {
    const showPlayName = document.getElementById('selection');
    showPlayName.innerText = '';
    for (let i = 0; i < playerNameList.length; i++) {
        const tr = document.createElement("li");
        li.innerHTML = `<ol>${i + 1}.</ol>
        <ol>${playerNameList[i]}</ol>`;
        if (i < 5) {
            showPlayName.appendChild(li);
        }
        else {
            alert("Sorry!! You can not add more than 5 players");
            break;
        }

    }
}


// player selection

function selectPlayer(selected) {
    const playerName = selected.parentNode.children[0].innerText;
    if (playerNameList.length < 5) {
        playerNameList.push(playerName);
        selected.disabled = true;
    }
    else {
        alert("sorry!! You can not add more than 5 players");
    }
    showPlayer();
}
// +++++++++Player Name show Part++++++++++ //
document.getElementById('player-cost-btn').addEventListener('click', function () {
    const totalPlayer = playerNameList.length;
    let everyPlayer = getInputValueById('player');
    if (playerNameList.length < 6 && (isNaN(everyPlayer) === false)) {
        const totalExpense = everyPlayer * totalPlayer;
        document.getElementById('expenses').innerText = totalExpense;
    }
    else if (everyPlayer < 1) {
        alert('please select player before');
    }
    else {
        alert('please select player before');
    }

})