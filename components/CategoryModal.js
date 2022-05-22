import React, { useState } from "react";
import {
    View,
    Modal,
    StyleSheet,
    TouchableWithoutFeedback,
} from 'react-native'
import { List, RadioButton,Card,Title,Button } from "react-native-paper";
import Icon from 'react-native-vector-icons';

const CategoryModal = ({ cateModalVisible, setCateModalVisible, setNewCateItem }) => {
    const [value, setValue] = useState('first');
    return (
        <Modal
            animationType='fade'
            visible={cateModalVisible}
            transparent={true}
            onRequestClose={() => {
                setCateModalVisible(!cateModalVisible);
            }}>
            <TouchableWithoutFeedback onPress={() => { setCateModalVisible(!cateModalVisible) }}>
                <View style={styles.exContainer}>
                    <View style={styles.mainbox}>
                        <Card>
                            <Card.Title title="카테고리" subtitle="어떤 일이 일어나나요?" />
                            <Card.Content>
                                <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                                    <RadioButton.Item label="음식" value="first" />
                                    <RadioButton.Item label="위험" value="second" />
                                    <RadioButton.Item label="인물" value="third" />
                                    <RadioButton.Item label="기타1" value="fourth" />
                                    <RadioButton.Item label="기타2" value="fifth" />
                                </RadioButton.Group>
                            </Card.Content>
                            <Card.Actions
                                style={{
                                    padding: 7.5,
                                    alignItems: 'center',
                                    justifyContent: 'space-around',
                                }}>
                                <Button
                                    mode='outlined'
                                    style={{ flex: 1, alignItens: 'center', justifyContent: 'center', margin:4, }}
                                    labelStyle={{ color: 'black' }}
                                    onPress={() => { setCateModalVisible(!cateModalVisible) }}>
                                    선택하기!
                                </Button>
                                <Button
                                    mode='outlined'
                                    style={{ flex: 1, alignItens: 'center', justifyContent: 'center' ,margin: 4,}}
                                    labelStyle={{ color: 'black' }}
                                    onPress={() => { setCateModalVisible(!cateModalVisible) }}>
                                    나가기
                                </Button>
                            </Card.Actions>
                        </Card>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
};




const styles = StyleSheet.create({
    exContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#252525c0",
    },
    mainbox: {
        textAlign: 'center',
        justifyContent: 'center',
        width: '70%',
        backgroundColor: 'white',
        borderRadius: 7,
    },
    title:{
        margin: 8,
        fontSize: 17.5,
      },
})

export default CategoryModal;