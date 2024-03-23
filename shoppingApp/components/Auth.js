import { View, Text, Button } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements'

export default function Auth({navigation}) {
  return (
    <View>
      <Text>Auth Screen</Text>
      <Button title="Sign In" onPress={() => navigation.navigate("SignIn")} />
      <Button title="Sign Up" onPress={() => navigation.navigate("SignUp")} />

    </View>
  )
}