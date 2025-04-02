import { AbsoluteFill } from "remotion";
import { useEffect, useState } from "react";

const Boxes = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch("your api key of https://mediastack.com/dashboard")
        .then((response) => response.json())
        .then((data) => {
            setData(data.data);
            console.log(data.data);
        });
    }, []);
    
    return (
        <AbsoluteFill
            style={{
                padding: "20px",
                fontFamily: "Arial, sans-serif",
                backgroundImage: data[0]?.image ? `url(${data[0].image})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                color: "white", // For readability against images
                boxSizing: "border-box",
                overflow: "hidden",
            }}
        >
            {data[0] && (
                <div
                    style={{
                        maxWidth: "90%",
                        backgroundColor: "rgba(0, 0, 0, 0.6)", // Transparent black background for better readability
                        padding: "20px",
                        borderRadius: "15px",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <h1
                        style={{
                            fontSize: "24px",
                            fontWeight: "bold",
                            marginBottom: "10px",
                            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
                        }}
                    >
                        {data[0].title}
                    </h1>
                    <p
                        style={{
                            fontSize: "16px",
                            marginBottom: "5px",
                            fontWeight: "bold",
                        }}
                    >
                        <strong>Author:</strong> {data[0].author || "Unknown"}
                    </p>
                    <p
                        style={{
                            fontSize: "16px",
                            marginBottom: "5px",
                            fontWeight: "bold",
                        }}
                    >
                        <strong>Category:</strong> {data[0].category}
                    </p>
                    <p
                        style={{
                            fontSize: "16px",
                            marginBottom: "5px",
                            fontWeight: "bold",
                        }}
                    >
                        <strong>Country:</strong> {data[0].country}
                    </p>
                    <p
                        style={{
                            fontSize: "16px",
                            marginBottom: "10px",
                            lineHeight: "1.4",
                        }}
                    >
                        <strong>Description:</strong> {data[0].description}
                    </p>
                    <img
                        src={data[0].image}
                        alt={data[0].title}
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                            borderRadius: "8px",
                            marginBottom: "15px",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                        }}
                    />
                    <p
                        style={{
                            fontSize: "16px",
                            marginBottom: "10px",
                            fontWeight: "bold",
                        }}
                    >
                        <strong>Language:</strong> {data[0].language}
                    </p>
                    <p
                        style={{
                            fontSize: "16px",
                            marginBottom: "15px",
                            fontWeight: "bold",
                        }}
                    >
                        <strong>Published At:</strong> {new Date(data[0].published_at).toLocaleString()}
                    </p>
                    <a
                        href={data[0].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: "#00aaff",
                            textDecoration: "underline",
                            fontWeight: "bold",
                        }}
                    >
                        Read more
                    </a>
                </div>
            )}
        </AbsoluteFill>
    );
};

export default Boxes;
