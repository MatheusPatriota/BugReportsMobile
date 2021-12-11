import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import Logo from '../../assets/logo.png';

export default function Starting() {
  return (
    <>
      <View style={styles.container}>
        <Image source={Logo} style={styles.logo} />
      </View>
    </>
  );
}
