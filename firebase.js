var firebaseConfig = {
  apiKey: "AIzaSyAENNlvCbGDyX462djRTygdGUbSWstHKOc",
  authDomain: "reto-tecnico-sofka.firebaseapp.com",
  databaseURL: "https://reto-tecnico-sofka-default-rtdb.firebaseio.com",
  projectId: "reto-tecnico-sofka",
  storageBucket: "reto-tecnico-sofka.appspot.com",
  messagingSenderId: "767759889280",
  appId: "1:767759889280:web:20421c24b4a92ed7bb4765",
};
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
 
//Envio de ganadores a fire base

const guardarGanador = (usuario) => {
  db.collection("Ganadores")
    .add({
      nombre: usuario.nombre,
      premio: usuario.premio,
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
};

export const Fire = (usuario, score) => {
  let nombre = usuario;
  let premio = score;

  const ganadores = {
    nombre,
    premio,
  };

  guardarGanador(ganadores);
};

//get para la base de datos
export const getScores = (usuario, score) => {
  const scores = [];
  return db
    .collection("Ganadores")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        scores.push(doc.data());
      });
      scores.sort((a, b) => b.premio - a.premio);
      return scores;
    });
};
