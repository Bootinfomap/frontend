import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'

const SettingContent = ({content}) => {
    return(
        <TouchableOpacity onPress = {()=>{content.contentFunc}} style={listStyles(content.contentColor).list}>
            <Icon name={content.iconName} size= {26.5} color={content.iconColor}/>
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
        backgroundColor:'white',
        paddingVertical: 17.5,
        paddingHorizontal: 5,
        borderColor:'#696969',
        borderBottomWidth:1,
    },
    text: {
        color:textColor,
        marginStart: 10,
        fontSize:26.5,
        fontWeight:'800',
    },
    textContainer: {
        justifyContent: 'flex-start',
    },
})
export default SettingContent;