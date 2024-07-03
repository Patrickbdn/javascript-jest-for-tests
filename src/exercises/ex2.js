document.addEventListener('DOMContentLoaded', function() {
  const clickMeButton = document.getElementById('click-me-button');
  const messageElement = document.getElementById('message');

  console.log('DOM chargé');
  console.log('clickMeButton:', clickMeButton);
  console.log('messageElement:', messageElement);
  console.log("ex2.js est chargé");

  if (clickMeButton && messageElement) {
    function showMessage() {
      console.log('Bouton cliqué');
      messageElement.textContent = "oh mince alors !!! Le message a été modifié !";
    }

    clickMeButton.addEventListener('click', showMessage);
  } else {
    console.error("Un ou plusieurs éléments n'ont pas été trouvés.");
  }

  console.log('Le script est chargé et prêt à l\'utilisation.');
});
