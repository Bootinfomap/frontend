import React, {useState, useRef, useEffect}from 'react';
import {
  StyleSheet,
} from 'react-native';
import { List } from 'react-native-paper';

interface ConfirmProps{
  filteringItem: (string | null)[],
  sideDisappear: ()=>void,
  setFilteringItem?: (item: (string | null)[]) => void,
  
}

const FilterConfirm = ({filteringItem,sideDisappear}:ConfirmProps) => {
  
  const apply = () => {
    console.log(filteringItem);
    sideDisappear();
  }
  return (
    <List.Section style={styles.section}>
      <List.Item
        title="적용하기"
        left={() => <List.Icon color="#000" icon="check" />}
        onPress={apply}
      />
      <List.Item
        title="초기화하기"
        left={() => <List.Icon color="#000" icon="sync" />}
        onPress={()=>{console.log('초기화')}}
      />
      <List.Item
        title="나가기"
        left={() => <List.Icon color="#000" icon='logout' />}
        onPress={sideDisappear}
      />
    </List.Section>
  )
}

const styles = StyleSheet.create({
    section: {
      flex: 1,
    },
})


export default FilterConfirm;