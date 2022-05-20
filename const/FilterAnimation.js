import { Animated, Dimensions} from 'react-native';
import React, { useState, useRef, useEffect } from 'react';

const totWidth = Dimensions.get('screen').width;
const totHeight = Dimensions.get('screen').height;

const sideAni = useRef(new Animated.Value(totWidth)).current;
const sideAppear = () => {
    Animated.timing(sideAni, {
        toValue: 0,
        duration: 700,
        useNativeDriver: true
    }).start();
};
const sideDisappear = () => {
    Animated.spring(sideAni, {
        toValue: totWidth,
        duration: 1000,
        useNativeDriver: true
    }).start();
};

export {sideAni,sideAppear,sideDisappear};