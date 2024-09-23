import React from 'react';
import { View } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CalendarScreen = () => {
  return (
    <View style={{ flex: 1,paddingTop:15, backgroundColor:'#5DB075' }}>
      <Calendar 
        style={{width:'100%', height:'90%'}}
        current={'2024-09-18'}
      />
    </View>
  );
};


export default CalendarScreen;
