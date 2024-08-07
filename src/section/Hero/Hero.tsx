// import Button from "../../components/Button/Button"
import "./Hero.css"
import { HERO_INFO } from "../../constant"

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-info">
        <h1 className="hero-title" style={{width:"715px"}} >
            {HERO_INFO.title}
        </h1>
        <h5 style={{width:"715px", color: "#ffffff"}}>
            {HERO_INFO.description}
        </h5>
        <a href="#contact" className="hero-button">{HERO_INFO.button}</a>
        {/* <Button mode={false} width="337px" height="101px" text={HERO_INFO.button} radius="25px"/> */}
        <img src="./img/hero-vector.svg" className="hero-line"/>
      </div>
      <div className="hero-img"></div>
    </div>
  )
}

export default Hero