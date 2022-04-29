import React from 'react'
import { ScrollView, Image } from 'react-native'
import styles from './NewsBanner.style'
import news_banner_data from '../../news_banner_data.json';



const NewsBanner = () => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {news_banner_data.map(bannerNews => (
                <Image
                    style={styles.news_banner}
                    source={{ uri: bannerNews.imageUrl }}
                    key={bannerNews.id.toString()}
                />
            ))}
        </ScrollView>
    )
}

export default NewsBanner;