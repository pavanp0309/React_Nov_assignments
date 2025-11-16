import style from "./body.module.css"

function Body(){
    return(
        <div className={style.parent}>
            <div>
                <h3 className={style.sec}>Section</h3>
            <h3 className={`${style.art}`}>Article</h3>
            </div>
            
            <h3 className={`${style.as}`}>Aside</h3>
        </div>
    )
}
export default Body




























































