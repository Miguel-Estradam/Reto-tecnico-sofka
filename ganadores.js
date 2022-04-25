import { getScores } from "./firebase.js";

async function mapScores() {
  const scores = await getScores();
  let response = "";
  for (let key in scores) {
    response += `<tr>
      <td>${parseInt(key)+1}</td>
      <td>${scores[key].nombre}</td>
      <td>${scores[key].premio}</td>
    </tr>`;
  }
  const ganadores = document.getElementById("ganadores");
  ganadores.innerHTML = response;
}

mapScores();
