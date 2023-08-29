
import { ImageGalleryItem } from "./ImageGalleryItem"
import PropTypes from "prop-types"
import css from '../css/ImageGallery.module.css'
export const ImageGallery = ({data, openModal}) => (
    <ul className={css.gallery}>{data.map((el) => <ImageGalleryItem className={css.galleryItems} openModal={openModal} img={el} key={el.id}/>)}</ul>
)

ImageGallery.propTypes = {
    data:PropTypes.arrayOf(PropTypes.object),
    openModal:PropTypes.func,
}
