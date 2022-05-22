import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Keyboard,
  Alert,
  Modal,
  TouchableOpacity,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { addPost } from '../reducers/post.reducer';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import CategoryModal from './CategoryModal';

const PostInsert = () => {
  const dispatch = useAppDispatch();
  const { longitude, latitude } = useAppSelector(state => state.location.value);
  const [newTitleItem, setNewTitleItem] = useState('');
  const [newCateItem, setNewCateItem] = useState('');
  const [cateModalVisible, setCateModalVisible] = useState(false);

  const addPostHandler = () => {
    const testTitle = newTitleItem.trim();
    if (testTitle != '') {
      dispatch(
        addPost({
          title: newTitleItem,
          category: newCateItem,
          longitude: longitude,
          latitude: latitude,
        }),
      );
      setNewTitleItem('');
      setNewCateItem('');
      Keyboard.dismiss();
    } else {
      Alert.alert('내용을 입력해주세요');
      if (testTitle == '') {
        setNewTitleItem('');
      }
      setNewCateItem('');
    }
  };

  return (
    <View style={insertStyles.inputContainer}>
      <TouchableOpacity onPress={() => { setCateModalVisible(!cateModalVisible) }} style={insertStyles.category}>
        <Icon name='category' color='black' size={27}/>
      </TouchableOpacity>
      <TextInput
        style={insertStyles.input}
        placeholder="Title"
        value={newTitleItem}
        onChangeText={title => setNewTitleItem(title)}
        placeholderTextColor={'#999'}
        autoCorrect={false}
        maxLength={200}
        multiline={true}
      />
      <TouchableOpacity style={insertStyles.button} onPress={addPostHandler}>
        <Text style={insertStyles.buttonText}>+</Text>
      </TouchableOpacity>
      <CategoryModal cateModalVisible={cateModalVisible} setCateModalVisible={setCateModalVisible} setNewCateItem={setNewCateItem} />
    </View>
  );
};

const insertStyles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#cfe2f3',
  },
  input: {
    flex: 1,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 20,
    marginLeft: 10,
    backgroundColor: 'white',
    height: 40,
    color: 'black',
    borderRadius: 2.5,
  },
  button: {
    marginRight: 10,
    height: 40,
    width: 40,
    backgroundColor: '#006cff',
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  category: {
    marginLeft: 10,
    backgroundColor: 'white',
    marginVertical: 10,
    height: 40,
    width: 40,
    borderRadius: 10,
    alignItems:'center',
    justifyContent:'center',
  },
});

export default PostInsert;
