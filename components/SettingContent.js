import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const SettingContent = ({ content }) => {

    return (
        <TouchableOpacity onPress={content.contentFunc} style={listStyles(content.contentColor).list}>
            <Icon name={content.iconName} size={22.5} color={content.iconColor} />
            <View style={listStyles(content.contentColor).textContainer}>
                <Text style={listStyles(content.contentColor).text}>{content.contentName}</Text>
            </View>
        </TouchableOpacity>
    );
};

const listStyles = (textColor) => StyleSheet.create({
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
        color: textColor,
        marginStart: 15,
        fontSize: 22.5,
        fontWeight: '800',
    },
    textContainer: {
        justifyContent: 'flex-start',
    },
})
export default SettingContent;