import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './NewsCard.style'

const NewsCard = (props) => {
    return(
        <View style={styles.container}>
            <Image style={styles.image}/>
            <Text style={styles.title}></Text>
            <Text style={styles.description}></Text>
        </View>
    )
}

export default NewsCard;