// pages/api/google-forms.js
import { google } from 'googleapis';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Configuración de autenticación OAuth2
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: process.env.GOOGLE_CLIENT_EMAIL,
          private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        },
        scopes: [
          'https://www.googleapis.com/auth/forms.body',
          'https://www.googleapis.com/auth/drive',
        ],
      });
      const { title } = req.body;

      const formsApp = google.forms({ version: 'v1', auth });
      const driveApp = google.drive({ version: 'v3', auth });

      // Crear el formulario
      const newForm = { info: { title: title } };
      const formResponse = await formsApp.forms.create({ requestBody: newForm });

      // ID del formulario
      const formId = formResponse.data.formId;

      // Compartir el formulario 
      await driveApp.permissions.create({
        fileId: formId,
        requestBody: {
          role: 'writer',
          type: 'user',
          emailAddress: process.env.USER_DRIVE_EMAIL,
        },
      });

      res.status(200).json({ id: formId, link: formResponse.data.responderUri });
    } catch (error) {
      console.error('Error al crear o compartir el formulario:', error);
      res.status(500).json({ mensaje: 'Error al crear o compartir el formulario', error });
    }
  }
  else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
