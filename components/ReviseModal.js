import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Modal,
    TextInput,
    Keyboard,
} from 'react-native';
import { useAppDispatch } from '../app/hooks';
import { revisePost } from '../reducers/PostReducer';

const ReviseModal = ({ reModalVisible, setReModalVisible, modalVisible, setModalVisible, post }) => {
    const dispatch = useAppDispatch();
    const [newTitleItem, setNewTitleItem] = useState('');
    const [newCateItem, setNewCateItem] = useState('');
    const revisePostHandler = () => {
        const testTitle = newTitleItem.trim();
        const testCate = newCateItem.trim();
        if (testTitle != '' && testCate != '') {
            let item = {...post};
            item.title = newTitleItem;
            item.category = newCateItem;
            dispatch(revisePost({ id: post.idx, newPost: item }));
            setNewTitleItem('');
            setNewCateItem('');
            setModalVisible(!modalVisible);
            setReModalVisible(!reModalVisible);          
            Keyboard.dismiss();
        }
        else {
            Alert.alert(
                "내용을 입력해주세요"
            );
            if (testTitle == '') {
                setNewTitleItem('');
            }
            setNewCateItem('');
        }
    };

  
    return (
        <Modal
            animationType="fade"
            visible={reModalVisible}
            transparent={true}
            onRequestClose={() => {
                setReModalVisible(!reModalVisible);
            }}
        >
            <View style={reviseModalStyles.excontainer}>
                <View style = {reviseModalStyles.inputContainer}>
                    <TextInput
                        style={reviseModalStyles.category}
                        placeholder=''
                        value={newCateItem}
                        onChangeText={(category) => setNewCateItem(category)}
                        autoCorrect={false}
                        placeholderTextColor={'#999'}
                        maxLength={1}
                    />
                    <TextInput
                        style={reviseModalStyles.input}
                        placeholder="Title"
                        value={newTitleItem}
                        onChangeText={(title) => setNewTitleItem(title)}
                        placeholderTextColor={'#999'}
                        autoCorrect={false}
                        maxLength={200}
                        multiline={true}
                    />
                </View>
                <View style={reviseModalStyles.buttonContainer}>
                    <TouchableOpacity
                        style={reviseModalStyles.button}
                        onPress={revisePostHandler}
                    >
                        <Text>수정하기</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={reviseModalStyles.button}
                        onPress={() => {setReModalVisible(!reModalVisible);}}
                    >
                        <Text>나가기</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>

    );
};

const reviseModalStyles = StyleSheet.create({
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
    category: {
        fontSize: 20,
        textAlign: 'center',
        marginLeft: 10,
        backgroundColor: 'white',
        marginVertical: 10,
        height: 40,
        width: 40,
        color: 'black',
        borderRadius: 2.5, 
    },
    excontainer: {

    },
    inputContainer: {
        flexDirection: 'row',
        flex: 2,
        justifyContent: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
    },
    button:{

    }
});

export default ReviseModal;