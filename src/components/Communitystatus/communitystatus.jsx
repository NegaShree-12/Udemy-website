import React from "react";
import punctuation from "../../assets/punctuation.svg";

const CommunityStats = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        textAlign: "center",
        padding: "100px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "70vh",
        fontFamily: "'Poppins', sans-serif",
        position: "relative",
      }}
    >
      <img
        src={punctuation}
        alt="Top-left punctuation"
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          width: "100px",
          height: "100px",
          transform: "rotate(180deg)",
        }}
      />

      <img
        src={punctuation}
        alt="Bottom-right punctuation"
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          width: "100px",
          height: "100px",
        }}
      />

      <h2
        style={{
          fontSize: "36px",
          fontWeight: "600",
          lineHeight: "1.5",
          color: "#000",
          maxWidth: "800px",
        }}
      >
        Our <span style={{ fontWeight: "700" }}>student community</span> is{" "}
        <span style={{ fontWeight: "700" }}>more than one million</span> strong
        <br />
        <span style={{ fontSize: "24px", color: "#666" }}>
          (and this is just the beginning)
        </span>
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "50px",
          marginTop: "50px",
        }}
      >
        <Stat number="+1M" label="community members" />
        <Stat number="+19M" label="study sessions" />
        <Stat number="+4M" label="study goals reached" />
        <Stat number="+215" label="countries" />
        <Stat number="4.8/5" label="positive reviews" />
      </div>
    </div>
  );
};

const Stat = ({ number, label }) => (
  <div style={{ textAlign: "center" }}>
    <p
      style={{
        fontSize: "48px",
        fontWeight: "700",
        color: "#7B4DAD",
      }}
    >
      {number}
    </p>
    <p
      style={{
        fontSize: "18px",
        fontWeight: "400",
        color: "#7B4DAD",
        marginTop: "10px",
      }}
    >
      {label}
    </p>
  </div>
);

export default CommunityStats;
