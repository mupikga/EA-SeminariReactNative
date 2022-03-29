import React, { useState } from "react";
import { View, ActivityIndicator, FlatList, TouchableOpacity } from "react-native";
import { RootTabScreenProps } from "../types";
import {Text} from 'react-native';
import UserComp from "../components/User";
import styles from "../constants/Style";

export default function UserList({ navigation }: RootTabScreenProps<'UserList'> ) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [onInit, setOnInit] = useState(false);

  
    const getUsers = async () => {
      try {
       const response = await fetch('http://localhost:3000/api/users');
       const json = await response.json();
       setData(json);
     } catch (error) {
       console.error(error);
     } finally {
       setLoading(false);
     }
   }
   
    React.useEffect(() => {
      setOnInit(true);
      getUsers();
    },[onInit==false]);
  
    return (
      <View style={{ flex: 1, padding: 20 }}>
          <View  style={styles.user}>
            <Text style={styles.header}>Name </Text>
            <Text style={styles.header}>Password</Text> 
            <Text style={styles.header}>Age</Text> 
            <Text style={styles.header}>ID</Text> 
          </View>
        

        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <UserComp name={item.name} password={item.password} age={item.age} id={item.id }/>                
            )}
          />
        )
        }
  
      <TouchableOpacity style={styles.addUserButton} onPress={() => navigation.replace('AddUser')}>
        <Text style={styles.buttonText}>Add User</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.addUserButton} onPress={() => navigation.replace('EditDeleteUser')}>
        <Text style={styles.buttonText}>Edit or Delete User</Text>
      </TouchableOpacity>
  
      </View>
    );
  }