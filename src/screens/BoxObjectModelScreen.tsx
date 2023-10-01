import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  title: {
    fontSize: 20,
    paddingHorizontal: 100,
    paddingVertical: 20,
    marginRight: 10,
    marginLeft: 10,
    // width: 200,
    borderWidth: 10,
  },
});
