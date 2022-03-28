import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

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



const styles = StyleSheet.create({
  user: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
  },
  userText: {
    fontWeight: '500',
  },
  container: {
    flex: 1,
    backgroundColor: '#e8e7e3',
  },
  contentWrapper: {
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
  },
  form: {
    marginTop: 30,
  },
  input: {
    padding: 15,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  edit: {
    backgroundColor: 'orange',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {color: '#fff', fontWeight: '500'},
});
  
export default UserComp;
