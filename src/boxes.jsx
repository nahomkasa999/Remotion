import { AbsoluteFill, Img, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { useEffect, useState } from "react";

const Boxes = () => {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  useEffect(() => {
    fetch("http://api.mediastack.com/v1/news?access_key=9471d7cad40db446ce6e59cd2424d847&countries=us&languages=en")
      .then((response) => response.json())
      .then((data) => {
        const filteredData = data.data.filter((item) => item.image);
        setData(filteredData);
      });
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % data.length);
      }, 10000); // Change slide every 10 seconds

      return () => clearInterval(interval);
    }
  }, [data]);

  if (data.length === 0) return null;

  const currentNews = data[index];

  const fadeIn = interpolate(frame % (fps * 10), [0, fps * 2], [0, 1], {
    extrapolateRight: "clamp",
  });

  const slideIn = interpolate(frame % (fps * 10), [0, fps * 2], [100, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "black", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Img
        src={currentNews.image}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.8,
          transform: `scale(${1 + fadeIn * 0.1})`,
        }}
      />
      <AbsoluteFill
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: 80,
            fontWeight: "bold",
            opacity: fadeIn,
            transform: `translateY(${slideIn}px)`,
          }}
        >
          {currentNews.title}
        </h1>
        <h2
          style={{
            color: "white",
            fontSize: 40,
            opacity: fadeIn,
            transform: `translateY(${slideIn}px)`,
          }}
        >
          {currentNews.description}
        </h2>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export default Boxes;
