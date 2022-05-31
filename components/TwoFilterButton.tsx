import React from 'react';
import {
    View,
} from 'react-native';
import EachFilterButton from './EachFilterButton';

type CatePair = {id:number, left:string|null,right:string|null}; 

interface TwoButtonProps{
    twoCategory: CatePair,
    filteringItem: (string | null)[],
    setFilteringItem: (item: (string | null)[]) => void,
}



const TwoFilterButton = ({ twoCategory, filteringItem, setFilteringItem, }: TwoButtonProps) => {
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