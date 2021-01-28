import { createFakeUser } from '../src/simplifier';

describe('Trying to create fake users', () => {
  it('Return a fake user mail', async () => {
    const user = await createFakeUser({
      email: true,
    });

    expect(user.email).toBeDefined();
  });

  it('Return "undefined" in user mail', async () => {
    const user = await createFakeUser({
      email: false,
    });

    expect(user).toBeUndefined();
  });

  it('Return a fake user name', async () => {
    const user = await createFakeUser({
      name: true,
    });

    expect(user.name).toBeDefined();
  });

  it('Return "undefined" in user name', async () => {
    const user = await createFakeUser({
      name: false,
    });

    expect(user).toBeUndefined();
  });

  it('Return a fake user name & fake user mail', async () => {
    const user = await createFakeUser({
      email: true,
      name: true,
    });

    expect(user.email).toBeDefined();
    expect(user.name).toBeDefined();
  });

  it('Return "undefined" in user name & "undefined" in user mail', async () => {
    const user = await createFakeUser({
      email: false,
      name: false,
    });

    expect(user).toBeUndefined();
    expect(user).toBeUndefined();
  });

  it('Return "undefined" in user name & a fake user mail', async () => {
    const user = await createFakeUser({
      email: true,
      name: false,
    });

    expect(user.email).toBeDefined();
    expect(user.name).toBeUndefined();
  });

  it('Return "undefined" in user mail & a fake user name', async () => {
    const user = await createFakeUser({
      email: false,
      name: true,
    });

    expect(user.email).toBeUndefined();
    expect(user.name).toBeDefined();
  });
});
