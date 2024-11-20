import googleapis from 'googleapis';
const {
  google: { drive, auth },
} = googleapis;

import Token from '../models/token.js';

export default async function getDrive() {
  const token = await Token.findOne({ name: process.env.DOCUMENT_NAME });

  const clientId = process.env.CLIENT_ID;
  const clientSecret = process.env.CLIENT_SECRET;
  const redirectUri = process.env.REDIRECT_URI;
  const refreshToken = !token ? null : token.refreshToken;

  const oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUri);
  oauth2Client.setCredentials({ refresh_token: refreshToken });

  return drive({
    version: 'v3',
    auth: oauth2Client,
  });
}

// async function deleteFile() {
//   try {
//     const response = await drive.files.delete({
//       fileId: '1x2adyBbXZDAMceKnazK2h0th1D1D9OY-',
//     });
//     console.log(response.data, response.status);
//   } catch (error) {
//     console.log(error);
//   }
// }
