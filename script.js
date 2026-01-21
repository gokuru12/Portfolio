document.querySelectorAll('.project').forEach(project => {

  const mediaContainer = project.querySelector('.media-container');
  const thumbnails = project.querySelectorAll('.thumbnails img');

  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {

      // Quitar active de todas
      thumbnails.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');

      // Limpiar contenido actual
      mediaContainer.innerHTML = '';

      const type = thumb.dataset.type;
      const src = thumb.dataset.src;

      if (type === 'video') {
        const iframe = document.createElement('iframe');
        iframe.src = src;
        iframe.allowFullscreen = true;
        iframe.frameBorder = 0;
        mediaContainer.appendChild(iframe);
      }

      if (type === 'image') {
        const img = document.createElement('img');
        img.src = src;
        mediaContainer.appendChild(img);
      }

    });
  });

});

document.querySelectorAll('.toggle-summary').forEach(button => {
  button.addEventListener('click', () => {
    const summary = button.nextElementSibling;
    const isOpen = summary.style.display === 'block';

    summary.style.display = isOpen ? 'none' : 'block';
    button.textContent = isOpen ? '▼ Resumen del proyecto' : '▲ Ocultar resumen';
  });
});
