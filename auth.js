async function iniciarCamara() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    const videoElement = document.querySelector('video'); // Asegúrate de tener una etiqueta <video> en tu HTML
    if (videoElement) {
      videoElement.srcObject = stream;
    }
  } catch (error) {
    console.error("No se pudo acceder a la cámara:", error);
  }
}

iniciarCamara();
