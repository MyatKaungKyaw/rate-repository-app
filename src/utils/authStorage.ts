import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStorage {
  private namespace: string;
  constructor(namespace = "auth") {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const token = await AsyncStorage.getItem(`${this.namespace}:accessToken`);
    return token ? token : "";
  }

  async setAccessToken(accessToken: string) {
    await AsyncStorage.setItem(`${this.namespace}:accessToken`, accessToken);
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:accessToken`);
  }
}

export default AuthStorage;
