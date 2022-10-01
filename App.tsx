import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [url, setUrl] = useState([]);

  const buscarDoginho = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((json) => setUrl(json.message));
  }

  return (
    <View style={styles.container}>
      <h1>Random Doginho</h1>
      <Text>Clique no botão e veja um doginho escolhido aleatoriamente</Text><br></br>
      <TouchableOpacity onPress={buscarDoginho} style={styles.button}>
        <Text style={styles.buttonLabel}>Ver um Doginho</Text>
      </TouchableOpacity><br></br>
      <Image style={styles.image} source={{uri:url}}></Image>
      <StatusBar style="auto" />
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
  button: {
    padding:10,
    borderRadius: 12,
    backgroundColor: '#0084B8'
  },
  buttonLabel: {
    color: '#fff',
  },
  image: {
    width: 500,
    height: 500
  }
});
