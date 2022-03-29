import { StyleSheet} from 'react-native';


const styles = StyleSheet.create({
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
      padding: 25,
    },

    input: {
      padding: 25,
      borderColor: 'rgba(0, 0, 0, 0.2)',
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 20,
    },

    addUserButton: {
      backgroundColor: '#7D3C98',
      paddingVertical: 20,
      borderRadius: 5,
      alignItems: 'center',
      color: '#fff',
      margin: 5,
    },

    buttonText: {color: '#fff', fontWeight: '500'},

    user: {
      padding: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(0, 0, 0, 0.2)',
      },

    header:{
      fontWeight: '800',
    }, 
    userText: {
      fontWeight: '500',
    }
  });
  
  export default styles;