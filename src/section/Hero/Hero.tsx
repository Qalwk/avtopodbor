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
        <h5 className="hero-desc" style={{width:"715px", color: "#ffffff"}}>
            {HERO_INFO.description}
        </h5>
        <button className="hero-button">{HERO_INFO.button}</button>
        {/* <Button mode={false} width="337px" height="101px" text={HERO_INFO.button} radius="25px"/> */}
        <img src="./img/hero-vector.svg" className="hero-line"/>
      </div>
      <div className="hero-img"></div>
    </div>
  )
}

export default Hero