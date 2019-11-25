import React , {useState, useEffect}from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import networkApi from '../api/networkApi'

const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    console.log(result);
    const getResult = async (id) => {
        const response = await networkApi.get(`/restaurant?res_id=${id}`);
        setResult(response.data);
    };
    useEffect (() => {
        getResult(id);
    }, []);
    if (!result) {
        return null;
    }

    return (
        <View>
            <Text style = {styles.titleStyle}>{result.name}</Text>
            <FlatList 
                data = {result.photos}
                keyExtractor = {(photo) => photo.photo.id}
                renderItem = {({item}) => {
                    return <Image 
                    style = {styles.imageStyle}
                    source = {{uri: item.photo.thumb_url}} />
                }

                }
            />
        </View>
    );
}

const styles = StyleSheet.create ({
    titleStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    imageStyle : {
        height: 200,
        width: 300,
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius: 5
    }
});

export default ResultsShowScreen;