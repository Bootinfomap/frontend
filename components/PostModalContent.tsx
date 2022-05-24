import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ModalContentType} from './_type/generalType';
//designed to be worked by the content props by external component, depends on user.   
//import userControl from '../reducers/post.reducer';
//import { useAppDispatch, useAppSelecter } from '../app/hooks';
interface contentProp {
    content: ModalContentType,
};


const PostModalContent = ({content}:contentProp) => {
    //content = {text: string,pressFunc: fucntion, iconName: string, iconColor: string,hex-color,}
    /*
    pressFunc = ({prams...}) => {work}
    */
    return (
        <TouchableOpacity style={pmContentStyles.listButton} onPress={content.pressFunc}>
            <Icon name={content.iconName} size={21.5} color={content.iconColor} />
            <Text style={pmContentStyles.text}>{content.text}</Text>
        </TouchableOpacity>
    );
};

const pmContentStyles = StyleSheet.create({
    listButton: {
        backgroundColor: '#313131',
        borderWidth: 1,
        borderColor: '#646464',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        borderRadius: 4,
        flexDirection: 'row',
        paddingVertical: 12.5,
        paddingStart: 12.5,
    },
    text: {
        color: 'white',
        marginStart: 17.5,
        fontSize: 21.5,
    },
})

export default PostModalContent;