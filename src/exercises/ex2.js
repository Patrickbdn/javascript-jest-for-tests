  const clickMeButton = document.getElementById('click-me-button');
  const message = document.getElementById('message');


  
    function showMessage() {
      message.textContent = "oh mince alors !!! Le message a été modifié !"
    }

    clickMeButton.addEventListener('click', showMessage);
