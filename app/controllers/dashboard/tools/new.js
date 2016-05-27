import Ember from 'ember';

export default Ember.Controller.extend({




  isSaveToolButtonDisabled: Ember.computed( 'name'   ,  function() {
    if( Ember.isEmpty(this.get('name'))
  ){return 'disabled';}
  else{return '';}
  }),


statuses :["Running", "Damaged" , "Lost"],


actions: {

  selectStatus(status) {
    this.set('status', status);
  },

      createTool: function(){

        var controller = this;

        var tool = this.store.createRecord('tool', {
          name :this.get('name'),
          status :this.get('status'),
          issuedate :this.get('issuedate'),
          damagedate :this.get('damagedate'),
          lostdate :this.get('lostdate'),
          employee :this.get('employee')


        });

        tool.save().then(function(){
          controller.set('name','');
          controller.set('toolstatus','');
          controller.set('issuedate','');
          controller.set('damagedate','');
          controller.set('employee','');
          controller.transitionToRoute('dashboard.tools.tool.view' , tool);
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
