import React from 'react';
import api from '../api/api';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = { total: 0, page: 1, pages: 0, images: [] };

    onSearch = async term => {
        const url = '/search/photos/';
        const params = {
            query: term,
            page: this.state.page,
            per_page: 4,
            orientation: 'squarish'
        };

        try {
            const response = await api.get(url, { params: params });
            console.log(response.data);
            this.setState({
                images: response.data.results,
                total: response.data.total,
                pages: response.data.total_pages
            });
        } catch (ex) {
            console.log('Falha na requisição');
            console.log(ex);
        }
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSearch={this.onSearch}></SearchBar>
                <br />
                <h2>Listando {this.state.images.length} imagens</h2>
                <h2>{this.state.total} imagens encontradas</h2>
                <h2>Página {this.state.page} de {this.state.pages}</h2>
                <ImageList images={this.state.images}></ImageList>
            </div>
        );
    };
}

export default App;