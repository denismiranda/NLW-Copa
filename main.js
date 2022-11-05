function createGame(player1, hour, player2){
  return `
  <li>
    <img src="./assets/icon-${player1}.svg">
      <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg">
  </li>

`
}

let delay = -0.4;

function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
  <div class="card" style="animation-delay ${delay}s">
    <h2>${date} <span>${day}</span></h2>
    
      <ul>

        ${games}

      </ul> 
  </div>

`
}


document.querySelector('#cards').innerHTML = 
   
    createCard('21/11',"segunda",
      createGame("england", "10:00", "iran") +
      createGame("senegal", "13:00", "holanda") +
      createGame("EUA", "16:00", "gales")
    ) +

    createCard('24/11', "quinta", 
      createGame("suica", "07:00", "camaroes") +
      createGame("portugal", "13:00", "ghana") +
      createGame("brazil", "16:00", "serbia")
    ) +

    createCard('28/11', "segunda",
      createGame("ShCorea", "10:00", "camaroes") +
      createGame("brazil", "13:00", "suica") +
      createGame("portugal", "16:00", "uruguay")
    ) +

    createCard('02/12',"sexta",
      createGame("ShCorea", "12:00", "portugal") +
      createGame("serbia", "16:00", "suica") +
      createGame("camaroes", "16:00", "brazil")
    ) 

   
   
   