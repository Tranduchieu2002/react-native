import notifee from "@notifee/react-native"

export async function DisplayNotification(remoteMessage) {
  // Create a channel
  const channelId = await notifee.createChannel({
    id: remoteMessage.title,
    name: "Default Channel",
  })

  // Display a notification
  await notifee.displayNotification({
    title: remoteMessage.notification.title,
    body: remoteMessage.notification.body,
    android: {
      channelId,
      largeIcon: "https://my-cdn/users/123.png",
      smallIcon: "ic_launcher", // optional, defaults to 'ic_launcher'.
      timestamp: Date.now() - remoteMessage.sentTime,
      showTimestamp: true,
    },
  })
}
