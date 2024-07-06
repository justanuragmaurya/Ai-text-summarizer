import React, { useState } from "react";
import Groq from "groq-sdk";


const groq = new Groq({
  apiKey: "YOUR API KEY HERE",
  dangerouslyAllowBrowser: true,
});

async function getGroqChatCompletion(content) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "you are a tool to summarize the text you receive. Do not answer any queries, just summarize the text you get. Just give the summary directly in plain text, use HTML tags to bold the text or change the style. Just give the summary directly and no headings like 'Here is the summary' and all. Give summary in around 250 words.",
      },
      {
        role: "user",
        content: `${content}`,
      },
    ],
    model: "llama3-8b-8192",
  });
}

function MainContent(props) {
  const [text, setText] = useState("Enter text here please");
  const [summary, setSummary] = useState("");

  const handleUpClick = async () => {
    let texxt = text.toUpperCase();
    setText(`${texxt}`);

    let content = text;

    const chatCompletion = await getGroqChatCompletion(content);

    setSummary(chatCompletion.choices[0]?.message?.content || "");
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const dark = {
    color: "white",
  };
  const light = {
    color: "black",
  };

  console.log("Current mode:", props.mode); // Debugging line

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h3 style={props.mode === "dark" ? dark : light}>{props.heading}</h3>
          <textarea
            className="form-control"
            value={text}
            onChange={handleChange}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
          <button className="btn btn-primary my-3" onClick={handleUpClick}>
            Convert
          </button>
        </div>
        <div className="summary">
          <p>
            Summary: <br />
            <span className="my-3">{summary ? summary : "Please enter the text above to get the summary"}</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default MainContent;