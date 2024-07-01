import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import jwt from 'jsonwebtoken';

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

app.get('/', (req, res) => {
	res.status(200).json({ status: 'success' });
});

app.post('/login', (req, res) => {
	const name = req.body.name;
	const user = { name };
	const accessToken = jwt.sign(user, 'my-auth-token-secured-secret', {
		expiresIn: '5m',
	});
	const refreshToken = jwt.sign(user, 'my-refresh-token-secured-secret', {
		expiresIn: '5d',
	});

	const fiveDays = 5 * 24 * 60 * 60 * 1000;

	res.cookie('refreshTk', refreshToken, {
		httpOnly: true,
		secure: true,
		expires: new Date(Date.now() + fiveDays),
	});

	res.status(200).json({
		status: 'success',
		data: {
			accessToken,
			user: { name },
		},
	});
});

app.listen(3000, () => {
	console.log(`Server listening at port 3000`);
});
