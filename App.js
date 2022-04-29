import React from 'react';
import {
  FlatList,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Dimensions,
} from 'react-native';
import news_data from './src/news_data.json';
import NewsCard from './src/components/NewsCard';
import NewsBanner from './src/components/NewsBanner/NewsBanner';

function App() {
  const renderNews = ({ item }) => <NewsCard news={item} />;
  const itemIds = item => item.u_id.toString();

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={() =>
        <NewsBanner/>  
        }
        keyExtractor={itemIds}
        data={news_data}
        renderItem={renderNews}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  }
});

export default App;
