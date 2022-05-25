import { produceWithPatches } from 'immer';
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    TouchableWithoutFeedback,
    Animated,
} from 'react-native';
import FilterButton from './FilterButton';
import FilterConfirm from './FilterConfirm';
//import FilterTitle from './FilterTitle';
interface DrawerProp{
    sideDisappear: () => void,
    sideAni: Animated.Value,
}


const DrawerFilter = ({ sideDisappear, sideAni }: DrawerProp) => {
    const [filteringItem, setFilteringItem] = useState<(string | null)[]>([]);//필터링할 카테고리들
    useEffect(() => {
        sideDisappear();
    }, [])

    return (
        <Animated.View style={[styles.exContainer, {
            transform: [{ translateX: sideAni }]
        }]}>
            <TouchableWithoutFeedback onPress={sideDisappear}>
                <View style={styles.voidContainer} />
            </TouchableWithoutFeedback>
            <View style={styles.drawer}>
                <FilterButton
                    filteringItem={filteringItem}
                    setFilteringItem={setFilteringItem}
                />
                <FilterConfirm
                    filteringItem={filteringItem}
                    setFilteringItem={setFilteringItem}
                    sideDisappear={sideDisappear}
                />
            </View>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    exContainer: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        flexDirection: 'row',
    },
    voidContainer: {
        opacity: 0,
        width: '35%',

    },
    drawer: {
        backgroundColor: 'white',
        width: '65%',
    },
})

export default DrawerFilter;