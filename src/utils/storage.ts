import { MMKV } from "react-native-mmkv";

export const storage = new MMKV();

export type Role = "requester" | "runner";

const ONBOARDING_KEY = "hasSeenOnboarding";

export const hasSeenOnboarding = (): boolean => {
  return storage.getBoolean(ONBOARDING_KEY) === true;
};

export const clearOnboardingFlag = (): void => {
  storage.delete(ONBOARDING_KEY);
};

export const getRole = () => {
  return storage.getString("role");
};

export const setAccessToken = (token: string) => {
  storage.set("accessToken", token);
};

export const getAccessToken = () => {
  return storage.getString("accessToken");
};
