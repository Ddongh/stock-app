const sf = {};

sf.analyze = (code, method, start, end) => { // 분석하기 버튼 클릭 이벤트
    sf.validate();
    console.log("분석시작!!!!!!!!!!!");
    console.log("code : " + code);
    console.log("method : " + method);
    console.log("start : " + start);
    console.log("end : " + end);
}

sf.validate = () => {
    debugger;
}

sf.stockCrawling = (code, start, end) => { // code : 종목코드, start : 시작일, end : 종료일;
    alert("stockCrawling");
}

sf.test = () => {
    alert("test!!!!!!!");
}

export default sf;