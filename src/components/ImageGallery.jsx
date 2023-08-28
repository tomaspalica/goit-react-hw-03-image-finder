import { nanoid } from "nanoid"
import { ImageGalleryItem } from "./ImageGalleryItem"
export const ImageGallery = ({data, openModal}) => (
    <ul className="">{data.map((el) => <ImageGalleryItem openModal={openModal} img={el} key={el.id}/>)}</ul>
)