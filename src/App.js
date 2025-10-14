import React from "react";
import "./custom.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import HomePage from "./page/mainpage/mainpage";
import PostPage from "./page/postpage/postpage";
import PostFormPage from "./page/admin/postformpage/postformpage";
import TaglistPage from "./page/taglistpage/taglistpage";
import AdminDashboard from "./page/admin/admindashboard/admindashboard";
import AdminPostTable from "./page/admin/postpanelpage/postpanelpage";
import AdminNavbar from "./components/admin/admin-navbar/admin-navbar";

function AppLayout() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {isAdminRoute ? <AdminNavbar /> : <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/taglist" element={<TaglistPage />} />
        <Route path="/taglist/:tagName?" element={<TaglistPage />} />
        {/* Admin routes */}
        <Route path="/admin/post/form" element={<PostFormPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/posts" element={<AdminPostTable />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
