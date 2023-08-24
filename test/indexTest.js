require ( './helpers.js' );

const sinon = require( 'sinon' );
const helpers = require( './helpers' );
const chai = require( 'chai' );
const spies = require( 'chai-spies' );

chai.use( spies );


describe( "index.js", () => {
  describe( 'fetchBooks()', () => {

    beforeEach( () => {
      window.document.body.innerHTML = '<main></main>'
      window.fetch = require( 'node-fetch' );
    } );

    it( "renders book titles into the DOM by passing a JSON object to renderBooks()", async () => {
      chai.spy.on( window, 'renderBooks' );
      await fetchBooks().then(() => {
        expect( window.renderBooks ).to.have.been.called();
      })
    } )
  } )
})
