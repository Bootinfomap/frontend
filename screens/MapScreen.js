import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import NaverMapView from 'react-native-nmap';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {setLocation} from '../reducers/location.reducer';
import MarkerView from '../components/MarkerView';
import Geolocation from 'react-native-geolocation-service';

export default function MapScreen() {
  const data = useAppSelector(state => state.post.posts);
  const dispatch = useAppDispatch();

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
    </View>
  );
}
