import React from 'react';
import { View } from 'react-native';
import { Form } from "@/app/components/FormNews";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HeaderAppTitle from '../components/HeaderLogo';

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: '#444'}}>
        <HeaderAppTitle/>
    </View>
  );
}