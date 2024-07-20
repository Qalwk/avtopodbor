import "./IconRect.css"

interface IconRectProps {
    icon: string;
}

const IconRect: React.FC<IconRectProps> = ({icon}) => {
  return (
    <div className="iconrect">
      <img src={icon} />
    </div>
  )
}

export default IconRect
