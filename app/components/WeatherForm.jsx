var React = require('react');

// var WeatherForm = React.createClass({
//   onSearchCity(e){
//     e.preventDefault();
//     var location = this.refs.location.value;
//     if(location.length >0){
//       this.refs.location.value = '';
//       this.props.onSearch(location);
//     }
//   },
//   render(){
//     return(
//       <div>
//         <form onSubmit={this.onSearchCity}>
//           <input type="text" ref='location' placeholder="type any city"/>
//           <button>Get Weather</button>
//         </form>
//       </div>
//     )
//   }
// });


var WeatherForm = React.createClass({
  fetchWeather(e){
    e.preventDefault();
    var location = this.refs.location.value;
    if(location.length >0){
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
render(){
  return(
        <div>
          <form onSubmit={this.fetchWeather}>
            <input type="text" ref='location'/>
            <button>Get Weather</button>
          </form>
        </div>
  )
}
});


module.exports = WeatherForm;
