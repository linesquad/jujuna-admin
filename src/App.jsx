import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import Emails from "./pages/Emails";
import Orders from "./pages/Orders";
import Cocktails from "./pages/Cocktails";
import Wines from "./pages/Wines";
import Contacts from "./pages/Contacts";
import Settings from "./pages/Settings";
import ContactsLayout from "./pages/ContactsLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/emails" element={<Emails />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/cocktails" element={<Cocktails />} />
          <Route path="/wines" element={<Wines />} />
          <Route path="/settings" element={<Settings />} />
          <Route element={<ContactsLayout />}>
            <Route path="/contacts" element={<Navigate to="/contacts/1" />} />
            <Route path="/contacts/:id" element={<Contacts />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
