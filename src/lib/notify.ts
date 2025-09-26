export async function notify(title: string, options?: NotificationOptions) {
  try {
    if (!('Notification' in window)) return;
    let perm = Notification.permission;
    if (perm === 'default') perm = await Notification.requestPermission();
    if (perm !== 'granted') return;

    const reg = await navigator.serviceWorker?.getRegistration();
    if (reg)
      await reg.showNotification(title, options); // better UX & click handling
    else new Notification(title, options);
  } catch {
    // deez
  }
}
