import  { useState } from "react";
import { useParams } from "react-router-dom";
import { FaFilePdf, FaVideo, FaBook, FaCode } from "react-icons/fa";
import "./CourseDetail.css";

const Coursedetail1 = () => {
  const { courseId } = useParams();
  const [selectedVideo, setSelectedVideo] = useState(null);

  const courseDetails = {
    "ui-ux": {
      title: "UI/UX Design",
      videoUrl: "https://www.youtube.com/embed/x3dQsMkJgDg?si=8vli3MmbffIQsHQU",
      materials: [
        {
          name: "Design Principles",
          videoUrl:
            "https://www.youtube.com/embed/O5IXf8qB9U4?si=E1YBiPjZzy9LwIBH",
          icon: <FaBook />,
        },
        {
          name: "Wireframing",
          videoUrl:
            "https://www.youtube.com/embed/SKvsPh0qdQU?si=jfn5_TVA3fYnWS5A",
          icon: <FaFilePdf />,
        },
        {
          name: "Prototyping",
          videoUrl:
            "https://www.youtube.com/embed/h9r_UpOzajA?si=EWkySKq0vazhL_k1",
          icon: <FaVideo />,
        },
      ],
    },
    "c-programming": {
      title: "C Programming",
      videoUrl: "https://www.youtube.com/embed/EjavYOFoJJ0?si=LMLi2VmjmKXnmUa_",
      materials: [
        {
          name: "Basics of C",
          videoUrl:
            "https://www.youtube.com/embed/EjavYOFoJJ0?si=YnLyguTmdxPF0dC0",
          icon: <FaCode />,
        },
        {
          name: "Advanced C",
          videoUrl:
            "https://www.youtube.com/embed/E6jtj-7xJoA?si=0arUQDURFUErwjDm",
          icon: <FaCode />,
        },
        {
          name: "C Projects",
          videoUrl:
            "https://www.youtube.com/embed/EjavYOFoJJ0?si=a0aMEiOQN2LL76I3",
          icon: <FaCode />,
        },
      ],
    },
    "programming-python": {
      title: "Programming Python",
      videoUrl: "https://www.youtube.com/embed/KWgYha0clzw?si=ybbDfJhpikLNc0P6",
      materials: [
        {
          name: "Python Basics",
          videoUrl: "https://www.youtube.com/embed/video1",
          icon: <FaCode />,
        },
        {
          name: "Python OOP",
          videoUrl: "https://www.youtube.com/embed/video2",
          icon: <FaCode />,
        },
        {
          name: "Python Projects",
          videoUrl: "https://www.youtube.com/embed/video3",
          icon: <FaCode />,
        },
      ],
    },
    "programming-java": {
      title: "Programming Java",
      videoUrl: "https://www.youtube.com/embed/IT2durkDCXM?si=T8H3Xc3KpPPRMJmH",
      materials: [
        {
          name: "Java Basics",
          videoUrl: "https://www.youtube.com/embed/video1",
          icon: <FaCode />,
        },
        {
          name: "Java OOP",
          videoUrl: "https://www.youtube.com/embed/video2",
          icon: <FaCode />,
        },
        {
          name: "Java Projects",
          videoUrl: "https://www.youtube.com/embed/video3",
          icon: <FaCode />,
        },
      ],
    },
    aptitude: {
      title: "Aptitude",
      videoUrl: "https://www.youtube.com/embed/B7VqoXjoHPk?si=UuNNbxejSSq1dyR5",
      materials: [
        {
          name: "Quantitative Aptitude",
          videoUrl: "https://www.youtube.com/embed/video1",
          icon: <FaCode />,
        },
        {
          name: "Logical Reasoning",
          videoUrl: "https://www.youtube.com/embed/video2",
          icon: <FaCode />,
        },
        {
          name: "Verbal Ability",
          videoUrl: "https://www.youtube.com/embed/video3",
          icon: <FaCode />,
        },
      ],
    },
    "data-structure": {
      title: "Data Structure",
      videoUrl: "https://www.youtube.com/embed/AT14lCXuMKI?si=HCY3axghPpr8SZ5e",
      materials: [
        {
          name: "Arrays",
          videoUrl: "https://www.youtube.com/embed/video1",
          icon: <FaCode />,
        },
        {
          name: "Linked Lists",
          videoUrl: "https://www.youtube.com/embed/video2",
          icon: <FaCode />,
        },
        {
          name: "Trees",
          videoUrl: "https://www.youtube.com/embed/video3",
          icon: <FaCode />,
        },
      ],
    },
    "database-programming": {
      title: "Database Programming",
      videoUrl: "https://www.youtube.com/embed/LlYUPPDK79w?si=9zmCgySCOVjLV9oT",
      materials: [
        {
          name: "SQL Basics",
          videoUrl: "https://www.youtube.com/embed/video1",
          icon: <FaCode />,
        },
        {
          name: "Advanced SQL",
          videoUrl: "https://www.youtube.com/embed/video2",
          icon: <FaCode />,
        },
        {
          name: "Database Design",
          videoUrl: "https://www.youtube.com/embed/video3",
          icon: <FaCode />,
        },
      ],
    },
    "problem-solving-skills": {
      title: "Problem Solving Skills",
      videoUrl: "https://www.youtube.com/embed/hiqoCvPs_Jc?si=rHV6zTEZfLowLYMd",
      materials: [
        {
          name: "Problem Solving Techniques",
          videoUrl: "https://www.youtube.com/embed/video1",
          icon: <FaCode />,
        },
        {
          name: "Algorithm Design",
          videoUrl: "https://www.youtube.com/embed/video2",
          icon: <FaCode />,
        },
        {
          name: "Real-world Problems",
          videoUrl: "https://www.youtube.com/embed/video3",
          icon: <FaCode />,
        },
      ],
    },
  };

  const course = courseDetails[courseId];

  if (!course) {
    return <div>Course not found</div>;
  }

  const handleMaterialClick = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };

  return (
    <div className="course-detail-container">
      <h1>{course.title}</h1>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src={selectedVideo || course.videoUrl}
          title={course.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="materials-container">
        <h2>Materials</h2>
        <div className="materials-grid">
          {course.materials.map((material, index) => (
            <div
              key={index}
              className="material-card"
              onClick={() => handleMaterialClick(material.videoUrl)}
            >
              <i>{material.icon}</i>
              <span>{material.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Coursedetail1;
