const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const botonCopiar = document.querySelector(".copiar");

const mappings = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function encrypt(stringToEncrypt) {
  const lowerCaseString = stringToEncrypt.toLowerCase();
  let encryptedString = lowerCaseString;

  for (const [key, value] of Object.entries(mappings)) {
    encryptedString = encryptedString.replaceAll(key, value);
  }

  return encryptedString;
}

function decrypt(stringToDecrypt) {
  const lowerCaseString = stringToDecrypt.toLowerCase();
  let decryptedString = lowerCaseString;

  for (const [key, value] of Object.entries(mappings)) {
    decryptedString = decryptedString.replaceAll(value, key);
  }

  return decryptedString;
}

function btnEncriptar() {
  const textoEncriptado = encrypt(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
  mensaje.style.backgroundImage = "none";
}

function btnDesencriptar() {
  const textoDesencriptado = decrypt(textArea.value);
  mensaje.value = textoDesencriptado;
  textArea.value = "";
  mensaje.style.backgroundImage = "none";
}

function copiarTexto() {
  const textoCopiar = mensaje.value;
  navigator.clipboard.writeText(textoCopiar);
}

function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');
}

function handleResize() {
  
}

window.addEventListener("resize", handleResize);

handleResize();

