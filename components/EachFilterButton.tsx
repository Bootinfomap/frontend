import React, { useState, useRef, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
//import { ease } from 'react-native/Libraries/Animated/Easing';

interface EachButtonProp {
    category: string|null,
    filteringItem: (string | null)[],
    setFilteringItem: (item: (string | null)[]) => void,
}

const EachFilterButton = ({ category, filteringItem, setFilteringItem, }: EachButtonProp) => {

    const [eachIsPress, setEachIsPress] = useState(false);

    if (category == null) {
        return (
            <View style={styles('white').button}>
            </View>
        )
    }//if category is null, returns empty area
    //{press: boolen ,category:string} or null
    const buttonHandle = () => {
        if (eachIsPress == true) {
            setFilteringItem(filteringItem.filter(item => item !== category))
        }//눌려있으면 지우기
        else {
            let temp = [...filteringItem];
            temp.push(category);
            setFilteringItem(temp);
        }//안눌려있으면 추가하기
        setEachIsPress(!eachIsPress);
        //버튼상태바꾸기
    }

    return (
        <TouchableOpacity style={eachIsPress ? styles('green').button : styles('#313131').button} onPress={buttonHandle}>
            <Text style={styles('#fff').text}>{category}</Text>
        </TouchableOpacity>
    )
}

const styles = (buttonColor: string) => StyleSheet.create({
    button: {
        backgroundColor: buttonColor,
        borderRadius: 10,
        paddingVertical: 4,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        flex: 1,
        marginVertical: 3,
    },
    text: {
        color: 'white',
        fontSize: 15,
    },
})

export default EachFilterButton;