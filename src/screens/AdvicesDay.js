import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import api from '../service/api';
import ListAdvice from './ListAdvice';

const AdvicesDay = () => {
  const [advice, setAdvice] = useState([]);
  const [listAdvice, setListAdvice] = useState([
    {
      quote: 'Teste de armazenamento!',
    },
    {
      quote: 'Frase teste para verificar!',
    },
    {
      quote: 'Uma outra frase teste para verificar na lista!',
    },
  ]);

  function addToList() {
    setListAdvice([...listAdvice, { quote: advice?.quote }]);
  }

  useEffect(() => {
    api
      .get()
      .then((response) => setAdvice(response.data))
      .catch((err) => {
        console.error('Erro ao acessar os dados!' + err);
      });
  }, []);

  return (
    <SafeAreaView>
      <Text style={styles.title}>Kenye West</Text>

      <TouchableOpacity style={styles.buttonReload}></TouchableOpacity>

      <View style={styles.container}>
        <Text style={styles.text}>{advice?.quote}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={addToList}>
        <Text>Adicionar</Text>
      </TouchableOpacity>
      <ListAdvice listAdvice={listAdvice} />
    </SafeAreaView>
  );
};

export default AdvicesDay;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    marginTop: 20,
    padding: 20,
    borderWidth: 2,
  },
  title: {
    fontSize: 25,
    alignSelf: 'center',
    padding: 10,
    marginTop: 20,
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 14,
    color: 'coral',
  },
  button: {
    alignSelf: 'center',
    padding: 10,
    marginTop: 15,
    borderWidth: 2,
    borderRadius: 7,
    backgroundColor: 'coral',
  },
  buttonReload: {
    padding: 10,
    borderWidth: 1,
    alignSelf: 'baseline',
    backgroundColor: 'coral',
    marginLeft: 50,
    borderRadius: 3,
  },
});
