import express from 'express';
const app = express();
const port = 3000;
// const fromRoutes = require('./routes/form');

import routes from './routes/form.mjs';
// console.log(routes);

// import router from './routes/form.mjs';

// const fromRoutes = require('./routes/form.js');

// const fromRoutes = require('./routes/form');

// import router from './routes/form.mjs';

// const router = router;

console.log('hello');

app.use('/', (req, res) => {
	res.send('hello Express App');
});
app.use('/form', routes);

app.listen(port);
