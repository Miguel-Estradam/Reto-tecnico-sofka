import { getScores } from "./firebase.js";

async function mapScores() {
  console.log("hola?");
  const scores = await getScores();
  let response = "";
  for (let score of scores) {
    response += `<tr>
      <td>${score.nombre}</td>
      <td>${score.premio}</td>
    </tr>`;
  }
  const ganadores = document.getElementById("ganadores");
  console.log(response);
  ganadores.innerHTML = response;
}

mapScores();
