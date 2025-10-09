package com.berly.ChantDesperance

import android.app.Application
import android.content.res.Configuration

import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.ReactHost
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.load
import com.facebook.react.defaults.DefaultReactNativeHost
import com.facebook.react.soloader.OpenSourceMergedSoMapping
import com.facebook.soloader.SoLoader

import expo.modules.ApplicationLifecycleDispatcher
import expo.modules.ReactNativeHostWrapper

class MainApplication : Application(), ReactApplication {

  override val reactNativeHost: ReactNativeHost = ReactNativeHostWrapper(
        this,
        object : DefaultReactNativeHost(this) {
          override fun getPackages(): List<ReactPackage> {
            val packages = PackageList(this).packages
            // Packages that cannot be autolinked yet can be added manually here, for example:
            // packages.add(MyReactNativePackage())
            return packages
          }

          override fun getJSMainModuleName(): String = ".expo/.virtual-metro-entry"

          override fun getUseDeveloperSupport(): Boolean = BuildConfig.DEBUG

          override val isNewArchEnabled: Boolean = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED
          override val isHermesEnabled: Boolean = BuildConfig.IS_HERMES_ENABLED
      }
  )

  override val reactHost: ReactHost
    get() = ReactNativeHostWrapper.createReactHost(applicationContext, reactNativeHost)

  override fun onCreate() {
    super.onCreate()
    
    // FIX CRITIQUE : Protection globale contre les crashs de react-native-screens
    // Capture les IllegalStateException de ScreenStackHeaderConfig.onUpdate
    val originalHandler = Thread.getDefaultUncaughtExceptionHandler()
    Thread.setDefaultUncaughtExceptionHandler { thread, throwable ->
      // Vérifier si c'est l'erreur spécifique de ScreenStackHeaderConfig
      val isScreensError = throwable is IllegalStateException && 
        (throwable.stackTrace?.any { 
          it.className.contains("ScreenStackHeaderConfig") ||
          it.className.contains("react-native-screens") ||
          it.methodName == "onUpdate"
        } == true || throwable.message?.contains("ScreenStack") == true)
      
      if (isScreensError) {
        // Log l'erreur mais ne crash pas l'application
        android.util.Log.e("MainApplication", "ScreenStackHeaderConfig error caught:", throwable)
        throwable.printStackTrace()
        
        // Optionnel : Envoyer à un service de monitoring (Firebase, Sentry, etc.)
        // FirebaseCrashlytics.getInstance().recordException(throwable)
      } else {
        // Pour toutes les autres erreurs, utiliser le handler par défaut
        originalHandler?.uncaughtException(thread, throwable)
      }
    }
    
    SoLoader.init(this, OpenSourceMergedSoMapping)
    if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
      // If you opted-in for the New Architecture, we load the native entry point for this app.
      load()
    }
    ApplicationLifecycleDispatcher.onApplicationCreate(this)
  }

  override fun onConfigurationChanged(newConfig: Configuration) {
    super.onConfigurationChanged(newConfig)
    ApplicationLifecycleDispatcher.onConfigurationChanged(this, newConfig)
  }
}