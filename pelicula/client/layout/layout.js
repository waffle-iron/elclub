Template.header.onCreated( () => {
  let template = Template.instance();

  template.searchQuery = new ReactiveVar();
  template.searching   = new ReactiveVar( false );

  template.autorun( () => {
    template.subscribe( 'products', template.searchQuery.get(), () => {
      setTimeout( () => {
        template.searching.set( false );
      }, 300 );
    });
  });
});

Template.header.helpers({
  searching() {
    return Template.instance().searching.get();
  },
  query() {
    return Template.instance().searchQuery.get();
  },
  products() {
    let products = Products.find();
    if ( products ) {
      return products;
    }
  }
});

Template.header.events({
  'keyup [name="header"]' ( event, template ) {
    let value = event.target.value.trim();

    if ( value !== '' && event.keyCode === 13 ) {
      template.searchQuery.set( value );
      template.searching.set( true );
    }

    if ( value === '' ) {
      template.searchQuery.set( value );
    }
  }
});