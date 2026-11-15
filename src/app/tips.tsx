import { View, Text, StyleSheet } from 'react-native';

export default function TipsTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Why Hydrate? 🌊</Text>
      <Text style={styles.point}>Boosts skin health and beauty</Text>
      <Text style={styles.point}>Regulates body temperature</Text>
      <Text style={styles.point}>Flushes body waste</Text>
      <Text style={styles.point}>Maintains blood pressure</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F3F4F6' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#0EA5E9', marginBottom: 20 },
  point: { fontSize: 18, marginVertical: 8, color: '#374151' }
});