import React, { useState, useRef, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Modal,
    TouchableWithoutFeedback,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DeleteModal from './DeleteModal';
import PostModalContent from './PostModalContent';
import ReviseModal from './ReviseModal';
import {PostType} from './_type/generalType';
import {RootStackParamList} from './_type/navigationType';
import {StackNavigationProp} from '@react-navigation/stack';
import {ModalContentType} from './_type/generalType';

interface PostModalProps {
    modalVisible: boolean,
    setModalVisible: (param: boolean)=>void,
    post: PostType
};


type ReportScreenProp = StackNavigationProp<RootStackParamList,'Report'>;



const PostModal = ({ modalVisible, setModalVisible, post }: PostModalProps) => {
    const navigation = useNavigation<ReportScreenProp>();
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

    const contents = useRef<Array<ModalContentType>>([]);
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
                id={post.id}
            />
            <ReviseModal
                reModalVisible={reModalVisible} setReModalVisible={setReModalVisible}
                modalVisible={modalVisible} setModalVisible={setModalVisible}
                post={post}
            />
        </Modal>
    );

};

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