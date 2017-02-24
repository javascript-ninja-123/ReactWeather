var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center">About</h1>
            <p className="text-center">This is about page about React Weather</p>
            <div className="progress" role="progressbar" tabindex="0" aria-valuenow="20" aria-valuemin="0" aria-valuetext="25 percent" aria-valuemax="100">
                <span className="progress-meter" >
                    <p className="progress-meter-text">25%</p>
                </span>
            </div>
            <ul>
              <li>
                <a href="https://facebook.github.io/react">React</a> -- This was the JavaScript framework used.

              </li>
              <li>
                <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
              </li>
            </ul>
        </div>

    )
}

module.exports = About;
