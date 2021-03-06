import React from 'react';
import { List } from './view/list-view';
import { Gallery } from './view/gallery-view';
import { Thumbnail } from './view/thumbnail-view';

import bunnies from './image';

function ViewSelector(props) {
    return (
      <div>
        <button onClick={() => props.onClick('gallery')}>Gallery View</button>
        <button onClick={() => props.onClick('list')}>List View</button>
        <button onClick={() => props.onClick('thumbnail')}>Thumbnail View</button>
      </div>
    );
}

function ImageView(props) {
    const bunnyArray = bunnies();
    switch (props.view) {
        case 'list':
            return (
                <div>
                   <ViewSelector onClick={props.onClick}/>
                   <List array={bunnyArray} />;
                </div>
            );

        case 'gallery':
            return (
                <div>
                    <ViewSelector onClick={props.onClick}/>
                    <Gallery array={bunnyArray} />;
                </div>
            );

        case 'thumbnail':
            return (
                <div>
                    <ViewSelector onClick={props.onClick}/>
                    <Thumbnail array={bunnyArray} />
                </div>
            );

        default:
            return (
                <div>
                    <ViewSelector onClick={props.onClick}/>
                    Click a button to view bunnies!
                </div>
            );
    }
}

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            view: null
        };
    }

    handleClick(value) {
        this.setState({
            view: value
        });
    }

    render() {
        return (
          <div>
            <ImageView view={this.state.view} onClick={this.handleClick}/>
          </div>
        );
    }
}

ViewSelector.propTypes = {
    onClick: React.PropTypes.func
};

ImageView.propTypes = {
    view: React.PropTypes.string,
    state: React.PropTypes.object,
    onClick: React.PropTypes.func
};
