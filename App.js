import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

const App = () => {
  // Estados para tema, tamanho da fonte e modo noturno
  const [theme, setTheme] = useState('Claro');
  const [fontSize, setFontSize] = useState(16);
  const [isNightMode, setIsNightMode] = useState(false);

  // Função para resetar preferências
  const resetPreferences = () => {
    setTheme('Claro');
    setFontSize(16);
    setIsNightMode(false);
  };

  // Atualiza o estado do tema quando o Switch é alterado
  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
    setTheme(!isNightMode ? 'Escuro' : 'Claro'); // Muda o tema junto com o Switch
  };

  return (
    <View style={[styles.container, (isNightMode || theme === 'Escuro') && styles.darkTheme]}>
      <Text style={[styles.title, { fontSize }]}>Configurações de Preferências</Text>

      {/* Picker para selecionar o tema */}
      <Text style={{ fontSize }}>Tema do Aplicativo</Text>
      <Picker
        selectedValue={theme}
        onValueChange={(itemValue) => {
          setTheme(itemValue);
          setIsNightMode(itemValue === 'Escuro');
        }}
        style={{ height: 50, width: 200 }}
      >
        <Picker.Item label="Claro" value="Claro" />
        <Picker.Item label="Escuro" value="Escuro" />
        <Picker.Item label="Automático" value="Automático" />
      </Picker>

      {/* Slider para ajustar o tamanho da fonte */}
      <Text style={{ fontSize }}>Tamanho da Fonte: {fontSize}</Text>
      <Slider
        minimumValue={12}
        maximumValue={30}
        step={1}
        value={fontSize}
        onValueChange={(value) => setFontSize(value)}
        style={{ width: 200 }}
      />

      {/* Switch para ativar/desativar o modo noturno */}
      <Text style={{ fontSize }}>Modo Noturno: {isNightMode ? 'Ativado' : 'Desativado'}</Text>
      <Switch
        value={isNightMode}
        onValueChange={toggleNightMode}
      />

      {/* Botão para resetar preferências */}
      <Button title="Resetar Preferências" onPress={resetPreferences} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  darkTheme: {
    backgroundColor: '#333',
  },
});

export default App;
