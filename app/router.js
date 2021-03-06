import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('contact');
  this.route('about');
  this.route('ask-question');
  this.route('question', {path: '/question/:question_id'});
  this.route('delete-question');
  this.route('update-question');
});

export default Router;
