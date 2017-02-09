var React = require('react');
var {Link,IndexLink} = require('react-router');

// var Nav = React.createClass({
//       render(){
//         return(
//           <div>
//             <IndexLink to='/' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
//             <Link to='about' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>About</Link>
//             <Link to ='contact' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Contact</Link>
//
//           </div>
//         );
//       }
// });

var Nav = (props) =>{
  return(
    <div>
      <IndexLink to='/' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
      <Link to='about' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>About</Link>
      <Link to ='contact' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Contact</Link>

    </div>
  );
}

module.exports = Nav;
