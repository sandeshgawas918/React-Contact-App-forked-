import AddContact from "./components/contact/AddContact";
import ContactList from "./components/contact/ContactList";
import Navbar from "./components/navbar/Navbar";
import ViewContact from "./components/contact/ViewContact";
import EditContact from "./components/contact/EditContact";

import { Navigate, Route, Routes } from "react-router-dom";
import Loader from "./components/contact/Loader";

export default function App() {
  return (
    <div className="App">
   <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to={'/contacts/list'} />} />
        <Route path="/contacts/list" element={<ContactList />} />
        <Route path="/contacts/add" element={<AddContact/>} />
        <Route path="/contacts/view/:contactId" element={<ViewContact/>} />
        <Route path="/contacts/edit/:contactId" element={<EditContact/>} />
      </Routes>
      {/* <Loader/> */}
    </div>
  );
}
