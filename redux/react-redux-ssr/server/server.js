import Express from 'express';
import path from 'path';

const app = new Express();
const port = process.env.PORT || 3000;

console.log((path.join(__dirname, '../dist')));
app.use(require('serve-static')(path.join(__dirname, '../dist')));
app.use(require('cookie-parser')());
app.use(require('../common/utils/cookie/middleware'));
app.use(require('./middlewares/handleRender'));
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});