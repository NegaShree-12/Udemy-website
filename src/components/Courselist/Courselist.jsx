
import "./Courselist.css";
import Chatgpt from "../../assets/chatgpt.png";
import Ai from "../../assets/Ai.png";
import Midjourney from "../../assets/Midjourney.png";
import OpenAi from "../../assets/OpenAi.png";

const courses = [
  {
    id: 1,
    image: Chatgpt,
    title: "ChatGPT Complete Guide: Learn Generative AI, ChatGPT & More",
    instructor: "Julian Melanson, Benza Maman, Leap...",
    rating: 4.5,
    reviews: 43165,
    price: "₹2,699",
    tags: ["Premium", "Bestseller"],
  },
  {
    id: 2,
    image: Ai,
    title: "The Complete AI-Powered Copywriting Course & ChatGPT",
    instructor: "Ing. Tomas Moravek, Learn Digital...",
    rating: 4.5,
    reviews: 1720,
    price: "₹3,099",
    tags: ["Premium"],
  },
  {
    id: 3,
    image: Midjourney,
    title: "ChatGPT & Midjourney & Gemini: Digital Marketing Assistants",
    instructor: "Anton Voroniuk, Anton Voroniuk Support...",
    rating: 4.4,
    reviews: 456,
    price: "₹799",
    tags: ["Premium"],
  },
  {
    id: 4,
    image: OpenAi,
    title: "ChatGPT Master: Complete OpenAI ChatGPT Course",
    instructor: "Faisal Zamir, Jafri Code, Pro Python...",
    rating: 4.3,
    reviews: 418,
    price: "₹1,299",
    tags: [],
  },
];

const Header = () => {
  const tabs = [
    "ChatGPT",
    "Data Science",
    "Python",
    "Machine Learning",
    "Deep Learning",
    "Artificial Intelligence (AI)",
    "Statistics",
    "Natural Language Processing",
  ];
  return (
    <div className="header">
      {tabs.map((tab, index) => (
        <button key={index} className="tab">
          {tab}
        </button>
      ))}
    </div>
  );
};

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <img src={course.image} alt={course.title} className="course-image" />
      <div className="course-details">
        <h3 className="course-title">{course.title}</h3>
        <p className="course-instructor">{course.instructor}</p>
        <div className="course-rating">
          <span>⭐ {course.rating}</span>
          <span>({course.reviews})</span>
        </div>
        <div className="course-price">{course.price}</div>
        <div className="course-tags">
          {course.tags.map((tag, index) => (
            <span key={index} className="course-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const CourseGrid = () => {
  return (
    <div className="course-grid">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
      <button className="show-more">Show all Data Science courses</button>
    </div>
  );
};

const CourseList = () => {
  return (
    <div className="app">
      <Header />
      <CourseGrid />
    </div>
  );
};

export default CourseList;
