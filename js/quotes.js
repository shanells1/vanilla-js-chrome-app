const quotes = [
    {
        quote: "삶이 있는 한 희망은 있다" ,
        author: "키케로",
    },
    {
        quote: "언제나 현재에 집중할수 있다면 행복할것이다." ,
        author: "파울로 코엘료",
    },
    {
        quote: "내일은 내일의 태양이 뜬다 피할수 없으면 즐겨라" ,
        author: "로버트 엘리엇",
    },
    {
        quote: "먼저핀꽃은 먼저진다  남보다 먼저 공을 세우려고 조급히 서둘것이 아니다",
        author: "채근담",
    },
    {
        quote: "단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?",
        author: "이드리스 샤흐",
    },
    {
        quote: "행복의 문이 하나 닫히면 다른 문이 열린다 그러나 우리는 종종 닫힌 문을 멍하니 바라보다가 우리를 향해 열린 문을 보지 못하게 된다",
        author: "헬렌켈러",
    },
    {
        quote: "신은 용기있는자를 결코 버리지 않는다",
        author: "켄러",
    },
    {
        quote: "절대 어제를 후회하지 마라. 인생은 오늘의  내 안에 있고 내일은 스스로 만드는것이다." ,
        author: "L론허바드",
    },
    {
        quote: "자신감 있는 표정을 지으면 자신감이 생긴다",
        author: "찰스다윈",
    },
    {
        quote: "1퍼센트의 가능성, 그것이 나의 길이다.",
        author: "나폴레옹",
    }
] 

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;