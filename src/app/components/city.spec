describe("Hello world", function() {
  it("says hello", function() {
    expect(1).toEqual(1);
  });
});
// var React = require('react');
//var City = require('./city');
//import TestUtils from 'react/lib/ReactTestUtils';



// describe("City", () => {
//   it('should render with the correct DOM', () => {

//     let city = TestUtils.renderIntoDocument(<City/>);
//     let renderedDOM = () => React.findDOMNode(city);
    
//     expect(renderedDOM.tagName).toBe('div');
//     // expect(renderedDOM.classList).toEqual(['container', '-large']);
//     // //...
      
//     // var children = renderedDOM.querySelectorAll('li.child');
//     // expect(children.length).toBe(2);
//     // expect(children[0]).toEqual({name: "Billy", age: 4, sex: 'm'});
//     //...
//   });
// });