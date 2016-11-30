//  This view handles logic for a single contact
import Backbone from 'backbone';
import Contact from 'app/models/contact';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
  this.template = options.template;
  },

  render: function() {
    var html = this.template({contact:  this.model.attributes}); //don't forget! this gives us the name when we say contact.name
    this.$el.html(html);
    // this.delegateEvents();
        console.log("contact is " + this.model.attributes.name);
        console.log("contact is " + this.model.attributes);

    // Enable chained calls
    return this;
  }
});

export default ContactView;
