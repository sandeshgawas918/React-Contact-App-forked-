import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ContactList from "./components/contact/ContactList";
import AddContact from "./components/contact/AddContact";

import App from "./App";

import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <App />
    {/* <Routes>
      <Route path="/" element={<Navigate to={'/contacts'} />} />
      <Route path="/contacts" element={<ContactList />} />
      <Route path="/add" element={<AddContact />} />
    </Routes> */}
  </BrowserRouter>
);
