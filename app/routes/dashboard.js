import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{


  model() {
      return this.store.findAll('product');
    },

    setupController(controller, model) {
      //  controller.get('table').setRows(model.toArray());

var products =[{id:1 , name: "acer"} , {id:2, name:"sony"}];

controller.get('table').setRows(products);

      // controller.set('table',model.get('content'));
    },



session: Ember.inject.service('session'),

  actions: {
    logout() {

      this.get('session').invalidate();
      this.transitionTo('login');
    }
  }
});
