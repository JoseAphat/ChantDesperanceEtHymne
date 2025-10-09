package com.berly.ChantDesperance

import expo.modules.splashscreen.SplashScreenManager
import android.content.Intent
import android.os.Build
import android.os.Bundle
import android.view.WindowManager
import androidx.core.view.WindowCompat
import androidx.core.view.WindowInsetsControllerCompat
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import expo.modules.ReactActivityDelegateWrapper

class MainActivity : ReactActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        // Configuration moderne pour edge-to-edge (Android 15+)
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.VANILLA_ICE_CREAM) {
            WindowCompat.setDecorFitsSystemWindows(window, false)
            val windowInsetsController = WindowCompat.getInsetsController(window, window.decorView)
            windowInsetsController?.systemBarsBehavior =
                WindowInsetsControllerCompat.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE
        } else {
            // Comportement legacy pour les versions antérieures
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
                window.setFlags(
                    WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS,
                    WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS
                )
            }
        }

        // Expo SplashScreen
        SplashScreenManager.registerOnActivity(this)

        super.onCreate(null)
    }

    /**
     * Nom du composant principal pour React Native
     */
    override fun getMainComponentName(): String = "main"

    /**
     * Delegate pour React Native (avec Fabric si activé)
     */
    override fun createReactActivityDelegate(): ReactActivityDelegate =
        ReactActivityDelegateWrapper(
            this,
            BuildConfig.IS_NEW_ARCHITECTURE_ENABLED,
            object : DefaultReactActivityDelegate(
                this,
                mainComponentName,
                fabricEnabled
            ) {}
        )

    /**
     * Protection NullPointerException lors du focus de la fenêtre
     */
    override fun onWindowFocusChanged(hasFocus: Boolean) {
        try {
            super.onWindowFocusChanged(hasFocus)
        } catch (e: Exception) {
            e.printStackTrace()
        }
    }

    /**
     * FIX CRITIQUE : Handle new intents pour éviter NullPointerException
     * C'est la cause principale du crash en production
     */
    override fun onNewIntent(intent: Intent?) {
        super.onNewIntent(intent)
        // IMPORTANT : Définir l'intent AVANT de le passer au delegate
        intent?.let { 
            setIntent(it)
            // Vérifier que le delegate existe avant de l'appeler
            try {
                reactActivityDelegate?.onNewIntent(it)
            } catch (e: NullPointerException) {
                // Log l'erreur mais ne crash pas l'app
                e.printStackTrace()
            } catch (e: Exception) {
                e.printStackTrace()
            }
        }
    }

    /**
     * Handle resume pour s'assurer du bon état
     */
    override fun onResume() {
        try {
            super.onResume()
        } catch (e: Exception) {
            e.printStackTrace()
            // Ne pas recreate() automatiquement car cela peut causer une boucle
            // Seulement logger l'erreur
        }
    }

    /**
     * Gestion du bouton retour pour Android S+
     */
    override fun invokeDefaultOnBackPressed() {
        try {
            if (Build.VERSION.SDK_INT <= Build.VERSION_CODES.R) {
                if (!moveTaskToBack(false)) {
                    super.invokeDefaultOnBackPressed()
                }
            } else {
                super.invokeDefaultOnBackPressed()
            }
        } catch (e: Exception) {
            e.printStackTrace()
            super.invokeDefaultOnBackPressed()
        }
    }
}