import React from "react"

const Card = ({ heading, paragraph, imgUrl, projectLink }) => {
  return (
    <div className="card" style={{ position: "relative" }}>
      <img
        src={imgUrl}
        alt=""
        style={{ objectFit: "cover", objectPosition: 'center top', width: "100%", height: '100%' }}
      />
      <div className="content" style={{ position: "absolute", width: "100%" }}>
        <h1 className="header">{heading}</h1>
        <p className="text">{paragraph}</p>
        <a
          href={projectLink ? projectLink : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Explore
        </a>
      </div>
    </div>
  )
}

export default Card
