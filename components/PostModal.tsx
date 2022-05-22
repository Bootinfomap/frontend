import React, { useState, useRef, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Modal,
    TouchableWithoutFeedback,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DeleteModal from './DeleteModal';
import PostModalContent from './PostModalContent';
import ReviseModal from './ReviseModal';

const PostModal = ({ modalVisible, setModalVisible, post }) => {
    const navigation = useNavigation();
    const [delModalVisible, setDelModalVisible] = useState(false);
    const [reModalVisible, setReModalVisible] = useState(false);

    const reviseFunc = () => {
        setReModalVisible(!reModalVisible);
    };
    const deleteFunc = () => {
        setDelModalVisible(!delModalVisible);
    };
    const reportFunc = () => {
        navigation.navigate('Report', { title: post.title });
    };

    const contents = useRef([]);
    useEffect(() => {
        if (post.userid == 'ID') {
            contents.current = [
                { index: 0, text: '수 정 하 기', pressFunc: reviseFunc, iconName: "sync", iconColor: 'white' },
                { index: 1, text: '삭 제 하 기', pressFunc: deleteFunc, iconName: "restore-from-trash", iconColor: 'white' },
            ];
        }// if data is made by current user
        else {
            contents.current = [
                { index: 2, text: '신 고 하 기', pressFunc: reportFunc, iconName: "report", iconColor: 'red' },
            ];
        };//about other user
    }, []);

    return (
        <Modal
            animationType="slide"
            visible={modalVisible}
            transparent={true}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <TouchableWithoutFeedback onPress={() => { setModalVisible(!modalVisible) }}>
                <View style={postModalStyles.exContainer}>
                    {contents.current.map(content => (
                        <PostModalContent
                            key={content.index}
                            content={content}
                        />
                    ))}
                </View>
            </TouchableWithoutFeedback>
            <DeleteModal
                delModalVisible={delModalVisible} setDelModalVisible={setDelModalVisible}
                id={post.idx}
            />
            <ReviseModal
                reModalVisible={reModalVisible} setReModalVisible={setReModalVisible}
                modalVisible={modalVisible} setModalVisible={setModalVisible}
                post={post}
            />
        </Modal>
    );

};
/*
TouchableOpacity style={postModalStyles.listButton}>
                        <Text style={postModalStyles.text}>수정하기</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={postModalStyles.listButton} onPress={() => { setDelModalVisible(!delModalVisible); }}>
                        <Text style={postModalStyles.text}>삭제하기</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={postModalStyles.listButton} onPress={() => { navigation.navigate('Report', { title: post.title }); }}>
                        <Text style={postModalStyles.text}>신고하기</Text>
                    </TouchableOpacity>
*/
const postModalStyles = StyleSheet.create({
    exContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: "#252525c0",
    },
    listButton: {
        backgroundColor: '#313131',
        borderWidth: 1,
        borderColor: '#646464',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    text: {
        color: 'white',
        marginVertical: 12.5,
        fontSize: 20,

    },
});

export default PostModal;