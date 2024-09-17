import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cors from "cors";
import path from "path";
import url from "url";

const app = express();
const port = 3000;

// Get the directory name from import.meta.url
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

// User data
const user = {
	username: "admin",
	name: "Hossam Shaaban",
	password: "password123",
	email: "scob198350@gmail.com",
	avatar: "/images/Pic.jpg", // Use a relative path for the static file
};

const secretKey = "your_secret_key";

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public"))); // Serve static files from 'public'

// Authentication middleware
function authenticateToken(req, res, next) {
	const authHeader = req.headers["authorization"];
	const token = authHeader && authHeader.split(" ")[1];

	if (!token) return res.sendStatus(401);

	jwt.verify(token, secretKey, (err, user) => {
		if (err) return res.sendStatus(403);

		req.user = user;
		next();
	});
}

// Routes
app.post("/login", async (req, res) => {
	const { username, password } = req.body;

	if (username !== user.username) {
		return res.status(400).json({ message: "Invalid username or password" });
	}

	const isPasswordValid = await bcrypt.compare(password, user.password);
	if (!isPasswordValid) {
		return res.status(400).json({ message: "Invalid username or password" });
	}

	const token = jwt.sign({ username: user.username }, secretKey, {
		expiresIn: "1h",
	});

	res.json({
		message: "Logged in successfully",
		token,
		username: user.username,
		name: user.name,
		email: user.email,
		avatar: user.avatar,
	});
});

app.get("/user", authenticateToken, (req, res) => {
	const { password, ...userWithoutPassword } = user; // Exclude password from response
	res.json(userWithoutPassword);
});

app.put("/user", authenticateToken, async (req, res) => {
	const { username, newPassword, email, avatar } = req.body;

	if (username !== user.username) {
		return res.status(400).json({ message: "Invalid username" });
	}

	if (newPassword) {
		user.password = await bcrypt.hash(newPassword, 10);
	}

	user.email = email || user.email;
	user.avatar = avatar || user.avatar;

	res.json({
		message: "User updated successfully",
		user: { username: user.username, email: user.email, avatar: user.avatar },
	});
});

app.listen(port, async () => {
	user.password = await bcrypt.hash(user.password, 10);
	console.log(`Server running at http://localhost:${port}`);
});
