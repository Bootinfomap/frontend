import React, {useState, useRef, useEffect}from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Animated,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';



const FilterTitle = () => {
    return (
        <LinearGradient
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            colors={['#006cff', '#0092ff', '#5dd3ff']}
            style={styles.background}>
            <Text style={styles.text}>  필터</Text>
        </LinearGradient>
    )
}

const styles =  StyleSheet.create({
    background: {
        paddingVertical: 25,
        paddingStart: 20,
        justifyContent:'center',
    },
    text: {
        color:'white',
        fontWeight:'700',
        fontSize: 20,
    }
})


export default FilterTitle;