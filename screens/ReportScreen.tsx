import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
} from 'react-native';
import ReportReason from '../components/ReportReason';
import {RootStackParamList} from '../components/_type/navigationType';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type ReportScreenProp = NativeStackScreenProps<RootStackParamList,'Report'>;


const ReportScreen = ({route,navigation}:ReportScreenProp) => {
    let reportThing = route.params.title;
    let textVal = '';
    if (reportThing.length > 12){
        textVal = reportThing.substring(0,10) + '...';
    }
    else {
        textVal = reportThing;
    }
    
   //control this with post id and redux
    return(
        <SafeAreaView style = {reportStyles.container}>
            <View style = {reportStyles.card}>
                <Text style={reportStyles.purpose}>신고 내용</Text>
                <Text style={reportStyles.title}>{textVal}</Text>
                <ReportReason/>
            </View>
        </SafeAreaView>
    );
};
//<Text style={reportStyles.appTitle}>R E P O R T</Text>
const reportStyles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#b53e04',
    },
    appTitle: {
        color: '#fff',
        fontSize: 25,
        marginTop: 20,
        marginBottom: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#b53e04',
    },
    card: {
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 12.5,
    },
    purpose:{
        fontSize: 25,
        marginVertical: 5,
        color: 'black',
        fontWeight: 'bold',
    },
    title:{
        fontSize: 20,
        marginVertical: 5,
    },
});

export default ReportScreen;