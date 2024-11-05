// components/Navbar.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
  const navigation = useNavigation();

  return (
    <View>
      {/* Logo */}
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image source={require('../assets/logo.png')} />
      </TouchableOpacity>
      
      {/* Linki */}
      <TouchableOpacity onPress={() => navigation.navigate('Opony')}>
        <Text>Opony</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Felgi')}>
        <Text>Felgi</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Konto')}>
        <Text>Konto</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Koszyk')}>
        <Text>Koszyk</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
