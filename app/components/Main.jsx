var React = require('react');
var Nav = require('Nav');

// var Main = React.createClass({
//   render(){
//     return(
//       <div>
//         <Nav/>
//         {this.props.children}
//       </div>
//     );
//   }
// });
var Main = (props)=>{
  return(
    <div>
      <Nav/>
      {props.children}
    </div>
  );
}


module.exports = Main;
