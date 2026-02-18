import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ 
  ? TestIds.ADAPTIVE_BANNER 
  : 'ca-app-pub-8146028463844689/8824397561';

export default function AdBanner() {
  return (
    <View style={styles.container}>
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: false,
                keywords: ['religion', 'gospel', 'music', 'church', 'christian', 'hymns', 'eglise', 'bible', 'evangelical'],
        }}
        onAdLoaded={() => {
          console.log('Bannière AdMob chargée avec succès');
        }}
        onAdFailedToLoad={(error) => {
          console.error('Erreur de chargement AdMob:', error);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0, 
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingVertical: 4, 
    zIndex: 1000, 
  },
});