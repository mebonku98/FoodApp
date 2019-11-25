import React, {useState} from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useresults from '../hooks/useResults'

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useresults();

    filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.restaurant.price_range === price;
        })
    };

    return (
        <>
            <SearchBar 
                term={term} 
                onTermChange = {setTerm} 
                onTermSubmit = {() => searchApi(term)}
                />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList 
                    results={filterResultsByPrice(1, 2)} 
                    title = 'Cost Effective'
                />
                <ResultsList 
                    results={filterResultsByPrice(3)} 
                    title = 'Pricier'
                    />
                <ResultsList 
                    results={filterResultsByPrice(4)} 
                    title = 'Expensive'
                    />
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create ({

});

export default SearchScreen;