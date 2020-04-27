import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Signup from './Signup'


export default function App() {
  return (
    <View style={styles.container}>
      <Signup/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    marginVertical: 70,
    marginHorizontal: 40,
  },
});
