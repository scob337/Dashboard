import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cors from 'cors';

const app = express();
const port = 3000;

const user = {
  username: 'admin',
  name:'Hossam Shaaban',
  password: 'password123',
  email: 'scob198350@gmail.com',
  avatar: "https://scontent.fcai22-4.fna.fbcdn.net/v/t39.30808-1/455138665_1015305426716284_2767636540071642352_n.jpg?stp=dst-jpg_s200x200&_nc_cat=106&ccb=1-7&_nc_sid=50d2ac&_nc_eui2=AeHBa_PUKMaurdLrnrvYMbIn-jJ5GA2BVQT6MnkYDYFVBNMXTtvXsdT-TtaSio4dPPX5Myiaq4BmhOjrShhlrNWJ&_nc_ohc=1VIsTbv053gQ7kNvgE4xi3M&_nc_ht=scontent.fcai22-4.fna&oh=00_AYBzxZR76gCtnbLONePAtPqwgnS7O_lBr4gDf5-7VEKrUA&oe=66D01189"
};

const secretKey = 'your_secret_key';

// إعداد middleware لتحليل JSON
app.use(express.json());
app.use(cors());

// تسجيل الدخول
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  // تحقق من اسم المستخدم
  if (username !== user.username) {
    return res.status(400).json({ message: 'Invalid username or password' });
  }

  // تحقق من كلمة المرور
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({ message: 'Invalid username or password' });
  }

  // إنشاء JWT
  const token = jwt.sign({ username: user.username }, secretKey, { expiresIn: '1h' });

  res.json({
    message: 'Logged in successfully',
    token,
    username: user.username,
    name:user.name,
    email: user.email,
    avatar: user.avatar
  });
});

// جلب بيانات المستخدم
app.get('/user', authenticateToken, (req, res) => {
  const { password, ...userWithoutPassword } = user; // استبعاد كلمة المرور من الاستجابة
  res.json(userWithoutPassword);
});

// تحديث بيانات المستخدم (يحتاج إلى مصادقة)
app.put('/user', authenticateToken, async (req, res) => {
  const { username, newPassword, email, avatar } = req.body;

  // تحقق من اسم المستخدم
  if (username !== user.username) {
    return res.status(400).json({ message: 'Invalid username' });
  }

  // تحديث كلمة المرور إذا تم تقديمها
  if (newPassword) {
    user.password = await bcrypt.hash(newPassword, 10);
  }

  // تحديث الحقول الأخرى
  user.email = email || user.email;
  user.avatar = avatar || user.avatar;

  res.json({ message: 'User updated successfully', user: { username: user.username, email: user.email, avatar: user.avatar } });
});

// Middleware للتحقق من JWT
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.sendStatus(403);

    req.user = user;
    next();
  });
}

app.listen(port, async () => {
  // تشفير كلمة مرور المستخدم في بداية السيرفر
  user.password = await bcrypt.hash(user.password, 10);
  console.log(`Server running at http://localhost:${port}`);
});
