import { getGreeting } from '../support/app.po';

describe('s3', () => {

  // const requiredExample = require('../fixtures/testText.txt')
  const requiredExample = require('../fixtures/example.json') // WORKS! THIS IS SEEN IN THE TEST...

  // Can Change the visit to any of the URLS. Probably best to use the main one
  //beforeEach(() => cy.visit('https://rmslowside.github.io/rmslow/apps/s3/'));
  //beforeEach(() => cy.visit('https://smcfall2.github.io/rmslow/apps/s3/'));
  beforeEach(() => {
    cy.visit('https://smcfall2.github.io/rmslow/apps/s3/')

    cy.fixture('example.json').as('example') // try commenting this out and see if it still passes...
    cy.fixture('testText.txt').as('testText')
    cy.fixture('winding.jpg').as('winding')
  })


  // Commented this test out so I can demo Firefox without hitting the bug...
  // it('should display welcome message', () => {
  //   // Custom command example, see `../support/commands.ts` file
  //   cy.login('my-email@something.com', 'myPassword');

  //   // Function helper example, see `../support/app.po.ts` file
  //   getGreeting().contains('S3');
  // });

  // it('Verify folder CRUD, S3 App', () => {
  //  cy.contains('Folder') // doing a partial, not Folder0 or Folder1

  //   // Create - new folder
  //   cy.get("button").contains("create_new_folder").click()
  //   cy.get('[placeholder="Folder Name"]').type("new folder")  // get the input with the placeholder=Folder Name
  //   cy.get("button").contains("OK").click()
  //   cy.wait(500)  // MUST HAVE THIS WAIT... can I use cy.wrap() and wait on a promise???

  //   // Read
  //   cy.get("span").contains("new folder")

  //   // Update - grab new folder and rename it
  //   cy.get("span").contains("new folder").rightclick()
  //   cy.get("button").contains("Rename").click()
  //   cy.get('[placeholder="Folder Name"]')     // "get" grabs one or more DOM elements by selector or alias
  //     .type('new folder CRUD').should('have.value', 'new folder CRUD')
  //   cy.get("button").contains("OK").click().wait(500)
  //   cy.get("span").contains("new folder CRUD").should('be.visible')
  //   //cy.get(".element-container:last").contains("new folder CRUD").should('be.visible') // uses the class, not recommended by cypress
  //   //cy.get("span").contains("new folder CRUD").should('have.value', 'new folder CRUD') // does not work, not how you check the value in cypress

  //   // Delete
  //   cy.get("span").contains("new folder CRUD").rightclick()
  //   cy.get("button").contains("Delete").click()
  //   cy.get("span").contains("new folder CRUD").should('not.exist')
  // });


  // NUMBER 1 - dropEvent
  // it('should drop file to upload 1', function() {

  //   const dropEvent = {
  //     dataTransfer: {
  //         files: [
  //         ],
  //     },
  //   };

  //   cy.fixture('winding.jpg').then((picture) => {
  //     return Cypress.Blob.base64StringToBlob(picture, 'image/jpeg').then((blob) => {
  //         dropEvent.dataTransfer.files.push(blob);
  //     });
  //   });
  //   //cy.wait(3000);
  //   cy.get('rms-file-explorer > div').trigger('dragover').wait(2000)
  //   //cy.get('rms-file-explorer > div').trigger('dragover') // works!!!!!!!!!
  // //  cy.get('rms-file-explorer > div').trigger('dragover').should('have.class', 'ng-star-inserted').trigger('drop', dropEvent)   //ngx-file-drop should be visible


  //   //cy.get('rms-file-explorer > div').trigger('drop', dropEvent).wait(1000) // gives error div is covered by another element...
  //   //cy.get('div.drop-area').trigger('drop', dropEvent).wait(1000) // works!!! kind of ...
  //   //cy.get('div.drop-area').trigger('drop', dropEvent).wait(1000) // works!!! kind of ...


  //   //! cy.get('[dropzoneclassname="drop-area"]').trigger('drop', dropEvent).wait(1000); // width and height size 0 x 0 error - Steve made change no error now...
  // //   cy.get('[dropzonelabel="Drop files here"]').trigger('drop', dropEvent) // width and height size 0 x 0 error
  // cy.get('[dropzoneclassname="drop-area"]').trigger('dragover').wait(1000).trigger('drop', dropEvent).wait(1000);
  //   //cy.get('[dropzonelabel="Drop files here"]').trigger('drop', {force: true}, dropEvent)
  //   //cy.get('[dropzonelabel="Drop files here"]').trigger('drop', {force: true})
  //   //cy.get('#cdk-drop-list-0 > :nth-child(1)').trigger('dragend') // can't find it...
  // //  cy.get('[dropzoneclassname="drop-area"]').trigger('dragend')


  //   // trigger the
  //   //cy.get(".ngx-file-drop__drop-zone").trigger('drop', dropEvent);

  //   cy.wait(5000) // to see
  // });


  // NUMBER 2 - this
  //it('should drop file to upload', () => { // CAN'T USE LAMBDA HERE OR ELSE THE beforeEach() FIXTURE IS UNDEFINED IN THE TEST CONTEXT
  it('should drop file to upload 2', function() {   // test HAS to use "function" callback to make sure "this" points at the Mocha context - otherwise you get Undefined
                                                  // basically if you use "this" you need to use "function"

    //cy.wait(2500) // the app has a 2 second wait for the lazy load, using 2.5 seconds
    cy.url().should('eq', 'https://smcfall2.github.io/rmslow/apps/s3/#/home')

    // using inline fixtures - using inline and not using "this" you can use lambda =>  instead of function
    //cy.fixture('example').should('be.an', 'object') // standalone, this is a jason object
    //cy.fixture('testText').should('contain', 'dukes text') // standalone, txt file - this text is not an object i guess??
    //cy.fixture('winding.jpg').should('be.a', 'string')

    // using beforEach() at beginning of the test, hence the "this". Because we use "this" HAVE TO USE FUNCTION() CALLBACK IN THE TEST
    expect(this.example, 'fixture in the test context').to.be.an('object')
    expect(this.example, 'fixture in the test context').to.deep.equal(requiredExample)
    expect(this.testText, 'fixture in the test context').to.equal('dukes text in testText.text file\n');

    cy.get('rms-file-explorer > div').trigger('dragover').wait(1000); // wake up the drop zone
    //cy.get('rms-file-explorer > div').trigger('dragover').wait(1000).trigger('drop', this.example).wait(1000)

    //cy.get('div.drop-area').trigger('drop', this.example).wait(1000)
    cy.get('div.drop-area').trigger('dragover').wait(1000).trigger('drop', this.example).wait(1000) // this causes to the grey to show, like when doing the drop manually
    //cy.get('[dropzoneclassname="drop-area"]').trigger('dragover').wait(1000).trigger('drop', this.example).wait(1000);  // this causes to the grey to show, like when doing the drop manually
  });


});
