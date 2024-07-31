import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img src="/img/footer/footer-logo.svg" className="footer-logo" />
        <div className="footer-info">
          <a href="mailto:podbor_pro@bk.ru" className="footer-item">
            <img src="/img/footer/footer-email.svg" alt="Email" />
            podbor_pro@bk.ru
          </a>
          <a href="tel:+7(993)60-60-800" className="footer-item">
            <img src="/img/footer/footer-email.svg" alt="Email" />
            +7(993)60-60-800
          </a>
        </div>
        <button className="footer-button">Связаться</button>
      </div>
    </footer>
  );
};

export default Footer;
