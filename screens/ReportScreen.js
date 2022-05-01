import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
} from 'react-native';
import ReportReason from '../components/ReportReason';

const ReportScreen = ({route}) => {
    
    const textVal = '';
    if (route.param.title.length > 12){
        textVal = route.params.title.substring(0,10) + '...';
    }
    else {
        textVal = route.params.title;
    }
    
    return(
        <SafeAreaView style = {reportStyles.container}>
            <Text style={reportStyles.appTitle}>R E P O R T</Text>
            <View style = {reportStyles.card}>
                <Text>신고 내용</Text>
                <Text>textval</Text>
                <ReportReason/>
            </View>
        </SafeAreaView>
    );
};

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
    },
});

export default ReportScreen;