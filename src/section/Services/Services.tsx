import ServiceCard from "../../components/ServiceCard/ServiceCard"
import { SERVICES_1TITLE } from "../../constant.ts"
import "./Services.css"

const Services = () => {
  return (
    <div className="services">
        <h2 style={{width: "800px", textAlign: "left"}}>{SERVICES_1TITLE}</h2>
        <div className="services-wrapper">
          <ServiceCard variant="first" />
          <ServiceCard variant="second" />
          <ServiceCard variant="third" />
          <ServiceCard variant="fourth" />
          <ServiceCard variant="fifth" />
          <ServiceCard variant="sixth" />
        </div>
    </div>
  )
}

export default Services
