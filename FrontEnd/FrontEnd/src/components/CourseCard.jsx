import { useState, useEffect } from "react";
import axios from "axios";
import "../assets/css/CourseCard.css";
import Navbar from "./NavBar";
import Footer from "./Footer";

const Course = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8181/api/courses");
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
        <Navbar/>
    <div>
      {courses.map((course) => (
        <div className="job" key={course.id}>
          <div className="groupDiv">
            <span className="groupSpan" key={course.id + "_span"}>
              <h1 className="textH1" key={course.id + "_h1"}>{course.coursename}</h1>
            </span>
            <h6 className="textH6" key={course.id + "_h6"}>{course.college}</h6>
            <hr className="line" key={course.id + "_hr"} />
            <p className="textP" key={course.id + "_p"}>{course.description}</p>
          </div>
        </div>
      ))}
    </div>
    <Footer/>
    </div>
  );
};

export default Course;
