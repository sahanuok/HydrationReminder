import * as Notifications from 'expo-notifications';
import { useEffect, useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function ReminderTab() {
  const [isReminding, setIsReminding] = useState(false);
  const [message, setMessage] = useState("Time to drink a glass of water!");
  const [intervalMinutes, setIntervalMinutes] = useState(1);

  // App එක load වෙද්දිම notifications යවන්න permission ඉල්ලනවා
  useEffect(() => {
    async function requestPermissions() {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission required', 'We need notifications to remind you to drink water!');
      }
    }
    requestPermissions();
  }, []);

  // Reminder එක පටන් ගන්න function එක
  async function scheduleReminder() {
    await Notifications.requestPermissionsAsync(); 
    await Notifications.cancelAllScheduledNotificationsAsync(); // පරණ ඒවා මකනවා

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Hydration Alert 💧",
        body: message,
        sound: true,
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
        seconds: intervalMinutes * 60, // මිනිත්තු තත්පර වලට හරවනවා
        repeats: true
      }
    });

    setIsReminding(true);
    Alert.alert("Set!", `Reminding you every ${intervalMinutes} minutes.`);
  }

  // Reminder එක නවත්තන function එක
  async function stopReminder() {
    await Notifications.cancelAllScheduledNotificationsAsync();
    setIsReminding(false);
    Alert.alert("Stopped", "Reminders cancelled.");
  }

  // මේකෙන් තමයි screen එකේ පෙනුම (UI) හදන්නේ
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🥤</Text>
      
      <Text style={styles.label}>Add a Custom Message</Text>
      <TextInput
        style={styles.input}
        value={message}
        onChangeText={setMessage}
      />

      <Text style={styles.label}>Set Interval (minutes)</Text>
      <TextInput
        style={styles.input}
        value={intervalMinutes.toString()}
        onChangeText={(text) => setIntervalMinutes(parseInt(text) || 1)}
        keyboardType="numeric"
      />

      <Text style={styles.status}>
        Status: {isReminding ? "Active 🟢" : "Inactive 🔴"}
      </Text>

      <View style={{ marginTop: 20 }}>
        <Button title="START REMINDERS" onPress={scheduleReminder} color="#0EA5E9" />
        <View style={{ height: 10 }} />
        <Button title="STOP REMINDERS" onPress={stopReminder} color="#EF4444" />
      </View>
    </View>
  );
}

// Design (Styles) ටික
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20, backgroundColor: '#E0F2FE' },
  emoji: { fontSize: 80, marginBottom: 20 },
  label: { fontSize: 16, fontWeight: 'bold', color: '#0F766E', marginTop: 10 },
  input: { backgroundColor: 'white', width: '100%', padding: 10, marginVertical: 10, borderRadius: 5, borderColor: '#ccc', borderWidth: 1 },
  status: { fontSize: 18, fontWeight: 'bold', color: '#0F766E', marginVertical: 20 }
});