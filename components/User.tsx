import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import styles from "../constants/Style";

export interface User {
    id: string;
    name: string;
    age: string;
    password: string;
  }

const UserComp: React.FC<User> = ({name, password, age, id}) => {
  return (
    <View style={styles.user}>
      <Text style={styles.userText}>{name}</Text>
      <Text style={styles.userText}>{password}</Text> 
      <Text style={styles.userText}>{age}</Text> 
      <Text style={styles.userText}>{id}</Text> 
    </View>
  );
};
  
export default UserComp;
