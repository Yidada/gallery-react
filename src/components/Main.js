require('normalize.css/normalize.css');
require('styles/main.scss');

import React from 'react';
import data from '../sources/data.json';

class ImageFigure extends React.Component {
    render() {
        return (
            <figure className="img-figure">
                <img src={this.props.data.url}
                     alt={this.props.data.title}/>
                <figcaption>
                    <h2 className="img-title">{this.props.data.title}</h2>
                </figcaption>
            </figure>
        );
    }
}


class AppComponent extends React.Component {
    render() {
        return (
            <section className="stage">
                <section className="imgs">
                    {data.map(function (value) {
                        console.log(value);
                        return <ImageFigure key={value.name} data={value}/>;
                    })}
                </section>
                <nav className="nav">

                </nav>
            </section>
        );
    }
}

AppComponent.defaultProps = {};

export default AppComponent;
