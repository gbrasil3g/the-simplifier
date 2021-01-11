import chalk from 'chalk';

const errorMens = chalk.supportsColor
  ? chalk.reset.inverse.bold.bgBlack.yellowBright(` INTERNAL ERROR `)
  : ' INTERNAL ERROR ';

class InternalError extends Error {
  constructor(text: string) {
    super(text);

    this.name = errorMens;
  }
}

export default InternalError;
