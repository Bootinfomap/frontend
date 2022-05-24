import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { SettingContentType } from './_type/generalType';

interface SettingProp {
    content:SettingContentType,
}

const SettingContent = ({ content }:SettingProp) => {
    return (
        <TouchableOpacity onPress={content.contentFunc} style={listStyles().list}>
            <Icon name={content.iconName} size={22.5} />
            <View style={listStyles().textContainer}>
                <Text style={listStyles().text}>{content.contentName}</Text>
            </View>
        </TouchableOpacity>
    );
};

const listStyles = () => StyleSheet.create({
    list: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingVertical: 13.5,
        paddingHorizontal: 15,
        borderColor: '#696969',
        borderBottomWidth: 1,
        alignItems: 'center',
    },
    text: {
        marginStart: 15,
        fontSize: 22.5,
        fontWeight: '800',
    },
    textContainer: {
        justifyContent: 'flex-start',
    },
})
export default SettingContent;