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
import Icon from 'react-native-vector-icons/MaterialIcons';
import CategoryModal from './CategoryModal';
import {PostType} from './_type/generalType';

interface ReviseProps{
    reModalVisible:boolean,
    setReModalVisible:(v:boolean)=>void,
    modalVisible:boolean,
    setModalVisible:(v:boolean)=>void,
    post:PostType,
}

const ReviseModal = ({ reModalVisible, setReModalVisible, modalVisible, setModalVisible, post }:ReviseProps) => {

    const dispatch = useAppDispatch();

    const inputRef = useRef<TextInput>(null);

    useEffect(() => {
        setTimeout(() => inputRef.current?.focus(), 0)
    }, [reModalVisible]);

    const [newTitleItem, setNewTitleItem] = useState(post.title);
    const [newCateItem, setNewCateItem] = useState(post.category);
    const [cateModalVisible,setCateModalVisible] = useState(false);

    const revisePostHandler = () => {
        const testTitle = newTitleItem.trim();
        const testCate = newCateItem.trim();
        if ( newTitleItem == post.title && newCateItem == post.category) {

        }
        else if (testTitle != '' && testCate != '') {
            let item = { ...post };
            item.title = newTitleItem;
            item.category = newCateItem;
            dispatch(revisePost({ id: post.id, newPost: item }));
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
            inputRef.current?.focus();
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
                        <TouchableOpacity onPress={() => { setCateModalVisible(!cateModalVisible) }} style={reviseModalStyles.category}>
                            <Icon name='category' color='black' size={27} />
                        </TouchableOpacity>
                        <TextInput
                            style={reviseModalStyles.input}
                            placeholder="Title"
                            value={newTitleItem}
                            onChangeText={(title) => setNewTitleItem(title)}
                            placeholderTextColor={'#999'}
                            autoCorrect={false}
                            maxLength={200}
                            multiline={true}
                            ref={inputRef}
                        />
                        <TouchableOpacity style={reviseModalStyles.button} onPress={revisePostHandler}>
                            <Text style={reviseModalStyles.buttonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <CategoryModal cateModalVisible={cateModalVisible} setCateModalVisible={setCateModalVisible} setNewCateItem={setNewCateItem} />
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
        borderRadius: 2,
    },
    category: {
        marginLeft: 10,
        backgroundColor: 'white',
        marginVertical: 10,
        height: 40,
        width: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    excontainer: {
        flex: 1,
        backgroundColor: "#252525c0",
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    inputContainer: {
        backgroundColor: '#393939',
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