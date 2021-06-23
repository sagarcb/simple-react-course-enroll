import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Components/Header/Header';
import Container from "react-bootstrap/Container";
import Course from './Components/Courses/Courses';
import {useState} from "react";


function App() {
    const courses = [
        {
            title: 'Learn Python',
            price: 100
        },
        {
            title: 'Learn DJango with Python',
            price: 150
        },
        {
            title: 'Learn PHP with jcob',
            price: 50
        },
        {
            title: 'Laravel full course',
            price: 200
        },
        {
            title: 'Full web development course with Laravel, Bootstrap',
            price: 150
        },
        {
            title: 'Learn React js',
            price: 40
        },
        {
            title: 'Learn Node JS',
            price: 30
        },
        {
            title: 'Learn Vanilla JS',
            price: 70
        },
        {
            title: 'Laravel full course',
            price: 200
        },
        {
            title: 'Full web development course with Laravel, Bootstrap',
            price: 150
        },
        {
            title: 'Learn React js',
            price: 40
        },
        {
            title: 'Learn Node JS',
            price: 30
        },
        {
            title: 'Learn Vanilla JS',
            price: 70
        },
    ];

    const [course,setCourse] = useState(courses);

  return (
    <div>
        <Container>
            <Header></Header>
            <Course courses={course}></Course>
        </Container>
    </div>
  );
}

export default App;
