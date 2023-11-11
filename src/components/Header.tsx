import React from "react";
import logo from "../main/ListItLogo.png";
import { useNavigate } from "react-router-dom";

type Props = {
  subtitle: string;
};

const Header = ({ subtitle }: Props) => {
  const navigate = useNavigate();
  return (
    <header className="row mb-4">
      <div className="col-5">
        <img src={logo} className="logo" alt="logo" onClick={() => navigate("/")}/>
      </div>
      <div className="col-7 mt-5 subtitle">{subtitle}</div>
    </header>
  );
};

export default Header;
