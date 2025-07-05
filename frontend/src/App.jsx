import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import LoginPage from './components/LoginPage';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';
import { UserContextProvider } from './UserContext';
import Jobs from './components/Jobs';
import PostJob from './components/PostJob';
import UpdateJob from './components/UpdateJob';
import MyJobs from './components/MyJobs';
import Stats from './components/Stats';
import EditProfile from './components/EditProfile';
import Body from './Body';
import AboutUs from './components/About';
import Contact from './components/Contact';
import Footer from './Footer';

function App() {
  return (
    <UserContextProvider>
      <Routes>
        {/* Layout wraps all routes, ensuring Header is always present */}
        <Route path="/" element={<Layout />}>
          {/* Body only renders on the home route */}
          <Route index element={<Body />} />
          <Route path="about" element={<AboutUs/>} />
          <Route path="contact" element={<Contact />} />

          {/* Authentication Routes */}
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<Register />} />

          {/* Protected Routes (Require Authentication) */}
          <Route
            path="jobs/create"
            element={
              <PrivateRoute>
                <PostJob />
              </PrivateRoute>
            }
          />
          <Route
            path="jobs/get"
            element={
              <PrivateRoute>
                <Jobs />
              </PrivateRoute>
            }
          />
          <Route
            path="update-job/:jobId"
            element={
              <PrivateRoute>
                <UpdateJob />
              </PrivateRoute>
            }
          />
          <Route
            path="my-jobs"
            element={
              <PrivateRoute>
                <MyJobs />
              </PrivateRoute>
            }
          />
          <Route
            path="edit-profile"
            element={
              <PrivateRoute>
                <EditProfile />
              </PrivateRoute>
            }
          />
          <Route
            path="stats"
            element={
              <PrivateRoute>
                <Stats />
              </PrivateRoute>
            }
          />
        </Route>
        {/* <Route index element={<Footer />} /> */}
      </Routes>
    </UserContextProvider>
  );
}

export default App;
