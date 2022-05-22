import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Marker} from 'react-native-nmap';
import { useAppSelector } from '../app/hooks';

export default function MarkerView({location, desc, data, onClick}) {
  const posts = useAppSelector(state=>state.post.posts)
  return (
    <View>
      <Marker coordinate={location} />
      <Marker coordinate={location} width={80} height={80} onClick={()=>{
        for(var post of posts){
          if(post.id === data.id){
            console.log(post)
            onClick()
          }
        }

      }}>
        <View style={styles.block}>
          <Text style={styles.text}>{desc}</Text>
        </View>
      </Marker>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    backgroundColor: 'rgba(128,128,255,0.8)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});
