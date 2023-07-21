const Input = ({atributo, handleChange, parametro}) => {
    return(
        <div>
            <input
            id={atributo.id}
            name={atributo.name}
            placeholder={atributo.placeholder}
            type={atributo.type}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className="container-input"
            
            
            
            />
        </div>
    )

}
export default Input