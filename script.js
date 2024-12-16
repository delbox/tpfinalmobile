const rankingList = document.getElementById("ranking-list");
const shuffleButton = document.getElementById("shuffleBtn");
const generateImgButton = document.getElementById("createImgBtn");
const generatedImgContainer = document.getElementById("imageContainer");
const deleteImgButton = document.getElementById("deleteImgBtn");

const songs = [
  {
    title: "Macao - Caluña Radio Remix",
    artist: "Pato's Groove, Calussa",
    img: "images/song1.jpg",
  },
  {
    title: "Beso (Fruta Fresca)",
    artist: "Wakyin, Carlos Vives",
    img: "images/song2.jpg",
  },
  {
    title: "Respira - Extended Version",
    artist: "Steve Andreas, Vitto Von Don",
    img: "images/song3.jpeg",
  },
  { title: "El Tiempo", artist: "Manybeat", img: "images/song4.jpg" },
  { title: "The Way Back", artist: "Solomun", img: "images/song5.jpeg" },
];

// Función para mostrar el ranking
function displayRanking() {
  rankingList.innerHTML = "";
  songs.forEach((song, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <img src="${song.img}" alt="${song.title}">
      <div class="song-details">
        <div class="song-title">${index + 1}. ${song.title}</div>
        <div class="song-artist">${song.artist}</div>
      </div>
    `;
    rankingList.appendChild(li);
  });
}

// Función para mezclar el ranking
function shuffleRanking() {
  songs.sort(() => Math.random() - 0.5);
  displayRanking();
}

// Función para crear una imagen
function createImage() {
  const container = document.getElementById("ranking-list");
  html2canvas(container).then((canvas) => {
    const imageContainer = document.getElementById("imageContainer");
    imageContainer.innerHTML = ""; // Limpiar imagen previa
    imageContainer.appendChild(canvas); // Mostrar la nueva imagen

    // Mostrar el botón de eliminar imagen
    deleteImgButton.style.display = "inline-block";
  });
}

// Lógica para eliminar la imagen
deleteImgButton.addEventListener("click", () => {
  const imageContainer = document.getElementById("imageContainer");
  imageContainer.innerHTML = ""; // Limpiar la imagen generada

  // Ocultar el botón de eliminar imagen
  deleteImgButton.style.display = "none";
});

// Eventos para los botones
shuffleButton.addEventListener("click", shuffleRanking);
generateImgButton.addEventListener("click", createImage);

// Mostrar el ranking al cargar la página
displayRanking();
