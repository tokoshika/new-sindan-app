"use client";
import React, { useState } from "react";

export default function Test() {
  const questionBox = [
    {
      question: "質問1",
      answers: [
        { text: "うん1", value: 5 },
        { text: "いいえ1", value: 3 },
        { text: "わからない1", value: 1 },
      ],
    },
    {
      question: "質問2",
      answers: [
        { text: "うん2", value: 5 },
        { text: "いいえ2", value: 3 },
        { text: "わからない2", value: 1 },
      ],
    },
    {
      question: "質問3",
      answers: [
        { text: "うん3", value: 5 },
        { text: "いいえ3", value: 3 },
        { text: "わからない3", value: 1 },
      ],
    },
  ];
  const [count, setCount] = useState(0);
  const start = () => {
    document.querySelector(".question-container").textContent =
      questionBox[count].question;

    const ansContainer = document.querySelector(".ans-container");

    questionBox[count].answers.forEach((ans) => {
      const button = document.createElement("button");
      button.innerText = ans.text;
      const value = ans.value;
      button.dataset.value = value;

      ansContainer.appendChild(button);

      //   ボタンクリックした時の挙動
      button.addEventListener("click", (e) => {
        console.log(e.target.textContent);
        console.log(parseInt(e.target.dataset.value));
        setCount(count + 1);
        console.log(count);
      
      });
    });
  };

  const startbtn = () => {
    const title = document.querySelector(".title");
    const mainContainer = document.querySelector(".main-container");
    title.classList.add("hide");
    mainContainer.classList.remove("hide");
    start();
  };

  return (
    <>
      <h1>This is Test page</h1>
      <p>{count}</p>
      <button className="start-btn" onClick={startbtn}>
        Start button
      </button>
      <h1 className="title">EVRYBODY DANCE NOW</h1>

      <div className="main-container hide">
        <div className="question-container">question</div>
        <div className="ans-container"></div>
      </div>
    </>
  );
}
