import React from 'react'

import CandyList from "./CandyList";


class Candy extends React.Component {
  state = {
    adresses: [],
    candiesList: [],
    adressesAndCandies: [],
    myCandies: [],


  }

  shuffle = (array) => {
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

  async componentDidMount() {
    try {
      const response = await fetch(
        `https://fr-en.openfoodfacts.org/category/confectioneries.json`
      );
      //console.log('ee')
      if (!response.ok) { // dans le cas où la requete api échoue, afficher une erreur
        this.setState({ error: true });
        throw Error(response.statusText);
      }

      const api_data = await response.json();
      const products = api_data.products;
      const candies = products.filter(candy => { if (candy.image_url) return candy })
      console.log(api_data)
      this.setState({
        error: false,
        candiesList: this.shuffle(candies)
      });
      console.log(this.state.candiesList)
    }
    catch (error) {
      this.setState({ error: true });
      console.log("error")
    }

  }



  render() {
    return (
      <div className="Candy">


        <CandyList candies={this.state.candiesList} />


      </div>
    );
  }
}

export default Candy;
