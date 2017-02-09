var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState(){
    return{
    isLoading:false
    }
  },
  handleSearch(location){
    var vm = this;
      this.setState({
        isLoading:true
      })
      openWeatherMap.getTemp(location).then(function(temp){
          vm.setState({
            location:location,
            temp:temp,
            isLoading:false
          })
      },function(errorMessage){
        vm.setState({
          isLoading:false
        })
        alert(errorMessage);
      })
  },
  render(){
    var {isLoading,temp,location} = this.state;
    function renderMessage(){
        if(isLoading){
          return <h3>Fetching a weather</h3>
        }
        else if(temp && location){
          return <WeatherMessage location={location} temp={temp}/>
        }
    }
    return(
      <div>
        <h1>Weather Checker</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  }
});








// var Weather = React.createClass({
//   getInitialState:function(){
//     return {
//       isLoading: false
//     }
//   },
//   handleSearch:function(location){
//     var that = this;
//
//
//     this.setState({isLoading:true});
//     openWeatherMap.getTemp(location).then(function(temp){
//       that.setState({
//         location:location,
//         temp:temp,
//         isLoading:false
//       })
//     },function(errorMessage){
//       that.setState({isLoading:false})
//         alert(errorMessage);
//     })
//
//   },
  // render(){
  //   // var {isLoading, temp,location} = this.state;
    // function renderMessage(){
    //   if(isLoading){
    //     return <h3>Fetching weather</h3>
    //   }else if(temp && location){
    //       return <WeatherMessage temp={temp} location={location}/>
    //   }
    // }
  //     return(
  //       <div>
  //         <h1>Get Weather</h1>
  //         <WeatherForm onSearch={this.handleSearch} onSearchTemp={this.handleSearchTemp}/>
  //       {renderMessage()}
  //       </div>
  //     )
  // }
// });

module.exports = Weather;
