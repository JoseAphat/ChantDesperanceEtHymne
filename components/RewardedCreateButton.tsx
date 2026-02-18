import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Alert, StyleProp, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { 
  RewardedAd, 
  TestIds,
  RewardedAdEventType
} from 'react-native-google-mobile-ads';

type RewardedCreateButtonProps = {
  onAdWatched: () => void;
  style?: StyleProp<ViewStyle>;
};

const adUnitId = __DEV__ ? TestIds.REWARDED : 'ca-app-pub-8146028463844689/4765279772';

export default function RewardedCreateButton({ onAdWatched, style }: RewardedCreateButtonProps) {
  const [loaded, setLoaded] = useState(false);
  const [rewarded, setRewarded] = useState<RewardedAd | null>(null);
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    const rewardedAd = RewardedAd.createForAdRequest(adUnitId, {
      requestNonPersonalizedAdsOnly: false,
            keywords: ['religion', 'gospel', 'music', 'church', 'christian', 'hymns', 'eglise', 'bible', 'evangelical'],

    });

    const unsubscribeLoaded = rewardedAd.addAdEventListener(
      RewardedAdEventType.LOADED,
      () => {
        console.log('✅ Rewarded Ad chargée (création)');
        setLoaded(true);
        setIsShowing(false);
      }
    );

    const unsubscribeEarned = rewardedAd.addAdEventListener(
      RewardedAdEventType.EARNED_REWARD,
      (reward) => {
        console.log('🎁 Récompense reçue (création):', reward);
        setIsShowing(false);
        setLoaded(false);
        
        // Recharger une nouvelle annonce pour la prochaine fois
        setTimeout(() => {
          rewardedAd.load();
        }, 1000);
        
        // Ouvrir le modal de création
        onAdWatched();
      }
    );

    rewardedAd.load();
    setRewarded(rewardedAd);

    return () => {
      unsubscribeLoaded();
      unsubscribeEarned();
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
      onAdWatched(); // fallback
    }
  } else {
    // Annonce pas prête → on déclenche l'action quand même
    onAdWatched();
  }
};

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={style}
      disabled={isShowing}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
    >
      <Ionicons name="add-circle" size={24} color="#FFFFFF" />
    </TouchableOpacity>
  );
}