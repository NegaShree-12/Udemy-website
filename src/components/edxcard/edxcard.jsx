import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import "./TrendingOnEdX.css";

import img1 from "../../assets/images1.png";
import img2 from "../../assets/images2.png";
import img3 from "../../assets/images3.png";
import img4 from "../../assets/images4.png";
import img5 from "../../assets/images5.png";
import img6 from "../../assets/images6.png";
import img7 from "../../assets/images7.png";
import img8 from "../../assets/images8.png";
import img9 from "../../assets/images9.png";
import img10 from "../../assets/images10.png";
import img11 from "../../assets/images11.png";
import img12 from "../../assets/images12.png";
import img13 from "../../assets/images13.png";
import img14 from "../../assets/images14.png";
import img15 from "../../assets/images15.png";
import img16 from "../../assets/images16.png";

const TrendingOnEdX = () => {
  const [activeTab, setActiveTab] = useState("Executive Education");

  const categories = [
    "Executive Education",
    "Master's Degrees",
    "Bachelor's Degrees",
    "Certificates",
  ];

  const cardsData = [
    {
      id: 1,
      category: "Executive Education",
      title: "Oxford AI Programme",
      subtitle: "(Oxford Saïd)",
      description:
        "The Oxford AI Programme at Oxford Saïd offers cutting-edge insights into artificial intelligence.",
      image: img1,
    },
    {
      id: 2,
      category: "Executive Education",
      title: "MBA Essentials",
      subtitle: "(LSE)",
      description:
        "MBA Essentials from LSE provides core business knowledge for aspiring executives.",
      image: img2,
    },
    {
      id: 3,
      category: "Executive Education",
      title: "AI for Business",
      subtitle: "(MIT Sloan)",
      description:
        "MIT Sloan’s AI for Business explores the impact of AI on business strategies.",
      image: img3,
    },
    {
      id: 4,
      category: "Executive Education",
      title: "Leadership Programme",
      subtitle: "(Oxford Saïd)",
      description:
        "The Leadership Programme at Oxford Saïd hones your leadership skills for high-level management.",
      image: img4,
    },
    {
      id: 5,
      category: "Master's Degrees",
      title: "Data Science Master's",
      subtitle: "(Harvard)",
      description:
        "Harvard’s Data Science Master's equips you with advanced data analysis and interpretation skills.",
      image: img5,
    },
    {
      id: 6,
      category: "Master's Degrees",
      title: "MBA Programme",
      subtitle: "(Stanford)",
      description:
        "Stanford's MBA Programme is a comprehensive business education for future leaders.",
      image: img6,
    },
    {
      id: 7,
      category: "Master's Degrees",
      title: "Global Health MSc",
      subtitle: "(Johns Hopkins)",
      description:
        "Johns Hopkins’ Global Health MSc focuses on international health issues and solutions.",
      image: img7,
    },
    {
      id: 8,
      category: "Master's Degrees",
      title: "Finance Master's",
      subtitle: "(Wharton)",
      description:
        "Wharton’s Finance Master's delivers in-depth financial management and investment strategies.",
      image: img8,
    },
    {
      id: 9,
      category: "Bachelor's Degrees",
      title: "Computer Science BA",
      subtitle: "(MIT)",
      description:
        "The Computer Science BA at MIT develops strong foundational skills in computer science.",
      image: img9,
    },
    {
      id: 10,
      category: "Bachelor's Degrees",
      title: "Economics BA",
      subtitle: "(Yale)",
      description:
        "Yale's Economics BA offers a deep understanding of economic theories and applications.",
      image: img10,
    },
    {
      id: 11,
      category: "Bachelor's Degrees",
      title: "Engineering BSc",
      subtitle: "(Caltech)",
      description:
        "Caltech's Engineering BSc provides rigorous training in various engineering disciplines.",
      image: img11,
    },
    {
      id: 12,
      category: "Bachelor's Degrees",
      title: "Psychology BA",
      subtitle: "(Berkeley)",
      description:
        "Berkeley’s Psychology BA explores the complexities of human behavior and mental processes.",
      image: img12,
    },
    {
      id: 13,
      category: "Certificates",
      title: "Cybersecurity",
      subtitle: "(Stanford)",
      description:
        "Stanford's Cybersecurity Certificate offers advanced training in protecting digital information.",
      image: img13,
    },
    {
      id: 14,
      category: "Certificates",
      title: "Project Management",
      subtitle: "(Purdue)",
      description:
        "Project Management from Purdue covers essential project planning and execution skills.",
      image: img14,
    },
    {
      id: 15,
      category: "Certificates",
      title: "Digital Marketing",
      subtitle: "(Google)",
      description:
        "Google’s Digital Marketing Certificate teaches effective online marketing strategies.",
      image: img15,
    },
    {
      id: 16,
      category: "Certificates",
      title: "Leadership Certificate",
      subtitle: "(Cornell)",
      description:
        "Cornell's Leadership Certificate focuses on developing strong, effective leadership abilities.",
      image: img16,
    },
  ];

  const filteredCards = cardsData.filter((card) => card.category === activeTab);

  return (
    <div style={{ marginTop: "20px" }}>
      <Typography
        variant="h4"
        className="trending-title"
        style={{
          fontSize: "34px",
          textAlign: "start",
          marginLeft: "50px",
          fontWeight: "700",
        }}
      >
        Trending on Udemy
      </Typography>
      <div className="trending-container">
        <div className="category-tabs">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveTab(category)}
              variant={activeTab === category ? "contained" : "outlined"}
              className={`category-button ${
                activeTab === category ? "active" : ""
              }`}
              sx={{
                borderColor: "#dcdcdc",
                "&:hover": {
                  borderColor: "#2d7c49",
                },
              }}
            >
              {category}
            </Button>
          ))}
        </div>

        <Grid container spacing={3} justifyContent="center">
          {filteredCards.map((card) => (
            <Grid item xs={12} sm={6} md={3} key={card.id}>
              <Card className="custom-card">
                <CardMedia
                  component="img"
                  height="140"
                  image={card.image}
                  alt={card.title}
                  className="card-media"
                />
                <CardContent>
                  <Typography variant="h6" className="card-title">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" className="card-subtitle">
                    {card.subtitle}
                  </Typography>
                  <Typography variant="body2" className="card-description">
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default TrendingOnEdX;
