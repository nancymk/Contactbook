import { Route, Routes, Link } from "react-router-dom";
import AddUser from "./features/users/AddUser";
import EditUser from "./features/users/EditUser";
import UserList from "./features/users/UserList";
import AboutMe from "./features/users/AboutMe";

function App() {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      
      <Link className="text-center font-bold text-4xl text-purple-700" to="/">Список моих контактов</Link>
      <br>
      </br>
      <Link className="text-right  text-blue-700" to="/about-me">Обо мне</Link>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
