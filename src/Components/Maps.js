import React from 'react'
import { Map, TileLayer, Marker} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './Maps.css';
import Candy from "./Candy"

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});


delete L.Icon.Default.prototype._getIconUrl;  // workaround to fix bug marker icon not showing

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),  // see details : https://github.com/PaulLeCam/react-leaflet/issues/453
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

class SimpleExample extends React.Component {

  state = {
    adresse: "",
    latlng: "", 
    zoom: 15,
  }

  shuffle=(array)=> {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  async componentDidMount(){

    
      try {
        const response = await fetch(
          `https://api-adresse.data.gouv.fr/search/?q=Paris&postcode=75005&limit=20`
        );
  
        if (!response.ok) { // dans le cas où la requete api échoue, afficher une erreur
          this.setState({ error: true });
          throw Error(response.statusText);
        }
  
        let api_data = await response.json();
        api_data=api_data.features
        api_data = this.shuffle(api_data);

        console.log(api_data)
        this.setState({
          error: false,
          adresse: api_data[0].properties.label,
          latlng:api_data[0].geometry.coordinates[1]+','+api_data[0].geometry.coordinates[0]
        });
        //console.log(this.state.latlng)
      }
      catch (error) {
        this.setState({ error: true });
      }
    
  }
  goBack = () => {
    this.props.history.goBack()

  }

  render() {

    const position = this.state.latlng.split(',');
    const { classes } = this.props;


    if (this.state.latlng) {
      return (
       <div>
        <div className="title-adresse"> 
        <h3>Récompenses disponibles à cette adresse : </h3>
         <h2 className="adressh2">{this.state.adresse}</h2>
       </div>
        <div className="map">
          <Map center={position} style={{ width: '100%', height: '40vh'}} zoom={this.state.zoom}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            <Marker position={position} className="map__reactleaflet">

            </Marker>
            
          </Map>


        </div>
        <Candy/>
        </div>
      );
    } else { return (<div></div>) }
  }
}

export default (SimpleExample)