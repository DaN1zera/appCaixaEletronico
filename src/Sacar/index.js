import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Sacar(props) {
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Text style={styles.resultadoNotas}>
          <Text>Notas de R$100,00:</Text>
          {'     '}
          <Text style={styles.Notas}>{props.notasCem}</Text>
        </Text>
        <Text style={styles.resultadoNotas}>
          <Text>Notas de R$50,00:</Text>
          {'       '}
          <Text style={styles.Notas}>{props.notasCinquenta}</Text>
        </Text>
        <Text style={styles.resultadoNotas}>
          <Text>Notas de R$10,00:</Text>
          {'       '}
          <Text style={styles.Notas}>{props.notasDez}</Text>
        </Text>
        <Text style={styles.resultadoNotas}>
          <Text>Notas de R$5,00:</Text>
          {'         '}
          <Text style={styles.Notas}>{props.notasCinco}</Text>
        </Text>
        <Text style={styles.resultadoNotas}>
          <Text>Notas de R$1,00:</Text>
          {'         '}
          <Text style={styles.Notas}>{props.notasUm}</Text>
        </Text>
        <TouchableOpacity onPress={props.fechar}>
          <View style={styles.containerFechar}>
            <Text style={styles.Fechar}>Fechar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  modal: {
    alignItems: 'center',
    backgroundColor: '#292929',
    width: '100%',
    height: 300,
    padding: 15,
    borderRadius: 25,
  },
  resultadoNotas: {
    justifyContent: 'space-between',
    color: '#FFF',
    fontSize: 18,
    marginBottom: 20,
  },
  Notas: {
    fontWeight: 'bold',
  },
  containerFechar: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#98ff',
    height: 45,
    width: 100,
    borderRadius: 25,
  },
  Fechar: {
    color: '#000',
    fontWeight: 'bold',
  },
});
