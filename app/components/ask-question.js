import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    askQuestion() {
      var params = {
        title: this.get("title"),
        body: this.get("body"),
        author: this.get("author")
      }
      this.sendAction("askQuestion", params);
    }
  }
});
