import { Config as Configuration } from 'bili'

const configuration: Configuration = {
  input: 'src/simplifier.ts',
  output: {
    format: [
      'commonjs',
    ],
    moduleName: 'TheSimplifier',
    fileName: ({ format }, defaultFileName) => {
      if(format === 'commonjs') return 'simplifier.js'

      return defaultFileName
    }
  },
  plugins: {
    'typescript2': {
      clean: true,
      tsconfig: './tsconfig.build.json',
      useTsconfigDeclarationDir: true
    }
  }
}

export default configuration