import "./Button.css"

interface ButtonProps {
    text: string;
    width: string;
    height: string;
    mode?: boolean;
    radius: string;
    onClick?: () => void;
  }

const Button: React.FC<ButtonProps> 
= ({mode=true, text, width, height, radius, onClick}) => {
  return (
    <div onClick={onClick}>
        {
            mode
            ? (
            <button className="btn" style={{width: `${width}`, height: `${height}`,
                borderRadius: `${radius}`, border: "none"}} >
                <p className="btn-text">{text}</p>
            </button>
            )
            : (
            <button className="btn-white" style={{width: `${width}`, height: `${height}`,
                borderRadius: `${radius}`, border: "none"}} >
                <p className="btn-text-blue">{text}</p>
            </button>
            )
        }
    </div>
  )
}

export default Button
