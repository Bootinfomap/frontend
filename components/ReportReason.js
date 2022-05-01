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
    return (
        <View style = {reportStyles.container}>
            <Text>신고 사유</Text>
            <Picker
            selectedValue={reason}
            onValueChange={(itemValue, itemIndex) =>
            setReason(itemValue)
            }>
                <Picker.Item label="거짓된 내용" value="거짓된 내용" />
                <Picker.Item label="불쾌한 내용" value="불쾌한 내용" />
                <Picker.Item label="도배 및 중복" value="도배 및 중복" />
                <Picker.Item label="직접입력" value="" />
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
            <TouchableOpacity style={reportStyles.button} onPress={()=>{navigation.goBack();}}>
                <Text>신고하기</Text>
            </TouchableOpacity>
        </View>
    )
};

const reportStyles = StyleSheet.create({
    container : {
        flex: 1,
    },
    select : {

    },
    input: {
        flex: 4,
    },
    button:{

    },

});


export default ReportReason;