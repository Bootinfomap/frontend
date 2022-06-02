import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    TouchableWithoutFeedback,
    Animated,
    Text,
} from 'react-native';
import EachFilterButton from './EachFilterButton';
import { List, Headline, } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { initFilter } from '../reducers/filter.reducer';
//import FilterTitle from './FilterTitle';
interface DrawerProps {
    sideDisappear: () => void,
    sideAni: Animated.Value,
}


const DrawerFilter = ({ sideDisappear, sideAni }: DrawerProps) => {

    useEffect(() => {
        sideDisappear();
    }, []);

    const categorys: Array<string> = ['음식', '위험', '인물', '기타1', '기타2'];

    const filter = useAppSelector(state => state.filter);
    const dispatch = useAppDispatch();

    const apply = () => {
        console.log(filter.item);
        sideDisappear();
    }

    return (
        <Animated.View style={[styles.exContainer, {
            transform: [{ translateX: sideAni }]
        }]}>
            <TouchableWithoutFeedback onPress={sideDisappear}>
                <View style={styles.voidContainer} />
            </TouchableWithoutFeedback>
            <View style={styles.drawer}>
                <View>
                    <Headline style={styles.header}>필터</Headline>
                    <View style={styles.subHeader}>
                        <Text style={{ fontSize: 17.5, fontWeight: '700' }}>선택해주세요!</Text>
                    </View>
                    <View style={styles.buttonArea}>
                        {categorys.map((category, i) => (
                            <EachFilterButton key={i} category={category} />
                        ))}
                    </View>
                </View>
                <List.Section style={styles.section}>
                    <List.Item
                        title="적용하기"
                        left={() => <List.Icon color="#000" icon="check" />}
                        onPress={apply}
                    />
                    <List.Item
                        title="초기화하기"
                        left={() => <List.Icon color="#000" icon="sync" />}
                        onPress={() => { dispatch(initFilter()) }}
                    />
                    <List.Item
                        title="나가기"
                        left={() => <List.Icon color="#000" icon='logout' />}
                        onPress={sideDisappear}
                    />
                </List.Section>
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
    header: {
        marginStart:20,
        marginTop: 17.5
    },
    subHeader: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 17.5,
        paddingStart: 20,
    },
    buttonArea: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    section: {
        flex: 1,
        justifyContent:'flex-end',
    },
})

export default DrawerFilter;