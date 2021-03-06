import Ember from 'ember';

export default Ember.Controller.extend({

  actions:{

    createCustomer: function(){

      var controller = this;

      var customer = this.store.createRecord('customer', {
        companyname :this.get('companyname'),
        companycode :this.get('companycode'),
        chargecode :this.get('chargecode'),
        email :this.get('email'),
        address1 :this.get('address1'),
        address2 :this.get('address2'),
        suburb :this.get('suburb'),
        city : this.get('city'),
        state :this.get('state'),
        country :this.get('country'),
        zipcode :this.get('zipcode'),
        phone :this.get('phone'),
      });

      customer.save().then(function(){
        controller.set('companyname','');
        controller.set('companycode','');
        controller.set('chargecode','');
        controller.set('email','');
        controller.set('address1','');
        controller.set('address2','');
        controller.set('suburb','');
        controller.set('city','');
        controller.set('country','');
        controller.set('zipcode','');
        controller.set('phone','');
        controller.transitionToRoute('dashboard.relations.customers.customer' , customer);
      }).catch(function(){
        controller.notifications.addNotification({
          message: 'Sorry, cant save at the moment !' ,
          type: 'error',
          autoClear: true
        });
      });




    },
  }
});
