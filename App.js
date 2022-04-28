import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import news_data from './src/news_data.json'
import NewsCard from './src/components/NewsCard';

function App() {
  return (
    <View>
      <FlatList
        data={news_data}
        renderItem={({item}) => <NewsCard news={item}/>}
      />
    </View>
  );
}

export default App;
