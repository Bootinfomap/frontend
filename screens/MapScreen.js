import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import NaverMapView from 'react-native-nmap';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {setLocation} from '../reducers/location.reducer';
import MarkerView from '../components/MarkerView';
import DrawerFilter from '../components/DrawerFilter';
import { sideAppear } from '../const/FilterAnimation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

export default function MapScreen() {
  const data = useAppSelector(state => state.post.posts);
  const dispatch = useAppDispatch();
  const height = Dimensions.get('screen').height;
  const width = Dimensions.get('screen').width;
 

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
          <MarkerView key={ix} location={{latitude:item.latitude, longitude:item.longitude}} desc={'Marker'} />
        ))}
      </NaverMapView>
      <TouchableOpacity
        onPress={sideAppear}
        style={[
          styles(width, height).filterButtonStyle,
          {
            shadowColor: "#000",
            shadowOffset: {
              width: 2,
              height: 2, 
            },
            shadowOpacity: 0.7,
            shadowRadius: 3.84,
            elevation: 5,
          }
        ]}>
        <Icon name={'filter'} size={width*0.06} color={'#fff'}/>
      </TouchableOpacity>
      <DrawerFilter/>
    </View>
  );
}

const styles = (width, height) => StyleSheet.create({
  filterButtonStyle: {
    position: 'absolute',
    right: width * (0.1),
    bottom: height * (0.1),
    backgroundColor: '#0092ff',
    opacity: 0.8,
    width: width * (0.15),
    height: width * (0.15),
    borderRadius: width * (0.15 / 2),
    alignItems: 'center',
    justifyContent: 'center',
  }
})
