import { View, Text, Image } from 'react-native'
import React from 'react'

const ProductDet = ({route}) => {
    const {item} = route.params;

  return (
    <View>
      <Image source ={{uri: item.image}} style={{width: 200, height: 2}}/>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text>{item.price}</Text>
    </View>
  )
}

export default ProductDet;