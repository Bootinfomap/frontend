import React, {useState, useEffect} from 'react';
import {
  View,
  Modal,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import NaverMapView from 'react-native-nmap';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {setLocation} from '../reducers/location.reducer';
import MarkerView from '../components/MarkerView';
import Geolocation from 'react-native-geolocation-service';
import PostListItem from '../components/PostListItem';
import PostModal from '../components/PostModal';

export default function MapScreen() {
  const data = useAppSelector(state => state.post.posts);
  const dispatch = useAppDispatch();
  const [visible, setVisible] = useState(false);
  const [post, setPost] = useState({});

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
      </NaverMapView>
      {visible && (
        <Modal animationType="slide" transparent>
          <View style={styles.empty}>
          </View>
          <TouchableWithoutFeedback
            onPress={() => setVisible(!visible)}
            style={{flex:1, backgroundColor: 'yellow'}}>
            <View style={styles.container}>
              <PostListItem post={post} />
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  empty:{
    flex:0.7,
  },
  container: {
    flex: 0.3,
    backgroundColor: '#ffffff',
    justifyContent: 'flex-end',
    flexDirection:'column-reverse'
  },
});
