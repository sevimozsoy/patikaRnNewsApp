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
import news_banner_data from './src/news_banner_data.json';

function App() {
  const renderNews = ({item}) => <NewsCard news={item} />;
  const itemIds = item => item.u_id.toString();

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        {news_banner_data.map(bannerNews => (
          <Image
            style={styles.banner_image}
            source={{uri: bannerNews.imageUrl}}
            key={bannerNews.id}
          />
        ))}
      </ScrollView>
      <FlatList
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
  },
  news_banner: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
  },
});

export default App;
