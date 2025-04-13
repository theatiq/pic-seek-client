import { Route, Routes } from "react-router";
import AppLayout from "./Layout/AppLayout";
import Home from "./Pages/Home";
import Create from "./Pages/Create";
import Creations from "./Pages/Creations";
import ImgDetails from "./Pages/ImgDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout></AppLayout>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="/create" element={<Create></Create>}></Route>
          <Route path="/creations" element={<Creations></Creations>}></Route>
          <Route path="/creations" element={<Creations></Creations>}></Route>
          <Route path="/creations/:id" element={<ImgDetails></ImgDetails>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
