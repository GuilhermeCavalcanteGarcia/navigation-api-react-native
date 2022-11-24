import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const Movies = ({ movie }) => {
  return (
    <View style={styles.containerMovie}>
      <Text style={styles.titleMovie}>
        {movie.id} - {movie.nomeFilme}
      </Text>
      <Image style={styles.image} source={{ uri: movie.linkImagem }} />
    </View>
  );
};

export default Movies;

const styles = StyleSheet.create({
  containerMovie: {
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#D1D5D8',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 8,
    width: 250,
    height: 250,
    flex: 1,
  },
  titleMovie: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'coral',
    marginBottom: 10,
    fontSize: 20,
    color: 'coral',
  },
  image: {
    width: 150,
    height: 150,
  },
});
