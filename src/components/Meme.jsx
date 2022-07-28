import React, { useState, useEffect } from "react";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoyL9Frn6VLTgjkfge6OG_MLqVQPxQZarI8g&usqp=CAU",
  });

  const [allMemes, setAllMemes] = useState("");
  //   console.log(allMemes);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data));
  }, []);

  //   console.log(allMemes);

  const memeInput = (e) => {
    const { value, name } = e.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  };

  const newMeme = (e) => {
    e.preventDefault();
    const randomNumber = Math.floor(Math.random() * allMemes.data.memes.length);
    const url = allMemes.data.memes[randomNumber].url;

    setMeme((prevMemes) => {
      return {
        ...prevMemes,
        imgUrl: url,
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
            placeholder="Top Text"
          />
          <input
            type="text"
            value={meme.bottomText}
            name="bottomText"
            onChange={memeInput}
            placeholder="Bottom Text"
          />
        </div>
        <button onClick={newMeme}>Get A New Meme Image 🖼</button>
        <div className="meme-image">
          <img src={meme.imgUrl} alt="meme" />
          <h1 className="top-text">{meme.topText}</h1>
          <h1 className="bottom-text">{meme.bottomText}</h1>
        </div>
      </form>
    </div>
  );
};

export default Meme;
