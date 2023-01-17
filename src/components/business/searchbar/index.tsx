import React, {useState, FC, SetStateAction} from "react";
import { View, Text } from 'react-native';
import { Searchbar as SearchbarComp } from 'react-native-paper';

interface SearchbarProps {};

const Searchbar: FC<SearchbarProps> = () => {
    const [searchQuery, setSearchQuery] = useState<String>('');
    const onChangeSearch = (query: SetStateAction<String>) => setSearchQuery(query);

    return (
        <View>
            <SearchbarComp
                placeholder='Search'
                onChangeText={onChangeSearch}
                value={searchQuery as string}
                />
        </View>
    )
}

export default Searchbar;