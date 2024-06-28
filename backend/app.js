import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

app.get('/', (req, res) => {
	res.status(200).json({ status: 'success' });
});

app.listen(3000, () => {
	console.log(`Server listening at port 3000`);
});
