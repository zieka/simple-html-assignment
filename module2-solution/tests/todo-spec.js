// EXAMPLE:
//
// describe('angularjs homepage todo list', function() {
//   it('should add a todo', function() {
//     browser.get('https://angularjs.org');
//
//     element(by.model('todoList.todoText')).sendKeys('write first protractor test');
//     element(by.css('[value="add"]')).click();
//
//     var todoList = element.all(by.repeater('todo in todoList.todos'));
//     expect(todoList.count()).toEqual(3);
//     expect(todoList.get(2).getText()).toEqual('write first protractor test');
//
//     // You wrote your first test, cross it off the list
//     todoList.get(2).element(by.css('input')).click();
//     var completedAmount = element.all(by.css('.done-true'));
//     expect(completedAmount.count()).toEqual(2);
//   });
// });

describe('Assignment 1', function() {
  it('should have a page heading saying "Our Menu"', function() {
    browser.driver.get('file://' + __dirname + '/../index.html');

    //Find heading and assert the text is known
    heading = browser.driver.findElement(by.id("heading"));
    expect(heading.getText()).toEqual("Our Menu");
  });

  it('should have 3 sections', function() {
    browser.driver.get('file://' + __dirname + '/../index.html');

    //Find Sections and assert there are 3
    browser.driver.findElements(by.id('section')).
    then(function(elems) {
      expect(elems.length).toEqual(3);
    });
  });

  it('should have sections in the same verticle location when the browser width is 992px or larger (Desktop View)', function() {
    browser.manage().window().setSize(992, 992);
    browser.driver.get('file://' + __dirname + '/../index.html');

    // Find Sections
    browser.driver.findElements(by.id("section")).
    then(function(elems) {

      // Find the first sections's y position
      var first;
      elems[0].getLocation().
      then(function (navDivLocation) {
        first = navDivLocation.y;
      });

      // Assert that all other sections have the same y position
      for (i = 1; i < elems.length; i++) {
        elems[i].getLocation().
        then(function (navDivLocation) {
           expect(navDivLocation.y).toEqual(first);
        });
      };
    });
  });

  it('should have 3 sections in the same horizontal location when the browser width is 767px or less (Mobile View)', function() {
    browser.manage().window().setSize(767, 767);
    browser.driver.get('file://' + __dirname + '/../index.html');

    // Find Sections
    browser.driver.findElements(by.id("section")).
    then(function(elems) {

      // Find the first sections's x position
      var first;
      elems[0].getLocation().
      then(function (navDivLocation) {
        first = navDivLocation.x;
      });

      // Assert that all other sections have the same x position
      for (i = 1; i < elems.length; i++) {
        elems[i].getLocation().
        then(function (navDivLocation) {
           expect(navDivLocation.x).toEqual(first);
        });
      };
    });
  });


  it('should have 2 sections in the same verticle location and the third section should be located below when the browser width is 768px - 991px (Tablet View)', function() {
    browser.manage().window().setSize(888, 888);
    browser.driver.get('file://' + __dirname + '/../index.html');

    // Find Sections
    browser.driver.findElements(by.id("section")).
    then(function(elems) {

      // Find the first sections's y position
      var first;
      elems[0].getLocation().
      then(function (navDivLocation) {
        first = navDivLocation.y;
      });

      // Find the second sections's y position and assert it is the same as first
      var second;
      elems[1].getLocation().
      then(function (navDivLocation) {
        second = navDivLocation.y;
        expect(first).toEqual(second);
      });

      // Find the third sections's y position and assert it below first
      var third;
      elems[2].getLocation().
      then(function (navDivLocation) {
        third = navDivLocation.y;
        expect(first).toBeLessThan(third);
      });
    });
  });

});
