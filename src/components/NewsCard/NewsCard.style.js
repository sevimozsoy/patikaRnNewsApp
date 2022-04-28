import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 20,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
  },
  title:{
      fontSize:20,
      fontWeight: 'bold'
  },
  description: {},
  author:{
      fontStyle:'italic',
      color:'gray',
      textAlign:'right',
      
  },

  inner_container:{
      padding:15
  }
});
