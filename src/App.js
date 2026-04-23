
/*import './App.css';
import Student from './student.jsx'
import Employee from './Employee.jsx'

function App() {

  const student1 = {
    "id": 1,
    "name": "Std1"
  }

  const student2 = {
    "id": 2,
    "name": "Std2",
    "marks": 80
  }
  const students = [student1, student2]



  return (
    <div className="App">
      <h3>Hello</h3>
      { <Student Name="Vdhi " Age="20" />
      <Student Name="Vdhi " Age="20" />
      <Employee /> }

      <div className="conatiner">
        <h3>Welcome</h3>
        {students.map(studentData => <Student name={studentData.name} id={studentData.id} />)}
      </div>


    </div>
  );
}

export default App;

import "./App.css";
import Student from "./student.jsx";

function App() {
  const students = [
    { id: 1, name: "John Doe", age: 22 },
    { id: 2, name: "Jane Smith", age: 21 },
    { id: 3, name: "Aish", age: 23 }
  ];

  return (
    <div className="App">
      <h1>Student List</h1>
      <h3>Welcome to Student Application:{students.lenth}</h3>
      
      <form>
      Name:<input type="text"></input><br></br>
      Password:<input type="password"></input><br></br>
      </form>
      
      <br></br>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <Student 
              key={student.id}
              id={student.id}
              name={student.name}
              age={student.age}
            />
          ))}
        </tbody>
      </table>
    </div>
    
  );
}

export default App;*/


import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import About from "./About";
import StudentDashboard from "./StudentDashboard";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? <StudentDashboard onLogout={handleLogout} /> : <Login onLogin={handleLogin} />
          }
        />
        <Route
          path="/about"
          element={<About />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;