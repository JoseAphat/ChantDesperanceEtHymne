import { ConfigContext, ExpoConfig } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "Chant d’Espérance & Hymne",
  slug: "ChantDesperance",

  version: "1.1.3",
  orientation: "default",
  icon: "./assets/images/ic_launcher_foreground.png",
  scheme: "chantdesperance",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  runtimeVersion: "1.1.3",

  updates: {
    fallbackToCacheTimeout: 0,
    url: "https://u.expo.dev/9ae3d36e-5ae4-40ac-9248-732109eb33e3",
  },

  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.berly.ChantDesperance",
    buildNumber: "1.1.3",
    infoPlist: {
      NSCameraUsageDescription: "Cette application peut avoir besoin d'accéder à la caméra.",
      NSMicrophoneUsageDescription: "Cette application peut avoir besoin d'accéder au microphone.",
      NSPhotoLibraryUsageDescription: "Cette application peut avoir besoin d'accéder à votre bibliothèque de photos.",
      UIBackgroundModes: ["audio"],
    },
    config: { usesNonExemptEncryption: false },
  },

  android: {
    package: "com.berly.ChantDesperance",
    versionCode: 34, 
    jsEngine: "hermes",
    allowBackup: true,
    userInterfaceStyle: "automatic",
    softwareKeyboardLayoutMode: "pan",
    adaptiveIcon: {
      foregroundImage: "./assets/images/ic_launcher_foreground.png",
      backgroundColor: "#03008E",
    },
    permissions: ["INTERNET", "WAKE_LOCK", "FOREGROUND_SERVICE"],
  },

  web: {
    bundler: "metro",
    output: "static",
    favicon: "./assets/images/ic_launcher_foreground.png",
  },

  plugins: [
    "expo-router",
    [
      "expo-splash-screen",
      {
        image: "./assets/images/ic_launcher_foreground.png",
        imageWidth: 200,
        resizeMode: "contain",
        backgroundColor: "#03008E",
      },
    ],
    "expo-web-browser",
    "expo-font",
    ["expo-screen-orientation", { initialOrientation: "DEFAULT" }],
    [
      "expo-build-properties",
      {
        android: {
          minSdkVersion: 24,
          targetSdkVersion: 34,
          abiFilters: ["armeabi-v7a", "arm64-v8a", "x86", "x86_64"],
        },
      },
    ],
  ],

  experiments: { typedRoutes: true },

  extra: {
    router: {},
    eas: { projectId: "9ae3d36e-5ae4-40ac-9248-732109eb33e3" },
  },
});
