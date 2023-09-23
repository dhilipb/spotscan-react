import { ImageItem } from "./image-item";

export default function ImageListLayout() {
    const images = Array(100).fill(0);

    return (
        <>
            <div className="columns-3">
                {images.map(images => (
                   <ImageItem></ImageItem>
                ))}
            </div>
        </>
    )
}