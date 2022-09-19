document.getElementById("submitButton").onclick = login;

function login() {
    let textid = document.getElementById("textid").value;
    let userPw = document.getElementById("Password").value;
    console.log(textid);
    let data = {
        id: textid,
        pw: userPw
    };
    localStorage.setItem("data", JSON.stringify(data));
      // 나를 열었던 사람한테
    self.close();
    // 비어있는 문자열, 숫자 0 false처리
    if (textid == "ssafy" && userPw == "1234") {
        alert("로그인 success");
        // document.querySelector("#Login").setAttribute("style","display:none");
        // document.querySelector("#Signup").setAttribute("style", "display:none");
        // document.querySelector("#Profile").setAttribute("style", "display: block");
        console.log("asdasdasd");
        console.log(document.querySelector("#Signup").getAttribute("style"));
        document.location.href = "index.html";
        console.log(document.querySelector("#Profile").getAttribute("style"));
    } else {
        alert("로그인 fail");
    }
}
let data = localStorage.getItem("data");
if (data) {
    // 로컬 스토리지에서 vote라는 이름의 값이 있을 경우
    data = JSON.parse(data);
    console.log(data);
    if (data) {
        document.querySelector("#Login").setAttribute("style", "display:none");
        document.querySelector("#Signup").setAttribute("style", "display:none");
        document.querySelector("#Profile").setAttribute("style", "display: block");
    }
    else {
        document.querySelector("#Login").setAttribute("style", "display:block");
        document.querySelector("#Signup").setAttribute("style", "display:block");
        document.querySelector("#Profile").setAttribute("style", "display: none");
    }
}