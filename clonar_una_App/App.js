import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Encabezado />
      <Cuerpo />
      <Pie />
    </View>
  );
}

export const Encabezado = () => {
  return (
    <View style={styles.encabezado}>
      <Image
        source={require('./assets/ig.png')} // Ruta de la imagen
        style={styles.imagenEncabezado}
      />
    </View>
  )
}

export const Cuerpo = () => {
  return (
    <View style={styles.contenido}>
      <TextInput
        style={styles.input}
        placeholder="Usuario, correo o número"
        placeholderTextColor="#ffffff" 
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#ffffff" 
        secureTextEntry={true}
      />
      <View style={styles.forgotPasswordContainer}>
        <Text style={styles.enlace}>¿Olvidó su contraseña?</Text>
      </View>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
      <Text style={styles.facebookLink}>Iniciar sesión con Facebook</Text>
    </View>
  )
}

export const Pie = () => {
  return (
    <View style={[styles.pie, {marginTop: 200, marginBottom: 1}]}>
      <Text style={styles.enlace}>¿Tienes una cuenta? Regístrate</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  encabezado: {
    marginBottom: 100, // Ajustar margen inferior del encabezado
    alignItems: 'center', // Alinea la imagen al centro horizontalmente
  },
  imagenEncabezado: {
    width: 300, // Ancho de la imagen
    height: 80, // Alto de la imagen
    resizeMode: 'contain', // Escala la imagen para que quepa dentro del contenedor
  },
  contenido: {
    width: '80%',
    alignItems: 'center',
  },
  pie: {
    alignItems: 'center',
  },
  texto: {
    color: "#ffffff",
    fontSize: 24,
  },
  input: {
    height: 40,
    marginVertical: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderColor: '#ffffff',
    borderRadius: 5,
    width: '100%',
    color: '#ffffff',
  },
  enlace: {
    color: "#ffffff",
    fontSize: 14,
    textAlign: 'right',
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  buttonContainer: {
    backgroundColor: "#1877f2",
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
  },
  facebookLink: {
    color: "#1877f2",
    fontSize: 16,
    marginTop: 20,
  },
});