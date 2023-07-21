import './Label.css'
const Label= ({ text }) => {
    return(
        <div>
            <label className="container-label"> {text} </label>
        </div>
    )

}
export default Label