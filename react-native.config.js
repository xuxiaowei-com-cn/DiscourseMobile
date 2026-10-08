module.exports = {
  dependencies: {
    '@react-native-firebase/app': {
      platforms: {
        ios: null,
      },
    },
    '@react-native-firebase/messaging': {
      platforms: {
        ios: null,
      },
    },
    'react-native-custom-tabs': {
      platforms: {
        ios: null,
      },
    },
    'react-native-root-view-background-color': {
      platforms: {
        android: null,
      },
    },
    'react-native-background-fetch': {
      platforms: {
        android: null,
      },
    },
    // Only used by the iOS download bridge (js/lib/handleDownload.js): Android
    // downloads go through the system DownloadManager. Its Android native module
    // is not linked, so the JS must never require it on Android either.
    'react-native-blob-util': {
      platforms: {
        android: null,
      },
    },
  },
};
