var async = require('async');
var print = require('./print');
var log = require('./log');

async.series([
  print('J', 'green', 100),
  print('JE', 'green', 100),
  print('JEL', 'green', 100),
  print('JELA', 'green', 100),
  print('JELAI', 'green', 100),
  print('JELA', 'green', 100),
  print('JEL', 'green', 100),
  print('JE', 'green', 100),
  print('J', 'green', 100),
  print('J', 'blue', 1500),
  print('JE', 'blue', 250),
  print('JEL', 'blue', 250),
  print('JELA', 'blue', 250),
  print('JELAI', 'blue', 250),
  print('JELA', 'blue', 250),
  print('JEL', 'blue', 250),
  print('JE', 'blue', 250),
  print('J', 'blue', 250),
  print('----', 'red', 250),

  print('J', 'inverse', 50),
  print('J E', 'red', 50),
  print('J E L', 'inverse', 50),
  print('J E L A', 'red', 50),
  print('J E L A I', 'inverse', 50),
  print('J E L A', 'red', 50),
  print('J E L', 'inverse', 50),
  print('J E', 'red', 50),
  print('J E L', 'inverse', 50),
  print('J E L A', 'red', 50),
  print('J E L A I', 'inverse', 50),
  print('J E L A', 'red', 50),
  print('J E L', 'inverse', 50),
  print('J', 'red', 50),

  print('J', 'bgBlack', 50),
  print('J E', 'bgRed', 50),
  print('J E L', 'bgMagenta', 50),
  print('J E L A', 'bgCyan', 50),
  print('J E L A I', 'bgBlue', 50),
  print('J E L A', 'bgGreen', 50),
  print('J E L', 'bgYellow', 50),
  print('J', 'bgWhite', 50),

  print('J', 'bgWhite', 50),
  print('J E L', 'bgYellow', 50),
  print('J E L A', 'bgGreen', 50),
  print('J E L A I', 'bgBlue', 50),
  print('J E L A', 'bgCyan', 50),
  print('J E L', 'bgMagenta', 50),
  print('J E', 'bgRed', 50),
  print('J', 'bgBlack', 50),

  print('J', 'bgBlack', 50),
  print('J E', 'bgRed', 50),
  print('J E L', 'bgMagenta', 50),
  print('J E L A', 'bgCyan', 50),
  print('J E L A I', 'bgBlue', 50),
  print('J E L A', 'bgGreen', 50),
  print('J E L', 'bgYellow', 50),
  print('J', 'bgWhite', 50),

  print('J', 'bgWhite', 50),
  print('J E L', 'bgYellow', 50),
  print('J E L A', 'bgGreen', 50),
  print('J E L A I', 'bgBlue', 50),
  print('J E L A', 'bgCyan', 50),
  print('J E L', 'bgMagenta', 50),
  print('J E', 'bgRed', 50),
  print('J', 'bgBlack', 50),

  print('J', 'bgWhite', 50),
  print('J   E', 'bgWhite', 50),
  print('J   E   L  ', 'bgYellow', 50),
  print('J   E   L   A  ', 'bgGreen', 50),
  print('J   E   L   A   I', 'bgBlue', 50),
  print('J   E   L   A  ', 'bgCyan', 50),
  print('J   E   L  ', 'bgMagenta', 50),
  print('J   E', 'bgRed', 50),
  print('J', 'bgBlack', 50),

  print('J', 'bgWhite', 50),
  print('J     E', 'bgWhite', 50),
  print('J     E     L  ', 'bgYellow', 50),
  print('J     E     L     A  ', 'bgGreen', 50),
  print('J     E     L     A    I', 'bgBlue', 50),
  print('J     E     L     A  ', 'bgCyan', 50),
  print('J     E     L  ', 'bgMagenta', 50),
  print('J     E', 'bgRed', 50),
  print('J', 'bgBlack', 50),

  print('J', 'black', 50),
  print('J E', 'red', 50),
  print('J E L', 'magenta', 50),
  print('J E L A', 'cyan', 50),
  print('J E L A I', 'blue', 50),
  print('J E L A', 'green', 50),
  print('J E L', 'yellow', 50),
  print('J', 'white', 50),

  print('I\'m sorry!', 'inverse', 50),
  print('Kung pinagantay kita :(', 'red', 50),
  print('I love you :*', 'inverse', 50),
  print('Sorry, talaga :(', 'magenta', 50),

  print('   **   **  ', 'bgRed', 50),
  print('**   **   **', 'bgRed', 50),
  print('**        **', 'bgRed', 50),
  print(' **      ** ', 'bgRed', 50),
  print('     **    ', 'bgRed', 50),
  print('', 'black', 150),

  print('   **   **  ', 'red', 50),
  print('**   **   **', 'red', 50),
  print('**        **', 'red', 50),
  print(' **      ** ', 'red', 50),
  print('     **    ', 'red', 50),
  print('', 'black', 150),

  print('   **   **  ', 'bgRed', 50),
  print('**   **   **', 'bgRed', 50),
  print('**        **', 'bgRed', 50),
  print(' **      ** ', 'bgRed', 50),
  print('     **    ', 'bgRed', 50),
  print('', 'black', 150),

  print('   **   **  ', 'red', 50),
  print('**   **   **', 'red', 50),
  print('**        **', 'red', 50),
  print(' **      ** ', 'red', 50),
  print('     **    ', 'red', 50),
  print('', 'black', 150),

  print('   **   **  ', 'red', 50),
  print('**   **   **', 'magenta', 50),
  print('**        **', 'cyan', 50),
  print(' **      ** ', 'green', 50),
  print('     **    ', 'yellow', 50),
  print('', 'black', 150)
]);