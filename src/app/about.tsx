import { View, Text, StyleSheet } from 'react-native';

export default function AboutTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About This App</Text>
      <Text style={styles.text}>Built for Mobile Application Development Lab 6. Demonstrates local notifications and Expo Router tab navigation.</Text>
      <Text style={styles.text}>Developed with React Native and Expo.</Text>
      <Text style={styles.footer}>Created by Sahan Sandeep.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20, backgroundColor: '#F3F4F6' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  text: { fontSize: 16, textAlign: 'center', marginVertical: 10, color: '#4B5563' },
  footer: { fontSize: 16, marginTop: 30, fontStyle: 'italic' }
});