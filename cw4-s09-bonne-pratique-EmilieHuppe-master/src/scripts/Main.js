import ComponentFactory from './ComponentFactory';

class Main {
  constructor() {
    this.componentInstances = [];
    this.init();
  }

  init() {
    document.documentElement.classList.add('has-js');

    new ComponentFactory();
  }
}
new Main();
