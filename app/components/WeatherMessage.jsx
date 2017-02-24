var React = require('react');

var WeatherMessage = React.createClass({
  render(){
    var {location, temp} = this.props;
    return(
      <div>
        <h3>It is <span>{temp}</span> F in {location}.</h3>
      </div>
    )
  }
});
//
// var WeatherMessage = (props) =>{
//   // var {location,temp} =props;
//   var {location}  = this.props;
//   return(
//     <div>
//       <h3>It is 23 in {location}.</h3>
//     </div>
//   )
// }

module.exports = WeatherMessage;
