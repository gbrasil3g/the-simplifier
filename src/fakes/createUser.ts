import faker from 'faker';

interface createUserOptions {
  name?: boolean;
  email?: boolean;
}

const createUser = async ({
  email,
  name,
}: createUserOptions = {}): Promise<any> => {
  let result;

  if (email === true) {
    const generatedMail = faker.internet.email();

    result = {
      email: generatedMail,
    };
  }

  if (name === true) {
    const generatedName = faker.name.findName();

    result = {
      name: generatedName,
    };
  }

  if (name === true && email === true) {
    const generatedName = faker.name.findName();
    const generatedMail = faker.internet.email();

    result = {
      email: generatedMail,
      name: generatedName,
    };
  }

  return result;
};

export default createUser;
