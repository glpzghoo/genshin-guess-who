self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const roomId = event.notification.data?.roomId;
  const targetUrl = roomId ? `/room/${roomId}` : '/';
  event.waitUntil(
    (async () => {
      const all = await clients.matchAll({
        type: 'window',
        includeUncontrolled: true,
      });
      for (const c of all) {
        if ('focus' in c) {
          c.navigate(targetUrl);
          return c.focus();
        }
      }
      if (clients.openWindow) return clients.openWindow(targetUrl);
    })()
  );
});
