import { useEffect } from "react";
import NavBar from "./NavBar";
import Announcement from "./Announcement";
import Shop from "./Shop";
import { useLocation, useNavigate } from "react-router-dom";

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.refreshPage) {
      window.location.reload();
      navigate("/", { state: { refreshPage: false } });
    }
  }, []);

  return (
    <>
      <Announcement />
      <NavBar />
      <Shop />
    </>
  );
}
//<Announcement />
