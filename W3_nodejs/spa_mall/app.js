const express = require("express");
const app = express();
const port = 3000;

// arrow 함수
// req, res라는 인자에 express가 req, res 객체를 넣어준다. -> 익스프레스가 제공하는 약속
// app.get()라는 HTTP 메서드가 이 경로("/")로 요청이 들어왔다면, 이하가 실행되는데
// response 객체는 express.js가 넘겨주는 거고, 그 값을 아래의 "Hello World"로 보내주겠다.
app.get("/", (req, res) => {
  res.send("Hello World");
});

//웹서버를 만든 것
//listen() 서버를 이 포트로 키겠다
//app.listen() -> 첫번째 인자 port, 두번째 인자 함수
//port가 제대로 켜졌다면 두 번째에 있는 함수가 실행된다
app.listen(port, () => {
  console.log(port, "포트로 서버가 켜졌어요");
});
