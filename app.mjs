import express from 'express';
const app = express();
const port = 3000;
// const fromRoutes = require('./routes/form');
// import router from './routes/form.mjs';

import fromRoutes from './routes/form';

// const fromRoutes = router;

console.log('hello');

app.use('/', (req, res) => {
	res.send('hello Express App');
});
app.use('/form', fromRoutes);

app.listen(port);
