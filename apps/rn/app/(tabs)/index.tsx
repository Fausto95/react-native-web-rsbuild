import { StyleSheet, View } from 'react-native';

import {Circle, Square} from 'rn-design-system'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Square />
      <Circle />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
