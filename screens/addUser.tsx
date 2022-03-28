import React, { useState } from 'react';
import {TextInput, TouchableOpacity, View, Text } from 'react-native';
import styles from '../constants/Style';
import { RootTabScreenProps } from '../types';



export default function AddUser({ navigation }: RootTabScreenProps<'AddUser'> ) {
   
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [id, setId] = useState('');

  const addUserToDB = () => {
    fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        password: password,
        age:age,
        id:id,
      }),
    });
    navigation.navigate('UserList');
  }

    return (
        <View>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Enter name"
              value={name}
              onChangeText={text => setName(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter password"
              value={password}
              onChangeText={text => setPassword(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter age"
              value={age}
              onChangeText={text => setAge(text)}
            />
             <TextInput
              style={styles.input}
              placeholder="Enter id"
              value={id}
              onChangeText={text => setId(text)}
            />
            <TouchableOpacity style={styles.addUserButton} onPress={addUserToDB}>
              <Text style={styles.buttonText}>Add User</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.addUserButton} onPress={() => navigation.replace('UserList')}>
              <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
  
  );
}