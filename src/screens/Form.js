import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Form = () => {
  const [name, setName] = useState();
  const [lastName, setLastname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder="Nome"
          // onSubmitEditing={() => {
          //   this.secondTextInput.focus();
          // }}
        ></TextInput>

        <TextInput
          style={styles.input}
          onChangeText={setLastname}
          value={lastName}
          placeholder="Sobrenome"
          // ref={(input) => {
          //   this.secondTextInput = input;
          // }}
        ></TextInput>

        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
        ></TextInput>

        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Senha"
          keyboardType="password"
          secureTextEntry={true}
        ></TextInput>

        <TouchableOpacity style={styles.button}>
          <Text>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 90,
  },
  title: {
    marginBottom: 40,
    fontSize: 35,
    borderBottomWidth: 1,
  },
  input: {
    height: 40,
    width: 220,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
    margin: 5,
  },
  button: {
    padding: 20,
    marginTop: 25,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'coral',
    alignSelf: 'center',
  },
});
