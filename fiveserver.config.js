module.exports = {
  port: 8087,
  root: './',
  open: ['index.html'],
  // 서버를 열때 오픈할 파일  여기서는 두가지 index.html pages/home.html
  host: 'localhost',
  browser: 'chrome',
  https: false,
  // 안전하지 않을 때 경고가 나오기 때문에
  watch: './',
};
