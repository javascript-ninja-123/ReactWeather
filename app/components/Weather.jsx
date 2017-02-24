var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');


var Weather = React.createClass({
  getInitialState(){
    return{
      location:'sacramento',
      temp:23
    }
  },
  // getInitialState(){
  //   return{
  //   isLoading:false
  //   }
  // },
  // handleSearch(location){
  //   var vm = this;
  //     this.setState({
  //       isLoading:true
  //     })
  //     openWeatherMap.getTemp(location).then(function(temp){
  //         vm.setState({
  //           location:location,
  //           temp:temp,
  //           isLoading:false
  //         })
  //     },function(errorMessage){
  //       vm.setState({
  //         isLoading:false
  //       })
  //       alert(errorMessage);
  //     })
  // },
  handleSearch(location){
    var vm = this;
    openWeatherMap.getTemp(location).then(function(temp){
      vm.setState({
        location:location,
        temp:temp
      })
    },function(errorMessage){
      alert(errorMessage);
    });
  },
  render(){
    var {location,temp} = this.state;
    // var {isLoading,temp,location} = this.state;
    // function renderMessage(){
    //     if(isLoading){
    //       return <h3>Fetching a weather</h3>
    //     }
    //     else if(temp && location){
    //       return <WeatherMessage location={location} temp={temp}/>
    //     }
    // }
    return(
      <div>
        <h1>Weather Checker</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage location={location} temp={temp}/>
      </div>
    )
  }
});
module.exports = Weather;
