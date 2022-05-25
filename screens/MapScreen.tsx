import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Modal,
  Text,
  TouchableWithoutFeedback,
  Animated,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import NaverMapView from 'react-native-nmap';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {setLocation} from '../reducers/location.reducer';
import MarkerView from '../components/MarkerView';
import DrawerFilter from '../components/DrawerFilter';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Geolocation from 'react-native-geolocation-service';
import PostListItem from '../components/PostListItem';
//직접 nmap의 index.tsx 가보니 onTouch가 ()=>void type이라 빨근줄이 뜹니다
export default function MapScreen() {
  const data = useAppSelector(state => state.post.posts);
  const dispatch = useAppDispatch();
  const [visible, setVisible] = useState<boolean>(false);
  const [post, setPost] = useState({});
  const height:number = Dimensions.get('screen').height;
  const width:number = Dimensions.get('screen').width;

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
        style={{width: '100%', height: '100%'}}
        showsMyLocationButton={true}
        center={{...{latitude: 37.564362, longitude: 126.977011}, zoom: 16}}
        onTouch={e => console.warn('onTouch', JSON.stringify(e.nativeEvent))}
        onCameraChange={e => {
          dispatch(setLocation({latitude: e.latitude, longitude: e.longitude}));
        }}
        onMapClick={e => console.warn('onMapClick', JSON.stringify(e))}
        useTextureView>
        {data.map((item, ix) => (
          <MarkerView
            key={ix}
            location={{latitude: item.latitude, longitude: item.longitude}}
            desc={'Marker'}
            data={item}
            onClick={() => {
              setVisible(true);
              setPost(item);
            }}
          />
        ))}
        {visible && (
          <Modal animationType="slide" transparent>
            <View style={styles1.empty}></View>
            <TouchableWithoutFeedback
              onPress={() => setVisible(!visible)}
              style={{flex: 1, backgroundColor: 'yellow'}}>
              <View style={styles1.container}>
                <PostListItem post={post} />
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        )}
      </NaverMapView>
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
      <DrawerFilter sideDisappear={sideDisappear} sideAni={sideAni} />
    </View>
  );
}

const styles1 = StyleSheet.create({
  empty: {
    flex: 0.7,
  },
  container: {
    flex: 0.3,
    backgroundColor: '#ffffff',
    justifyContent: 'flex-end',
    flexDirection: 'column-reverse',
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
