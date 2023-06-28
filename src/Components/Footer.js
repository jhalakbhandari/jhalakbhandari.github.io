import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <footer className="bg-gray-900  px-4  py-7 space-between  text-white inset-x-0 bottom-0 p-2 text-xs text-center">
      <div className="pb-2">&copy; Copyright 2022</div>
      <div className=" md:flex md:Justify-between  md:items-center sm:px-12 space-x-4 flex justify-center">
        <a className="text-white" href="#">
          <InstagramIcon />
        </a>
        <a
          className="text-white"
          href="https://www.linkedin.com/in/jhalak-bhandari-3680961aa/"
        >
          <LinkedInIcon />
        </a>
        <a className="text-white" href="https://github.com/jhalakbhandari">
          <GitHubIcon />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
