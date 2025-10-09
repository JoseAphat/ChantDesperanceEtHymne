import * as ScreenOrientation from 'expo-screen-orientation';
import { useEffect } from 'react';
import { Dimensions, Platform } from 'react-native';

export const useScreenOrientation = () => {
  useEffect(() => {
    const lockOrientation = async () => {
      try {
        const { width } = Dimensions.get('window');
        
        // Verrouiller en portrait seulement sur les petits écrans (< 600dp)
        // 600dp est le breakpoint standard Android pour les tablettes
        if (Platform.OS === 'android' && width < 600) {
          await ScreenOrientation.lockAsync(
            ScreenOrientation.OrientationLock.PORTRAIT_UP
          );
        } else {
          // Permettre toutes les orientations sur tablettes/grands écrans
          await ScreenOrientation.unlockAsync();
        }
      } catch (error) {
        console.error('Erreur lors du verrouillage de l\'orientation:', error);
      }
    };

    lockOrientation();

    // Nettoyer lors du démontage
    return () => {
      ScreenOrientation.unlockAsync();
    };
  }, []);
};