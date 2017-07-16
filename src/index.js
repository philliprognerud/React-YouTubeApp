import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from "youtube-api-search";

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCX-J5kMpP3I4NcvKU63S7bsyRkvRCqprE';

YTSearch({key: API_KEY, term: 'pewdiepie'}, function(data){
    console.log(data);
});

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector(".container"));