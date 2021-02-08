import fileOneFunction from './babel-auto-file-one';

test('console should have been called', () => {
  const consoleSpy = jest.spyOn(global.console, 'log');
  fileOneFunction()
  expect(consoleSpy).toHaveBeenCalled()
})
