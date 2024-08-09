const firebaseAppId = import.meta.env.VITE_APP_ID;
const firebaseApiKey = import.meta.env.VITE_API_KEY;
const firebaseMeasurementId = import.meta.env.VITE_MEASUREMENT_ID;
const firebaseMessagingSenderId = import.meta.env.VITE_MESSAGING_SEND_ID;

const emailTemplateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
const emailServiceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
const emailPublicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

export {
  firebaseApiKey,
  firebaseAppId,
  firebaseMeasurementId,
  firebaseMessagingSenderId,
  emailServiceId,
  emailTemplateId,
  emailPublicKey,
};
