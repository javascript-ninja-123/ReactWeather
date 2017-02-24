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

var Nav = React.createClass({
  onSearch(e){
    e.preventDefault();
    alert('not yet wired up');
  },
  render(){
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
                <form onSubmit={this.onSearch}>
                  <ul className="menu">
                    <li>
                      <input type="serach" placeholder="Search weather"/>
                    </li>
                    <li>
                      <input type="submit" className="button" value='Get Weather'/>
                    </li>
                  </ul>
                </form>
            </div>
        </div>
    );
  }
})
module.exports = Nav;
