import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';

const ListAdvice = ({ listAdvice }) => {
  return (
    <SafeAreaView>
      <Text style={styles.title}>Lista de frases</Text>
      <View style={styles.container}>
        {listAdvice.map((item) => (
          <Text style={styles.text}>{item.quote}</Text>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default ListAdvice;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: 'coral',
  },
  title: {
    padding: 5,
    fontSize: 20,
    alignSelf: 'center',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    marginBottom: 10,
  },
  text: {
    fontSize: 15,
    borderBottomWidth: 1,
    marginBottom: 10,
  },
});
