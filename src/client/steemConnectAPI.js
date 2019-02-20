import sc2 from 'sc2-sdk';

const api = sc2.Initialize({
  app: process.env.STEEMCONNECT_CLIENT_ID,
  baseURL: process.env.STEEMCONNECT_HOST,
  callbackURL: 'http://localhost:3000/callback', // process.env.STEEMCONNECT_REDIRECT_URL ,
});

export default api;
