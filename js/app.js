const dialog = document.getElementById("infoDialog");
const dialogTitle = document.getElementById("dialogTitle");
const dialogText = document.getElementById("dialogText");
const activityCount = document.getElementById("activityCount");
const countKey = "englishAprendoActivities";

function updateCount() {
  activityCount.textContent = localStorage.getItem(countKey) || "0";
}
function showMessage(title, message) {
  dialogTitle.textContent = title;
  dialogText.textContent = message;
  dialog.showModal();
}
document.querySelectorAll("[data-module]").forEach((button) => {
  button.addEventListener("click", () => {
    const modules = {
      spelling: ["Spelling Bee", "Aquí construiremos la práctica de escucha, escritura y deletreo."],
      pronunciation: ["Pronunciation Lab", "Aquí incorporaremos el micrófono, reconocimiento de voz y evaluación de pronunciación."],
      listening: ["Listening & Vocabulary", "Aquí desarrollarás comprensión auditiva y vocabulario."],
      tutor: ["English Tutor", "Aquí construiremos las prácticas guiadas y el tutor de inglés."]
    };
    const selected = modules[button.dataset.module];
    const nextCount = Number(localStorage.getItem(countKey) || 0) + 1;
    localStorage.setItem(countKey, String(nextCount));
    updateCount();
    showMessage(selected[0], selected[1]);
  });
});
document.getElementById("accountButton").addEventListener("click", () => {
  showMessage("Área de usuario", "El registro, inicio de sesión y recuperación de contraseña se habilitarán cuando conectemos el servicio seguro de autenticación. Esta versión todavía no crea cuentas.");
});
document.getElementById("closeDialog").addEventListener("click", () => dialog.close());
document.getElementById("dialogOk").addEventListener("click", () => dialog.close());
document.getElementById("year").textContent = new Date().getFullYear();
updateCount();

let installPrompt = null;
const installButton = document.getElementById("installButton");
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  installButton.hidden = false;
});
installButton.addEventListener("click", async () => {
  if (!installPrompt) return;
  installPrompt.prompt();
  await installPrompt.userChoice;
  installPrompt = null;
  installButton.hidden = true;
});

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js")
      .catch((error) => console.warn("No se pudo registrar el modo offline:", error));
  });
}
