export const ImageGalleryItem = ({img, openModal  }) => (
    <li  className=""> <img src={img.webformatURL} alt={img.tags} onClick={() => openModal(img.largeImageURL, img.tags)} /> </li>
)