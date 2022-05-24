import React from 'react';
import {
    View,
} from 'react-native';
import EachFilterButton from './EachFilterButton';

const TwoFilterButton = ({ twoCategory, filteringItem, setFilteringItem, }) => {
    return (
        <View style={{
            flexDirection: 'row',
            paddingVertical: 4,
            paddingHorizontal: 10,
        }}>
            <EachFilterButton
                category={twoCategory.left}
                filteringItem={filteringItem}
                setFilteringItem={setFilteringItem}
            />
            <EachFilterButton
                category={twoCategory.right}
                filteringItem={filteringItem}
                setFilteringItem={setFilteringItem}
            />
        </View>
    )
}



export default TwoFilterButton;