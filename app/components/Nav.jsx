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
      <div className='top-bar'>
          <div className='top-bar-left'>
            <ul className='menu'>
              <li className="menu-text">React Weather App</li>
              <li>
                <IndexLink to='/' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
              </li>
              <li>
                <Link to='about' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>About</Link>
              </li>
              <li>
                <Link to ='contact' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="top-bar-right">

          </div>
      </div>
  );
}

module.exports = Nav;
