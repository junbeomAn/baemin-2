import express from 'express';
const router = express.Router();
router.get('/', (req, res) => {});
router.get('/login', (req, res) => {
  res.render('login', { title: '로그인 페이지' });
});
router.get('/signup/terms', (req, res) => {
  res.render('signup-terms', { title: '회원가입 약관동의' });
});
export default router;
