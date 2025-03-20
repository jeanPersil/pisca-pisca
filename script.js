import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
import {
  get,
  getDatabase,
  ref,
  set,
  onValue,
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCELZUB4BzaezA4rZiYMERuQ6DF40ULL_A",
  authDomain: "ledwoki.firebaseapp.com",
  databaseURL: "https://ledwoki-default-rtdb.firebaseio.com",
  projectId: "ledwoki",
  storageBucket: "ledwoki.firebasestorage.app",
  messagingSenderId: "272504469517",
  appId: "1:272504469517:web:f2091f23bf7c564cbdbd44",
  measurementId: "G-S8GBZ6SDZ1",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

const ledRef = ref(database, "led/state");
const botao = document.getElementById("botao");

function atualizarBotao(snapshot) {
  try {
    if (snapshot.exists()) {
      const estado = snapshot.val();
      botao.textContent = estado === 0 ? "LIGAR" : "DESLIGAR";
      botao.style.backgroundColor = estado === 0 ? "Green" : "Desligar";
    }
  } catch (e) {
    console.error("Erro ao acessar dados do Firebase:", e);
  }
}
onValue(ledRef, (snapshot) => {
  atualizarBotao(snapshot);
});

botao.onclick = async () => {
  try {
    const snapshot = await get(ledRef);

    if (snapshot.val() === 0) {
      set(ledRef, 1);
      botao.style.backgroundColor = "Red";
    } else {
      set(ledRef, 0);
      botao.style.backgroundColor = "Green";
    }
  } catch (error) {
    console.error("Erro ao alterar estado do LED:", error);
  }
};
