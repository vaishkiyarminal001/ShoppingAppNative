import { View, Text, Button } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Welcome to the Home Page of Shopping App</Text>
      <Button
        title="View Products"
        onPress={() =>navigation.navigate('ProductList')}/>

        <Button
          title="View Cart"
          onPress={() =>navigation.navigate('Cart')}/>

        <Button
          title="Sign In"
          onPress={() =>navigation.navigate('Auth', {screen: 'SignIn'})}/>
    </View>
  )
}

export default Home