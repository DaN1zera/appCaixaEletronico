import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native';

import Sacar from './src/Sacar';

export default function appCaixaEletronico() {
  const [valor, setValor] = useState();
  const [notasCem, setNotasCem] = useState();
  const [notasCinquenta, setNotasCinquenta] = useState();
  const [notasDez, setNotasDez] = useState();
  const [notasCinco, setNotasCinco] = useState();
  const [notasUm, setNotasUm] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  function CalcularNotas() {
    function CalcularNotasCem() {
      let resultado = valor / 100;
      return parseInt(resultado);
    }

    function CalcularNotasCinquenta() {
      let resultado;
      if (valor < 100) {
        resultado = valor / 50;
      } else if (valor > 100) {
        resultado = (valor % 100) / 50;
      } else {
        resultado = 0;
      }
      return parseInt(resultado);
    }

    function CalcularNotasDez() {
      let resultado;
      if (valor < 50) {
        resultado = valor / 10;
      } else if (valor > 50) {
        resultado = (valor % 50) / 10;
      } else {
        resultado = 0;
      }
      return parseInt(resultado);
    }

    function CalcularNotasCinco() {
      let resultado;
      if (valor < 10) {
        resultado = valor / 5;
      } else if (valor > 10) {
        resultado = (valor % 10) / 5;
      } else {
        resultado = 0;
      }
      return parseInt(resultado);
    }

    function CalcularNotasUm() {
      let resultado;
      if (valor < 5) {
        resultado = valor / 1;
      } else if (valor > 5) {
        resultado = (valor % 5) / 1;
      } else {
        resultado = 0;
      }
      return parseInt(resultado);
    }

    if (valor < 10 || valor > 600) {
      return alert('Insira um valor entre R$10,00 e R$600,00');
    }
    if (valor > 10 && valor < 600) {
      setNotasCem(CalcularNotasCem());
      setNotasCinquenta(CalcularNotasCinquenta());
      setNotasDez(CalcularNotasDez());
      setNotasCinco(CalcularNotasCinco());
      setNotasUm(CalcularNotasUm());
      setModalVisible(true);
    }
  }

  function sairModal() {
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text>Insira um valor para sacar:</Text>
        <TextInput style={styles.input} onChangeText={setValor} />
      </View>

      <View style={styles.sacarBox}>
        <TouchableOpacity style={styles.sacar} onPress={CalcularNotas}>
          <Text style={styles.sacarTexto}>Sacar</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <Sacar
          notasCem={notasCem}
          notasCinquenta={notasCinquenta}
          notasDez={notasDez}
          notasCinco={notasCinco}
          notasUm={notasUm}
          fechar={sairModal}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
  form: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    height: 50,
    width: '50%',
    borderWidth: 1,
    borderColor: '#000',
  },
  sacarBox: {
    margin: 20,
    alignItems: 'center',
  },
  sacar: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    height: 50,
    width: 100,
  },
  sacarTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
});
