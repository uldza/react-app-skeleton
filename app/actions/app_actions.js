import alt from 'dispatcher';

class AppActions {
  constructor() {
    this.generateActions(
        'testThis'
    );
  }
}


export default alt.createActions(AppActions);
