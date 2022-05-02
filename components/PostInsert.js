import React, {useState}from 'react';
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Keyboard,
  Alert,
} from 'react-native';


const PostInsert = ({onAddPost}) => {
    const [newTitleItem, setNewTitleItem] = useState('');
    const [newCateItem, setNewCateItem] = useState('');
    
    const addPostHandler = () => {
      const testTitle=newTitleItem.trim();
      const testCate=newCateItem.trim();
      if (testTitle != '' && testCate != '' ){
        onAddPost({title: newTitleItem,category:newCateItem});
        setNewTitleItem('');
        setNewCateItem('');
        Keyboard.dismiss();
      }
      else {
        Alert.alert(
          "내용을 입력해주세요"
      );
      if (testTitle == ''){
        setNewTitleItem('');
      }
        setNewCateItem('');
      }
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