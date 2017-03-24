import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addAnswer() {
      var params = {
       author: this.get("answer_author"),
       title: this.get("answer_title"),
       body: this.get("answer_body"),
       question: this.get("question")
      };
    this.sendAction("addAnswer", params);
    }
  }
});
