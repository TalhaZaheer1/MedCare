import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import CoursesPage from './components/CoursesPage';
import CourseDetail from './components/CourseDetails';
import AboutSection from './components/AboutSection';

// Layout component that uses Outlet
const MainLayout = () => {
  return (
    <div className="app-container">
      {/* This is where you would put components that should appear on every page */}
      {/* For example: Header, Navigation, etc. */}
      <NavBar />
      {/* The Outlet component will render the matched child route */}
      <Outlet />
      <Footer /> 
      {/* Footer could go here */}
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Use the MainLayout for all routes that should share the same layout */}
        <Route path="/" element={<MainLayout />}>
          {/* Index route renders when path is exactly "/" */}
          <Route index element={<HomePage />} />

          <Route path="courses" element={<CoursesPage />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
<Route path="about" element={<AboutSection />} />

 {/*              <Route path="contact" element={<Contact />} /> */}
          
          {/* You can add more nested routes here if needed */}
          {/* <Route path="services/*" element={<ServicesLayout />} /> */}
          
          {/* Catch-all route for 404 pages */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
