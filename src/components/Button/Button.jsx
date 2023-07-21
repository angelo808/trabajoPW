import './Button.css'
const Button = ({ onClick, value}) => {
    return (
        <button className="container-button"
         onClick={() => onClick() }>{ value }</button>
    )
}

export default Button