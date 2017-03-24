import Ember from 'ember';

export default Ember.Component.extend({
  isShowing: false,
  actions: {
    updateQuestion(question) {
      var params = {
        title: this.get("title"),
        body: this.get("body"),
        author: this.get("author")
      }
      this.sendAction("updateQuestion", params, question);
    },
    showForm() {
      this.set("isShowing", true)
    },
    hideForm() {
      this.set("isShowing", false)
    }
  }
});
