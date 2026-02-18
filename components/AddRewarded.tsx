import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { 
  RewardedAd, 
  TestIds,
  RewardedAdEventType
} from 'react-native-google-mobile-ads';

type RewardedTouchableProps = {
  serviceId: string | number;
  style?: StyleProp<ViewStyle>;
};

const adUnitId = __DEV__ ? TestIds.REWARDED : 'ca-app-pub-8146028463844689/4765279772';

export default function AddRewarded({ serviceId, style }: RewardedTouchableProps) {
  const router = useRouter();
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
        console.log('✅ Rewarded Ad chargée');
        setLoaded(true);
        setIsShowing(false);
      }
    );

    const unsubscribeEarned = rewardedAd.addAdEventListener(
      RewardedAdEventType.EARNED_REWARD,
      (reward) => {
        console.log('🎁 Récompense reçue:', reward);
        setIsShowing(false);
        setLoaded(false);
        setTimeout(() => {
          rewardedAd.load();
        }, 1000);
        navigateToTarget();
      }
    );

    rewardedAd.load();
    setRewarded(rewardedAd);

    return () => {
      unsubscribeLoaded();
      unsubscribeEarned();
    };
  }, [serviceId]);

  const navigateToTarget = () => {
    router.push({ pathname: '/ServiceDetails', params: { serviceId } });
  };

  const handlePress = () => {
    if (isShowing) return;

    if (loaded && rewarded) {
      setIsShowing(true);
      try {
        rewarded.show();
      } catch (error) {
        console.error('❌ Erreur lors de l\'affichage:', error);
        setIsShowing(false);
        navigateToTarget();
      }
    } else {
      navigateToTarget();
    }
  };

  return (
    <TouchableOpacity 
      onPress={handlePress} 
      style={style}
      disabled={isShowing}
    >
      <Ionicons name="open-outline" size={18} color="#FFFFFF" />
    </TouchableOpacity>
  );
}