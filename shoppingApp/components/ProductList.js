import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import fetchProduct from './fakeApi';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

const ProductList = ({navigation}) => {
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        fetchProduct().then(data =>setProducts(data));
    }, []);

    const renderItem = ({item}) =>(
        <TouchableOpacity onPress={() =>navigation.navigate("Details of the products", {item})}>
            <Text>{item.title}</Text>
        </TouchableOpacity>
    );

  return (
    <View>
    <FlatList 
    data={products}
    renderItem={renderItem}
    keyExtractor={item.id.toString()}
    />
    </View>
  );
};

export default ProductList