import React, { useEffect, useState} from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import { useAppDispatch, useAppSelector} from '../app/hooks';
import { addFilter, removeFilter } from '../reducers/filter.reducer';
//import { ease } from 'react-native/Libraries/Animated/Easing';

interface EachButtonProps {
    category: string,
}

const EachFilterButton = ({ category }: EachButtonProps) => {
    const filter = useAppSelector(state => state.filter);
    const dispatch = useAppDispatch();

    const [buttonColor,setButtonColor] = useState('#313131');

    useEffect(() => {
        filter.isPress[category as keyof typeof filter.isPress] ? setButtonColor('green') : setButtonColor('#313131');
      },[filter.isPress]);

    const buttonHandler = () => {
        filter.isPress[category as keyof typeof filter.isPress] ? dispatch(removeFilter(category)) : dispatch(addFilter(category));
        console.log(filter.isPress[category as keyof typeof filter.isPress]);
    }

    return (
        <TouchableOpacity 
        style= {styles(buttonColor).button}
        onPress={buttonHandler}>
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
        marginHorizontal: 15,
        marginVertical: 10,
    },
    text: {
        color: 'white',
        fontSize: 15,
    },
})

export default EachFilterButton;