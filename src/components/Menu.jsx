import { useState } from "react";

const Menu = () => {

  const [menuVisible, setMenuVisible] = useState(false);

  const menuToggle = () => {
    setMenuVisible(!menuVisible);
  }

  return(
    <>
      <div id="menuButton" onClick={menuToggle}>
        <a href="#" className="toggleButton">
          <img src="/img/menuButton.png" alt="menu button" />
        </a>
      </div>
      <nav id="nav" className={menuVisible ? 'menu active' : 'menu'}>
        <ul>
          <li id="li_menu1">
            <div className="textBox">
              <a href="https://www.sejongbike.kr/eouling/introduce">어울링이란</a>
            </div>
            <ul id="ul_menu1">
              <li><a href="https://www.sejongbike.kr/eouling/introduce">어울링소개</a></li>
              <li><a href="https://www.sejongbike.kr/eouling/service">서비스안내</a></li>
              <li><a href="https://www.sejongbike.kr/eouling/duty">의무와 책임</a></li>
              <li><a href="https://www.sejongbike.kr/eouling/insurance">시민자전거보험</a></li>
              <li><a href="https://www.sejongbike.kr/usage/bikeUsage">자전거이용정보</a></li>
            </ul>
          </li>
          <li>
            <div className="textBox">
              <a href="https://www.sejongbike.kr/stationSearch">대여소 조회</a>
            </div>
          </li>
          <li id="li_menu2">
            <div className="textBox">
              <a href="https://www.sejongbike.kr/customer/notice">고객센터</a>
            </div>
            <ul id="ul_menu2">
              <li><a href="https://www.sejongbike.kr/customer/notice">공지사항</a></li>
              <li><a href="https://www.sejongbike.kr/customer/faq">자주하는질문</a></li>
            </ul>
          </li>
          <li id="login">
            <div className="textBox">
              <a href="pclogin.html">로그인</a>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;