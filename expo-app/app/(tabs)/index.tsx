import React, { useEffect } from 'react';
import { WebView } from 'react-native-webview';
import { SafeAreaView, Platform, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import messaging from '@react-native-firebase/messaging';

export default function WebAppScreen() {
  useEffect(() => {
    const requestPermission = async () => {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        console.log('✅ FCM Permission status:', authStatus);
        getFCMToken();
      }
    };

    const getFCMToken = async () => {
      const token = await messaging().getToken();
      console.log('📲 FCM Token:', token);
      // ✅ You can send this token to your backend to push notifications
    };

    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('📩 New FCM Notification!', JSON.stringify(remoteMessage.notification));
    });

    requestPermission();

    return () => unsubscribe(); // Clean up on unmount
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: Platform.OS === 'android' ? 30 : 0 }}>
      <StatusBar style="auto" />
      <WebView
        source={{ uri: 'http://192.168.1.2:3000' }} 
        style={{ flex: 1 }}
        javaScriptEnabled
        domStorageEnabled
        startInLoadingState
      />
    </SafeAreaView>
  );
}
