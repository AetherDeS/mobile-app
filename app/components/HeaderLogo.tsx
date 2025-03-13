import React from 'react';
import {View, Text, Image} from 'react-native';

export default function HeaderAppTitle(){
    return (
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
            <Image
            source={require('@/assets/images/logo.svg')}
            style={{}}/>
            <Text style={{fontFamily: 'Comfortaa', fontSize: 24, marginLeft: 8, marginTop: 2, color: "#fff"}}>InternQuest</Text>
        </View>
    );
};
