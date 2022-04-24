import React, {useState}from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

const PostInsert = ({onAddPost}) => {
    const [newTitleItem, setNewTitleItem] = useState('');
    const [newCateItem, setNewCateItem] = useState('');
    const addPostHandler = () => {
      onAddPost({title: newTitleItem,category:newCateItem});
      setNewTitleItem('');
      setNewCateItem('');
      Keyboard.dismiss();
    };
  
    return (
      <View style={insertStyles.inputContainer}>
        <TextInput
          style={insertStyles.category}
          placeholder=''
          value={newCateItem}
          onChangeText={(category) => setNewCateItem(category)}
          autoCorrect={false}
          placeholderTextColor={'#999'}
          maxLength={1}
        />
        <TextInput
          style={insertStyles.input}
          placeholder="Title"
          value={newTitleItem}
          onChangeText={(title) => setNewTitleItem(title)}
          placeholderTextColor={'#999'}
          autoCorrect={false}
          maxLength={200}
          multiline={true}
        />
        <View style={insertStyles.button}>
          <Button title={'+'} onPress={addPostHandler} />
        </View>
      </View>
    );
  };
  
  const insertStyles = StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor:'#cfe2f3',
    },
    input: {
      flex: 1,
      borderBottomColor: '#bbb',
      borderBottomWidth: 1,
      fontSize: 20,
      marginLeft: 10,
      backgroundColor:'white',
      height:40,
      color:'black'
    },
    button: {
      marginRight: 10,
      height:35,
      width:35,
      backgroundColor:'blue',
      marginLeft:10,
    },
    category: {
      fontSize: 20,
      textAlign:'center',
      marginLeft: 10,
      backgroundColor:'white',
      marginVertical:10,
      height:40,
      width:40,
      color:'black'
    }
  });
  
export default PostInsert;  