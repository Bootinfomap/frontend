import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import PostModal from './PostModal';
import { PostType } from './_type/generalType';
import { useNavigation } from '@react-navigation/native';
import { BottomTabParamList } from './_type/generalType'
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

interface PostListItemProps {
  post: PostType,
}

interface LikeType {
  num: number,
  already: boolean,
}

type MapScreenProp = BottomTabScreenProps<BottomTabParamList, 'Map'>;

const PostListItem = ({ post }: PostListItemProps) => {

  const navigation = useNavigation<MapScreenProp>();

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [likeNum, setLikeNum] = useState<LikeType>({ num: post.like, already: false });
  const [dislikeNum, setDislikeNum] = useState<LikeType>({ num: post.dislike, already: false });
  const setPrefer = (likeORdislike: LikeType, setlike: Function) => {
    if (likeORdislike.already == true) {
      setlike({ num: likeORdislike.num - 1, already: !likeORdislike.already })
    }
    else {
      setlike({ num: likeORdislike.num + 1, already: !likeORdislike.already })
    }
  };

  const itemTouch = () => {
    //navigation.navigate('Map',{position: {latitude: post.latitude, longitude: post.longitude}});
    console.log('touch listItem');
  }

  const [postAddr, setPostAddr] = useState<string>();

  const stringLatitude: string = post.latitude.toString();
  const stringLongitude: string = post.longitude.toString();

  const apiHost: string = 'https://dapi.kakao.com';
  const apiCategory: string = '/v2/local/geo/coord2regioncode';
  const apiUrlFormat: string = '.json?' + 'x=' + stringLongitude + '&y=' + stringLatitude + '&input_coord=WGS84';
  //포맷 + longitude + latitude + 좌표계형식
  const apiUrl: string = apiHost + apiCategory + apiUrlFormat;
  const RESTAPIKEY: string = '4b97cfb039b6b9901e063590d17848a2';


  useEffect(() => {
    fetch(apiUrl, {
      headers: new Headers({ 'Authorization': 'KakaoAK ' + RESTAPIKEY })
    })
      .then((response) => response.json())
      .then((data) => setPostAddr(data.documents[0].region_2depth_name))
      .catch((error) => console.log("error:", error));
  }, []);
/*
 "region_1depth_name": "서울특별시", 
 "region_2depth_name": "중구", 
 "region_3depth_name": "태평로2가", 
 "region_4depth_name": ""
 */
//documents[0]: 행정동, documents[1]:법정동,



  return (
    <View style={postListStyles.exexContainer}>
      <TouchableOpacity style={postListStyles.exContainer} onPress={itemTouch}>
        <View style={postListStyles.inContainer}>
          <Text style={postListStyles.agoNuserid}>
            {postAddr}
          </Text>
          <Text style={postListStyles.agoNuserid}>
            severTime - postTime
          </Text>
        </View>
        <View style={postListStyles.inContainer}>
          <Text style={postListStyles.category}>
            {post.category}
          </Text>
          <Text style={postListStyles.title}>
            {post.title}
          </Text>
        </View>
        <View style={postListStyles.likeContainer}>
          <TouchableOpacity style={postListStyles.likeNdislike} onPress={() => { setPrefer(likeNum, setLikeNum); }}>
            <Text>👍 : {likeNum.num}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={postListStyles.likeNdislike} onPress={() => { setPrefer(dislikeNum, setDislikeNum) }}>
            <Text>👎 : {dislikeNum.num}</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={postListStyles.settingArea} onPress={() => { setModalVisible(!modalVisible) }}>
        <Text style={postListStyles.settingText}>⚒</Text>
      </TouchableOpacity>
      <PostModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        post={post}
      />
    </View>
  );
};

const postListStyles = StyleSheet.create({
  inContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  exContainer: {
    flex: 9.5,
    alignItems: 'flex-start',
  },
  exexContainer: {
    flex: 1,
    borderBottomColor: '#727272',
    borderBottomWidth: 0.75,
    flexDirection: 'row'
  },
  likeContainer: {
    flex: 1,
    flexDirection: 'row',

  },
  likeNdislike: {
    fontWeight: 'bold',
    fontSize: 15,
    marginVertical: 5,
    marginLeft: 20,
    color: 'black',
  },
  title: {
    flex: 5,
    fontWeight: '500',
    fontSize: 20,
    marginVertical: 20,
    marginLeft: 10,
    width: 100,
    color: 'black',
    marginRight: 10,
  },
  category: {
    fontSize: 20,
    marginVertical: 20,
    marginLeft: 10,
    width: 35,
    height: 35,
    color: 'black',
    borderColor: '#073763',
    borderWidth: 1,
    textAlign: 'center',
    justifyContent: 'center',
  },
  agoNuserid: {
    fontSize: 15,
    marginVertical: 5,
    marginLeft: 20,
    color: '#444444',
  },
  settingArea: {
    flex: 0.5,
    borderColor: '#727272',
    borderLeftWidth: 0.55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#2b2b2b',
  },
});


export default PostListItem;  