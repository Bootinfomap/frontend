import React, { useState, useRef } from 'react';
import {
  View,
  Modal,
  TouchableWithoutFeedback,
  Animated,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import NaverMapView from 'react-native-nmap';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setLocation } from '../reducers/location.reducer';
import MarkerView from '../components/MarkerView';
import DrawerFilter from '../components/DrawerFilter';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PostListItem from '../components/PostListItem';
import { PostType } from '../components/_type/generalType';

const Preview = ({ visible, setVisible, post }) => {
  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={() => {
        setVisible(!visible);
      }}>
      <TouchableWithoutFeedback onPress={() => setVisible(!visible)}>
        <View style={styles1.container}>
          <View style={styles1.empty} />
          <View style={styles1.inner}>
            <PostListItem post={post} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

//직접 nmap의 index.tsx 가보니 onTouch가 ()=>void type이라 빨근줄이 뜹니다
export default function MapScreen() {
  const data = useAppSelector(state => state.post.posts);
  const dispatch = useAppDispatch();
  const [visible, setVisible] = useState<boolean>(false);
  const [post, setPost] = useState<PostType>({
    latitude: 0,
    like: 0,
    longitude: 0,
    dislike: 0,
    id: '',
    category: '',
    title: '',
    userid: '',
  });
  const height: number = Dimensions.get('screen').height;
  const width: number = Dimensions.get('screen').width;

  const sideAni = useRef<Animated.Value>(new Animated.Value(width)).current;
  const sideAppear = () => {
    Animated.timing(sideAni, {
      toValue: 0,
      duration: 700,
      useNativeDriver: true,
    }).start();
  };
  const sideDisappear = () => {
    Animated.spring(sideAni, {
      toValue: width,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View>
      <NaverMapView
        style={{ width: '100%', height: '100%' }}
        showsMyLocationButton={true}
        center={{ ...{ latitude: 37.564362, longitude: 126.977011 }, zoom: 16 }}
        onCameraChange={e => {
          dispatch(setLocation({ latitude: e.latitude, longitude: e.longitude }));
        }}
        onMapClick={e => console.warn('onMapClick', JSON.stringify(e))}
        useTextureView>
        {data.map((item, ix) => (
          <MarkerView
            key={ix}
            location={{ latitude: item.latitude, longitude: item.longitude }}
            desc={'Marker'}
            data={item}
            onClick={() => {
              setVisible(true);
              setPost(item);
            }}
          />
        ))}
      </NaverMapView>
      <Modal animationType="slide" transparent visible={visible}>
        <TouchableWithoutFeedback
          onPress={() => {
            console.log('before', visible);
            setVisible(false);
            console.log('after', visible);
          }}>
          <View style={styles1.container}>
            <View style={styles1.empty} />
            <View style={styles1.inner}>
              <PostListItem post={post} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <DrawerFilter sideDisappear={sideDisappear} sideAni={sideAni} />
      <TouchableOpacity
          onPress={sideAppear}
          style={[
            styles(width, height).filterButtonStyle,
            {
              shadowColor: '#000',
              shadowOffset: {
                width: 2,
                height: 2,
              },
              shadowOpacity: 0.7,
              shadowRadius: 3.84,
              elevation: 5,
            },
          ]}>
          <Icon name={'filter'} size={width * 0.06} color={'#fff'} />
        </TouchableOpacity>
    </View>
  );
}

const styles1 = StyleSheet.create({
  empty: {
    flex: 0.7,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  inner: {
    flex: 0.3,
    backgroundColor: '#ffffff',
    borderColor: 'black',
    borderWidth: 1
  },
});
const styles = (width: number, height: number) =>
  StyleSheet.create({
    filterButtonStyle: {
      position: 'absolute',
      right: width * 0.1,
      bottom: height * 0.05,
      backgroundColor: '#0092ff',
      opacity: 0.8,
      width: width * 0.15,
      height: width * 0.15,
      borderRadius: width * (0.15 / 2),
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
