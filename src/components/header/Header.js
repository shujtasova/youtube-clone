import React from "react";
import "./_header.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";

const Header = ({ handleToggleSidebar }) => {
  return (
    <div className="border border-dark header">
      <FaBars
        className="header__menu"
        size={26}
        onClick={() => handleToggleSidebar()}
      />

      <img
        src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
        alt=""
        className="header__logo"
      ></img>

      <form>
        <input type="text" placeholder="Search"></input>
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>

      <div className="header__icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img
          src="https://cdn.icon-icons.com/icons2/2643/PNG/512/avatar_female_woman_person_people_white_tone_icon_159360.png"
          alt="avatar"
        ></img>
      </div>
    </div>
  );
};

export default Header;
