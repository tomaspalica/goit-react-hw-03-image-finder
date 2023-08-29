import PropTypes from "prop-types";
import css from "../css/ImageGalleryItem.module.css"
export const ImageGalleryItem = ({img, openModal  }) => (
    <li  className={css.galleryItems}> <img className={css.galleryImg} src={img.webformatURL} alt={img.tags} onClick={() => openModal(img.largeImageURL, img.tags)} /> </li>
)

ImageGalleryItem.porpTypes = {
    openModal: PropTypes.func,
   img: PropTypes.object
}