import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ResultsDetail = ({result}) => {
    return (
        <View style = {styles.container}>
            <Image style = {styles.imageStyle}
            source = {{uri: result.thumb}} />
            <Text style = {styles.nameStyle}>
                {result.name}
            </Text>
            <Text>
                {result.user_rating.aggregate_rating} stars, {result.all_reviews_count} Reviews
            </Text>
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        marginLeft: 15
    },
    imageStyle: {
        width: 250,
        borderRadius: 2,
        height: 100,
        marginBottom: 5
    },
    nameStyle: {
        fontWeight: 'bold',
    }

});

export default ResultsDetail;