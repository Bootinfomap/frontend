import React, { useState, useRef, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Modal,
    TextInput,
    Keyboard,
    Alert,
    TouchableWithoutFeedback,
} from 'react-native';
import { revisePost } from '../reducers/post.reducer';
import { useAppDispatch } from '../app/hooks';

const ReviseModal = ({ reModalVisible, setReModalVisible, modalVisible, setModalVisible, post }) => {
    const dispatch = useAppDispatch();
    const cateRef = useRef();
    useEffect(() => {
        setTimeout(() => cateRef.current?.focus(), 0)
    }, [reModalVisible]);
    const [newTitleItem, setNewTitleItem] = useState(post.title);
    const [newCateItem, setNewCateItem] = useState(post.category);
    const revisePostHandler = () => {
        const testTitle = newTitleItem.trim();
        const testCate = newCateItem.trim();
        if (testTitle != '' && testCate != '') {
            let item = { ...post };
            item.title = newTitleItem;
            item.category = newCateItem;
            dispatch(revisePost({ id: post.idx, newPost: item }));
            setNewTitleItem('');
            setNewCateItem('');
            setReModalVisible(!reModalVisible);
            setModalVisible(!modalVisible);
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
            cateRef.current?.focus();
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
            <TouchableWithoutFeedback onPress={() => { setReModalVisible(!reModalVisible) }}>
                <View style={reviseModalStyles.excontainer}>
                    <View style={reviseModalStyles.inputContainer}>
                        <TextInput
                            style={reviseModalStyles.category}
                            placeholder=''
                            value={newCateItem}
                            onChangeText={(category) => setNewCateItem(category)}
                            autoCorrect={false}
                            placeholderTextColor={'#999'}
                            maxLength={1}
                            ref={cateRef}
                            autoFocus={true}
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
                        <TouchableOpacity style={reviseModalStyles.button} onPress={revisePostHandler}>
                            <Text style={reviseModalStyles.buttonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>

    );
};

const reviseModalStyles = StyleSheet.create({
    input: {
        flex: 1,
        borderBottomColor: '#bbb',
        borderBottomWidth: 1,
        fontSize: 21.5,
        marginLeft: 10,
        backgroundColor: 'white',
        height: 43,
        color: 'black',
        borderRadius: 1,
    },
    category: {
        fontSize: 21.5,
        textAlign: 'center',
        marginLeft: 10,
        backgroundColor: 'white',
        marginVertical: 10,
        height: 43,
        width: 43,
        color: 'black',
        borderRadius: 1,
    },
    excontainer: {
        flex: 1,
        backgroundColor: "#252525c0",
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    inputContainer: {
        backgroundColor: '#313131',
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 6,
        borderColor: '#646464',
        borderWidth: 1,
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
});

export default ReviseModal;