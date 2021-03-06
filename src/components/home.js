import React, {Component} from 'react';
import Banner from './banner'
import ArtistList from './artistlist'

const URL_Artist = 'http://localhost:3004/artists';
class Home extends Component {
    constructor(props){

        super(props);
        this.state = {
            artists:''
        }
    }
    componentDidMount(){

        fetch(URL_Artist,{
             method:'GET'
        })
        .then(response => response.json())
        .then(json => {
            this.setState({
                artists:json
            })
        })
    }
    render(){

        return(
            <div>


                <Banner/>
                <ArtistList AllArtist={this.state.artists} />
            </div>
        )
    }
}
export default Home;