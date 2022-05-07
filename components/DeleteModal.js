import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Modal,
    TouchableWithoutFeedback,
} from 'react-native';
import { useAppDispatch } from '../app/hooks';
import { removePost } from '../reducers/PostReducer';

const DeleteModal = ({ delModalVisible, setDelModalVisible, modalVisible, setModalVisible, id }) => {
    const dispatch = useAppDispatch();
    return (
        <Modal
            animationType="fade"
            visible={delModalVisible}
            transparent={true}
            onRequestClose={() => {
                setDelModalVisible(!delModalVisible);
            }}
        >
            <TouchableWithoutFeedback onPress={() => { setDelModalVisible(!delModalVisible) }}>
                <View style={deleteModalStyles.exContainer}>
                    <View style={deleteModalStyles.inContainer}>
                        <View style={deleteModalStyles.nofiContainer}>
                            <Text style={deleteModalStyles.nofiText}>삭제하시겠습니까?</Text>
                        </View>
                        <View style={deleteModalStyles.yesORno}>
                            <TouchableOpacity style={deleteModalStyles.button} onPress={() => { dispatch(removePost({ id: id })); }}>
                                <Text style={deleteModalStyles.yesText}> 네 </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={deleteModalStyles.button}
                                onPress={() => { setModalVisible(!modalVisible); setDelModalVisible(!delModalVisible); }}
                            >
                                <Text style={deleteModalStyles.noText}>아니요</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>

    );
};

const deleteModalStyles = StyleSheet.create({
    exContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    inContainer: {
        backgroundColor: '#313131',
        alignItems: 'center',
        justifyContent: 'center',
        width: '72.5%',
        height: '22.5%',
        borderWidth: 1,
        borderColor: '#646464',

    },
    nofiContainer: {
        flex: 2,
        backgroundColor: '#313131',
        alignItems: 'flex-start',
        justifyContent: 'center',

    },
    yesORno: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'space-between',
    },
    nofiText: {
        flex: 1,
        fontSize: 17.5,
        color: 'white',
        marginVertical: 17.5,
    },
    button: {
        flex: 1,
        borderColor: '#646464',
        borderWidth: 0.75,
        alignItems: 'center',
        justifyContent: 'center',
    },
    noText: {
        flex: 1,
        fontSize: 17.5,
        color: '#fff',
        marginVertical: 12.5,
        marginHorizontal: 12.5,
    },
    yesText: {
        flex: 1,
        fontSize: 17.5,
        color: '#fff',
        marginVertical: 12.5,
        marginHorizontal: 12.5,
    },


});

export default DeleteModal;