import React, { useState, useEffect, ReactNode } from 'react';
import { TouchableOpacity, Alert, StyleProp, ViewStyle, ActivityIndicator, View } from 'react-native';
import { useRouter } from 'expo-router';
import { 
  RewardedAd, 
  TestIds,
  RewardedAdEventType,
  AdEventType
} from 'react-native-google-mobile-ads';

type RewardedButtonProps = {
  targetRoute: string | { pathname: string; params?: any };
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
  activeOpacity?: number;
  onAdWatched?: () => void;
  showLoadingIndicator?: boolean;
};

const adUnitId = __DEV__ ? TestIds.REWARDED : 'ca-app-pub-8146028463844689/4765279772';

export default function RewardedButton({ 
  targetRoute, 
  style, 
  children, 
  activeOpacity = 0.7,
  onAdWatched,
  showLoadingIndicator = true
}: RewardedButtonProps) {
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);
  const [rewarded, setRewarded] = useState<RewardedAd | null>(null);
  const [isShowing, setIsShowing] = useState(false);
  const [isLoadingAd, setIsLoadingAd] = useState(true);

  useEffect(() => {
    const rewardedAd = RewardedAd.createForAdRequest(adUnitId, {
      requestNonPersonalizedAdsOnly: false,
      keywords: ['religion', 'gospel', 'music', 'church', 'christian', 'hymns', 'eglise', 'bible', 'evangelical'],
    });

    const unsubscribeLoaded = rewardedAd.addAdEventListener(
      RewardedAdEventType.LOADED,
      () => {
        console.log('Rewarded Ad chargée');
        setLoaded(true);
        setIsShowing(false);
        setIsLoadingAd(false);
      }
    );

    const unsubscribeEarned = rewardedAd.addAdEventListener(
      RewardedAdEventType.EARNED_REWARD,
      (reward) => {
        console.log('Récompense reçue:', reward);
        setIsShowing(false);
        setLoaded(false);
        setIsLoadingAd(true);
        onAdWatched?.();
        
        // Recharger une nouvelle annonce pour la prochaine fois
        setTimeout(() => {
          rewardedAd.load();
        }, 1000);
        
        // Navigation selon le type de route
        if (typeof targetRoute === 'string') {
          router.push(targetRoute as any);
        } else {
          router.push(targetRoute as any);
        }
      }
    );

    // Gérer l'échec de chargement
    const unsubscribeError = rewardedAd.addAdEventListener(
      AdEventType.ERROR,
      (error) => {
        console.error('❌ Échec du chargement:', error);
        setIsLoadingAd(false);
        setLoaded(false);
        
        // Réessayer de charger après 5 secondes
        setTimeout(() => {
          console.log('🔄 Nouvelle tentative de chargement...');
          setIsLoadingAd(true);
          rewardedAd.load();
        }, 5000);
      }
    );

    // Gérer la fermeture de l'annonce
    const unsubscribeClosed = rewardedAd.addAdEventListener(
      AdEventType.CLOSED,
      () => {
        console.log('⚠️ Publicité fermée');
        setIsShowing(false);
        
        // Recharger une nouvelle annonce
        setIsLoadingAd(true);
        setTimeout(() => {
          rewardedAd.load();
        }, 1000);
      }
    );

    rewardedAd.load();
    setRewarded(rewardedAd);

    return () => {
      unsubscribeLoaded();
      unsubscribeEarned();
      unsubscribeError();
      unsubscribeClosed();
    };
  }, []);

  const handlePress = () => {
  if (isShowing) return;

  if (loaded && rewarded) {
    setIsShowing(true);
    try {
      rewarded.show();
    } catch (error) {
      console.error('❌ Erreur lors de l\'affichage:', error);
      setIsShowing(false);
      navigateToTarget(); // fallback
    }
  } else {
    // Annonce pas prête → on navigue quand même
    navigateToTarget();
  }
};
const navigateToTarget = () => {
  if (typeof targetRoute === 'string') {
    router.push(targetRoute as any);
  } else {
    router.push(targetRoute as any);
  }
};
  return (
   <TouchableOpacity 
    onPress={handlePress} 
    style={style}
    activeOpacity={activeOpacity}
    disabled={isShowing}
  >
    {children}
  </TouchableOpacity>
  );
}