import alt from '../alt';
import AppActions from '../actions/app_actions';

class AppStore {
    constructor() {
        this.message = null;
        this.bindActions(AppActions);
    }

    onTestThis( newMessage ) {
        this.message = newMessage;
    }
}

export default alt.createStore(AppStore, 'AppStore');
