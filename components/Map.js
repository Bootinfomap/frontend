import React, {useState} from 'react';
import {View} from 'react-native';
import NaverMapView, {Marker} from 'react-native-nmap';
import {useAppDispatch} from '../app/hooks';
import {setLocation} from '../reducers/location.reducer';

export default function Map() {
  const [data, setData] = useState([
    {latitude: 37.564362, longitude: 126.977011},
    {latitude: 37.565051, longitude: 126.978567},
    {latitude: 37.565383, longitude: 126.976292},
  ]);
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
        {data.map((value, ix) => {
          return (
            <Marker
              key={ix}
              coordinate={value}
              onClick={() => console.warn(`onClick! p${ix}`)}
            />
          );
        })}
      </NaverMapView>
    </View>
  );
}
