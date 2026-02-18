const { withAndroidManifest } = require("@expo/config-plugins");

/** @type {import('@expo/config-plugins').ConfigPlugin} */
module.exports = function withOptionalFeaturesAndAdMob(config) {
  return withAndroidManifest(config, (cfg) => {
    const manifest = cfg.modResults.manifest;
    const app = manifest.application?.[0];

    /* =========================
       0️⃣ ANDROID TOOLS NAMESPACE
       ========================= */
    manifest.$ = manifest.$ || {};
    manifest.$["xmlns:tools"] =
      manifest.$["xmlns:tools"] || "http://schemas.android.com/tools";

    /* =========================
       1️⃣ FEATURES OPTIONNELLES
       ========================= */
    manifest["uses-feature"] = manifest["uses-feature"] || [];

    const makeOptional = (name) => {
      const f = manifest["uses-feature"].find(
        (x) => x.$["android:name"] === name
      );
      if (f) {
        f.$["android:required"] = "false";
      } else {
        manifest["uses-feature"].push({
          $: {
            "android:name": name,
            "android:required": "false",
          },
        });
      }
    };

    [
      "android.hardware.camera",
      "android.hardware.camera.autofocus",
      "android.hardware.nfc",
      "android.hardware.bluetooth_le",
    ].forEach(makeOptional);

    manifest["uses-feature"].forEach((x) => {
      if (x.$["android:glEsVersion"]) {
        x.$["android:required"] = "false";
      }
    });

    /* =========================
       2️⃣ ADMOB (MERGER SAFE)
       ========================= */
    if (app) {
      app["meta-data"] = app["meta-data"] || [];

      const ADMOB_APP_ID = "ca-app-pub-8146028463844689~3649361422";

      const existing = app["meta-data"].find(
        (m) =>
          m.$["android:name"] ===
          "com.google.android.gms.ads.APPLICATION_ID"
      );

      if (existing) {
        existing.$["android:value"] = ADMOB_APP_ID;
        existing.$["tools:replace"] = "android:value";
      } else {
        app["meta-data"].push({
          $: {
            "android:name":
              "com.google.android.gms.ads.APPLICATION_ID",
            "android:value": ADMOB_APP_ID,
            "tools:replace": "android:value",
          },
        });
      }
    }

    return cfg;
  });
};
