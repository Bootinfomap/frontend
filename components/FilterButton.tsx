import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import TwoFilterButton from './TwoFilterButton';
import { List } from 'react-native-paper';

const FilterButton = ({ filteringItem, setFilteringItem, }) => {
    const categoryPairs = [
        { id: 0, left: "음식", right: "위험" }, { id: 1, left: "인물", right: "기타1" }, { id: 2, left: "기타2", right: null },
    ]

    return (
        <View style={styles.buttons}>
            <View style={styles.subHeader}>
                <Text style={{ fontSize: 17.5, fontWeight: '700' }}>선택해주세요!</Text>
            </View>
            {categoryPairs.map((twoCategory) => (
                <TwoFilterButton
                    key={twoCategory.id}
                    twoCategory={twoCategory}
                    filteringItem={filteringItem}
                    setFilteringItem={setFilteringItem}
                />))}
        </View>
    )
}
const styles = StyleSheet.create({
    buttons: {
        flex: 1,

    },
    subHeader: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 17.5,
        paddingStart: 30,
    },
})

export default FilterButton;