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
  it('should have a title "Our Menu"', function() {
    browser.driver.get('file:///Users/kyle/Projects/simple-html-assignment/module2-solution/index.html');
    title = browser.driver.findElement(by.id("title"));
    expect(title.getText()).toEqual("Our Menu");
  });

  it('should have 3 sections', function() {
    browser.manage().window().setSize(320, 480);
    browser.driver.get('file:///Users/kyle/Projects/simple-html-assignment/module2-solution/index.html');
    browser.driver.findElements(by.id('section')).
    then(function(elems) {
      expect(elems.length).toEqual(3);
    });
  });
});
