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
    heading = browser.driver.findElement(by.id("heading"));
    expect(heading.getText()).toEqual("Our Menu");
  });

  it('should have 3 sections', function() {
    browser.driver.get('file://' + __dirname + '/../index.html');
    browser.driver.findElements(by.id('section')).
    then(function(elems) {
      expect(elems.length).toEqual(3);
    });
  });

  it('should have 3 sections in the same verticle location when the browser with is 992px or larger', function() {
    browser.manage().window().setSize(992, 992);
    browser.driver.get('file://' + __dirname + '/../index.html');
    browser.driver.findElements(by.id("section")).
    then(function(elems) {
      var first;
      elems[0].getLocation().
      then(function (navDivLocation) {
        first = navDivLocation.y;
      });
      for (i = 1; i < elems.length; i++) {
        elems[i].getLocation().
        then(function (navDivLocation) {
           expect(navDivLocation.y).toEqual(first);
        });
      };
    });
  });


});
