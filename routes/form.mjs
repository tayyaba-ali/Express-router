import express from 'express';
const router = express.Router();

router.get('/form', (req, res) => {
	res.send('hello User ');
});

// module.exports = router;
export default router;
