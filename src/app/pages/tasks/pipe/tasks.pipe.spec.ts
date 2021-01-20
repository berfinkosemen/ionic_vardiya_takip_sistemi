import { UserTasksPipe } from './tasks.pipe';

describe('UserTasksPipe', () => {
  it('create an instance', () => {
    const pipe = new UserTasksPipe();
    expect(pipe).toBeTruthy();
  });
});
