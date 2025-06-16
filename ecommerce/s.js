// Check if service workers are supported in the browser
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      // Register the service worker
      navigator.serviceWorker.register('/service-worker.js')
        .then((registration) => {
          console.log('Service Worker registered successfully:', registration);
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error);
        });
    });
  }
  
  // Push Notifications (Requesting Permission)
  if ('Notification' in window && 'serviceWorker' in navigator) {
    // Request notification permission from the user
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted');
      } else {
        console.log('Notification permission denied');
      }
    });
  
    // Push event listener to handle push messages
    navigator.serviceWorker.addEventListener('push', (event) => {
      const options = {
        body: event.data.text(),
        icon: 'icons/icon-192x192.png',
        badge: 'icons/icon-192x192.png',
      };
  
      event.waitUntil(
        self.registration.showNotification('New Product Available!', options)
      );
    });
  }
  