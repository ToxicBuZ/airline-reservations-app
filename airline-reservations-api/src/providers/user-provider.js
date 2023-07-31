export class UserProvider {
  static verifyApiKey(apiKey) {
    if (apiKey === process.env.API_KEY) {
      return {
        apiKey: apiKey
      };
    }
    return false;
  }
}
