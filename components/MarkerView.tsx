import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Marker} from 'react-native-nmap';
import {useAppSelector} from '../app/hooks';
import {LocationType} from './_type/generalType';
import {PostType} from './_type/generalType';

interface MarkerViewProps {
  desc: string;
  location: LocationType;
  data: PostType;
  onClick: () => void;
}

export default function MarkerView({
  location,
  desc,
  data,
  onClick,
}: MarkerViewProps) {
  const posts = useAppSelector(state => state.post.posts);
  return (
    <View>
      <Marker coordinate={location} />
      <Marker
        coordinate={location}
        width={80}
        height={80}
        onClick={() => {
          for (var post of posts) {
            if (post.id === data.id) {
              console.log(post);
              onClick();
            }
          }
        }} />
        <View style={styles.block}>
          <Text style={styles.text}>{desc}</Text>
        </View>
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
