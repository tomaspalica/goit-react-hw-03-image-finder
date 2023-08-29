import PropTypes from "prop-types";
import css from "../css/Button.module.css"
export const Button = ({onClick}) => (
   <div className={css.buttonWrap} > <button className={css.loadMore} onClick={onClick}>Load More</button></div>
)

Button.propTypes = {
    onClick:PropTypes.func,
}