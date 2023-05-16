const quotes = [
    {
        quote: "티끌 모아봤자 티끌이다",
        author:"김재현"
    },
    {
        quote: "오는 건 순서 있어도 가는 건 순서가 없다",
        author:"김재현"
    },
    {
        quote: "선배는 입닫고 지갑열어라",
        author:"김재현"
    },
    {
        quote: "열심히 공부안하면 더울 떄 더운데서 일하고 추울 때 추운데서 일한다",
        author:"김재현"
    },
    {
        quote: "애인과 놀러가서 자고오고 싶은데 말을 못하겠으면 가방 속 세면백을 보여줘라",
        author:"김재현"
    },
    {
        quote: "일찍 일어나는 새가 피곤하다",
        author:"김재현"
    },
    {
        quote: "시작은 시작일 뿐이다",
        author:"김재현"
    },
    {
        quote: "JS나 똑바로 하자",
        author:"김재현"
    },
    {
        quote: "삶은 계란이다",
        author:"김재현"
    },


];



const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");
const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];



quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;