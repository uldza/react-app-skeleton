import React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';

import AppStore from '../stores/app_store';
import AppActions from '../actions/app_actions';

class AboutView extends React.Component {
    static getStores(props) {
        return [AppStore]
    }
    static getPropsFromStores(props) {
        return AppStore.getState()
    }

    componentDidMount() {
        setTimeout(() => {
            AppActions.testThis('Hello from after 5sec');
        }, 5000);
    }

    render() {
        return (
            <div className="container">{this.props.message}</div>
        );
    }
}

export default connectToStores(AboutView);
