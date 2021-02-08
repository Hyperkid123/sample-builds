import fileOneFunction from './absolute-esm';

test('will fail because can\'t process modules', () => {
  const consoleSpy = jest.spyOn(global.console, 'log');
  fileOneFunction()
  expect(consoleSpy).toHaveBeenCalled()
})
