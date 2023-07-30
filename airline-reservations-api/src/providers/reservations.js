export default class ReservationsProvider {
  static verifyApiKey(apiKey) {
    if (apiKey === process.env.API_KEY) {
      return {
        apiKey: apiKey,
        isApiKeyVerified: true
      };
    }
    throw new Error('FORBIDDEN');
  }
}
