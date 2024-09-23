import { View, Text, TextInput } from 'react-native'
import React from 'react'
import CustomHeader from '../components/CustomHeader'
import CustomButton from '../components/CustomButton'

export default function ComposeScreen() {
  return (
    <View>
        <View>
            <CustomHeader
            centertitle='Compose'
            lefttext='Back'
            />
        </View>
        <View style={{height:'78%'}}>
            <TextInput
            placeholder='Compose your message here...'
            multiline={true}

        
            />
        </View>
            <View style={{}}>
            <CustomButton
            title="Send"/>
            </View>

    </View>
  )
}