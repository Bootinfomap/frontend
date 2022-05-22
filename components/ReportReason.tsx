import React, {useState}from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
const ReportReason = () => {
    const [reason,setReason] = useState('');
    const navigation = useNavigation();
    const [temp,setTemp] = useState();
    return (
        <View style = {reportStyles.container}>
            <Text style= {reportStyles.purpose}>신고 사유</Text>
            <Picker
            style ={reportStyles.select}
            selectedValue={temp}
            onValueChange={(itemValue, itemPosition) => {setReason(itemValue); setTemp(itemValue);}
            }>
                <Picker.Item label="직접입력" value="" />
                <Picker.Item label="거짓된 내용" value="거짓된 내용" />
                <Picker.Item label="불쾌한 내용" value="불쾌한 내용" />
                <Picker.Item label="도배 및 중복" value="도배 및 중복" />
            </Picker>            
            <TextInput
            style={reportStyles.input}
            autoCorrect={false}
            placeholderTextColor={'#999'}
            placeholder={'사유를 선택 또는 입력해주세요.'}
            maxLength={200}
            multiline={true}
            value={reason}
            onChangeText={(text)=>{setReason(text)}}  
            />
            <View style={{wigth: '85%', height: '12.5%', alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity style={reportStyles.button} onPress={()=>{navigation.goBack();}}>
                <Text style={reportStyles.buttonText}>신 고 하 기</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
};

const reportStyles = StyleSheet.create({
    container : {
        flex: 1,
        borderTopWidth: 0.75,
        borderColor: '#5c5c5c',
        marginTop: 5,
    },
    purpose : {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    select : {
        borderWidth: 2,
        borderColor: '#575757',
    },
    input: {
        flex: 1,
        borderColor: '#dddddd',
        borderWidth: 0.5,
    },
    button:{
        borderColor: '#7c7c7c',
        borderWidth: 2,
        backgroundColor: '#313131',
        alignItems: 'center',
        justifyContent: 'center',
        width:'90%',
        height:'90%',
        borderRadius:10,
    },
    buttonText:{
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },

});


export default ReportReason;