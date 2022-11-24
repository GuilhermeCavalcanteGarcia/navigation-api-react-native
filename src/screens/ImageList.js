import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import Movies from './Movies';
import { moviesJson } from '../data/moviesJson';

const ImageList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Filmes</Text>

      {/* Listando os filmes vindo do arquivo Json importado */}
      <ScrollView style={styles.containerList}>
        {moviesJson.map((movie) => (
          <Movies movie={movie} />
        ))}
      </ScrollView>
      {/* <View style={styles.containerList}>
        <FlatList
          data={moviesJson}
          renderItem={(movie) => <Movies movie={movie} />}
          keyExtractor={(movie) => movie.id}
          showsVerticalScrollIndicator={false}
        />
      </View> */}
    </SafeAreaView>
  );
};

export default ImageList;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    margin: 10,
  },
  containerList: {
    backgroundColor: 'coral',
    padding: 5,
    borderWidth: 1,
    borderRadius: 4,
    flex: 1,
  },
  title: {
    color: 'tomato',
    fontSize: 35,
    alignSelf: 'center',
    marginVertical: 10,
  },
});
