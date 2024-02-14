import MasterPage from "./Components/MasterPage";
import Register from "./Components/Register/Register";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MasterPage />}>
      {/* <Route index element={<Home />} /> */}
      <Route path="SignUp" element={<Register/>}  />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
