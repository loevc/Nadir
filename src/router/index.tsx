import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserPage from "@/pages/user";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}
