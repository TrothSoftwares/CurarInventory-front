import Ember from 'ember';

export default Ember.Controller.extend({

    columns: [
      {
        "propertyName": "id", "title": "ID"
      },
      {
        "propertyName": "companycode","title": "Company Code"
      },
      {
        "propertyName": "email","title": "Email"
      },
      {
        "propertyName": "phone","title": "Phone"
      },




      {
        "title":"View" , "template":"custom/viewbutton"
      },


    ],


    customMessages: {
      "searchLabel": "Search",
      "columns-title": "Columns",
      "columns-showAll": "Show all",
      "columns-hideAll": "Hide all",
      "columns-restoreDefaults": "Restore Columns",
      "tableSummary": "Now are showing %@ - %@ of %@",
      "allColumnsAreHidden": "No visible columns, dude!",
      "noDataToShow": "No data. Sorry, bro..."
    },





    actions: {




    }
  });
