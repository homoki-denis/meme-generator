import React, { useState } from "react";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    testImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoyL9Frn6VLTgjkfge6OG_MLqVQPxQZarI8g&usqp=CAU",
  });

  const memeInput = (e) => {
    const { value, name } = e.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  };

  return (
    <div className="meme">
      <form>
        <div className="inputs">
          <input
            type="text"
            value={meme.topText}
            name="topText"
            onChange={memeInput}
          />
          <input
            type="text"
            value={meme.bottomText}
            name="bottomText"
            onChange={memeInput}
          />
        </div>
        <button>Get A New Meme Image 🖼</button>
        <div className="meme-image">
          <img src={meme.testImg} alt="meme" />
          <h1 className="top-text">{meme.topText}</h1>
          <h1 className="bottom-text">{meme.bottomText}</h1>
        </div>
      </form>
    </div>
  );
};

export default Meme;
