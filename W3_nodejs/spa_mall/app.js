const express = require("express");
const app = express();
const port = 3000;

// app.use로 미들웨어를 구현할 수 있다.
app.use((req, res, next) => {
  console.log("미들웨어가 구현이 됐나 @.@");
  //   next(); // next를 주석 처리 하면 그 다음 미들웨어로 넘어가지 않기 때문에, 포트로 서버가 켜졌어도 제대로 작동하진 않는다.
  // NextFunction : 미들웨어에서 빼놓을 수 없음
  // 위의 경우, console.log() 실행된 뒤 next()를 만나면, 바로 다음(next) 미들웨어로 이동한다.
  // Router도 미들웨어이기 때문에 app.get으로 넘어간다.
  res.send("미들웨어의 응답이에요");
});

//라우터, 즉 get Method로 들어오는 것도 미들웨어 기반으로 구현된 것
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(port, "포트로 서버가 켜졌어요");
});
