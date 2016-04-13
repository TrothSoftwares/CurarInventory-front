import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {

    return Ember.RSVP.hash({

    customers: this.store.findAll('customer'),

  });
  },





  setupController: function(controller ,model) {

       controller.set('customers', model.customers);

  }
});
