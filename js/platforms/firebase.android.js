import firebase from '@react-native-firebase/app';
import '@react-native-firebase/messaging';

/**
 * Push notifications require Google Play Services (FCM). On devices without GMS
 * (or in a `-PnoGms` build, where Firebase's startup ContentProvider is disabled)
 * there is no default Firebase app, and calling `firebase.messaging()` would
 * throw while this module is being imported - which would take the whole app
 * down before it can render.
 *
 * So this must never throw: when messaging is unavailable we export null and the
 * app simply runs without push.
 */
let messaging = null;

try {
  if (firebase.apps.length > 0) {
    messaging = firebase.messaging();
  } else {
    console.log('[push] no Firebase app, push is disabled');
  }
} catch (e) {
  console.warn(
    '[push] messaging unavailable, push is disabled:',
    e?.message ?? e,
  );
  messaging = null;
}

export default messaging;
