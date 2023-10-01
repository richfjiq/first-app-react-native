import { View, StyleSheet } from 'react-native';
import React from 'react';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.greenBox} />
      <View style={styles.purpleBox} />
      <View style={styles.orangeBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: 400,
    // height: 400,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#28C4D9',
  },
  purpleBox: {
    width: 100,
    height: 100,
    backgroundColor: '#5856D6',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    top: 0,
    right: 0,
    // left: 100,
  },
  orangeBox: {
    width: 100,
    height: 100,
    backgroundColor: '#F0A23B',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  greenBox: {
    // width: 100,
    // height: 100,
    backgroundColor: 'green',
    borderWidth: 10,
    borderColor: 'white',
    // position: 'absolute',
    // left: 0,
    // bottom: 0,
    ...StyleSheet.absoluteFillObject,
  },
});
