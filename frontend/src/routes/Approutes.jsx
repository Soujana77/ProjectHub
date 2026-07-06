import { Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<h1>ProjectHub</h1>} />
    </Routes>
  );
}

export default AppRoutes;