import React, {useState}from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DeleteModal from './DeleteModal';

const PostModal = ({modalVisible,setModalVisible,post}) => {
    const [delModalVisible,setDelModalVisible]=useState(false);
    const navigation = useNavigation();
    return(
    <Modal
        animationType="fade"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => {
            setModalVisible(!modalVisible);
        }}
    >
        <TouchableWithoutFeedback onPress={()=>{setModalVisible(!modalVisible)}}>
        <View style={postModalStyles.exContainer}>
        <TouchableOpacity style={postModalStyles.listButton}>
            <Text style={postModalStyles.text}>수정하기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={postModalStyles.listButton} onPress={()=>{ setDelModalVisible(!delModalVisible);}}>
            <Text style={postModalStyles.text}>삭제하기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={postModalStyles.listButton} onPress={()=>{navigation.navigate('Report', { title: post.title });}}>
            <Text style={postModalStyles.text}>신고하기</Text>
        </TouchableOpacity>
        </View>
        </TouchableWithoutFeedback>
        <DeleteModal 
        delModalVisible={delModalVisible} setDelModalVisible={setDelModalVisible}
        modalVisible={modalVisible} setModalVisible={setModalVisible}
        />
    </Modal>
    );

};

const postModalStyles = StyleSheet.create({
    exContainer : {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: "#252525c0",
    },
    listButton : {
        backgroundColor:'#313131',
        borderWidth:1,
        borderColor:'#646464',
        alignItems:'center',
        justifyContent:'center',
        width:'72.5%'
    },
    text: {
        color:'white',
        marginVertical:12.5,
        fontSize:20,

    },
});

export default PostModal;