// import Button from "../Button/Button";
import "./Header.css";

interface NavLink {
  label: string;
  link: string;
}

const Header = () => {
  interface handleClickScrolProps {
    id?: string;
    navLink: string;
  }

  const handleClickScrol = ({ navLink }: handleClickScrolProps) => {
    const element = document.getElementById(navLink);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks: NavLink[] = [
    { label: "Услуги", link: "#uslugi" },
    { label: "О Компании", link: "#about" },
    { label: "Гарантии", link: "#garant" },
  ];

  return (
    <header className="header">
      <img src="./img/Logo.svg" className="header-logo"></img>
      <div className="header-info">
        <div className="navbar-menu">
          <ul className="navbar-menu-list">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.link}
                  onClick={() => handleClickScrol({ navLink: link.link })}
                  className="navbar-menu-links"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-action-wrapper">
          <a href="tel:+7(993)60-60-800" className="header-call-wrapper">
            <img src="./img/Call.svg" className="header-num-icon" />
            <span className="call-wrapper-num">+7(993)60-60-800</span>
          </a>
          <a href="#contact" className="header-button">Связаться</a>
          {/* <Button width="fit-content" height="72px" text="Связаться" radius="50px" /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
