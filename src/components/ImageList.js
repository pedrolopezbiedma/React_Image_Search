import ImageShow from "./ImageShow"

const ImageList = ({ images }) => {
    return (
        <div>
            { 
                images.map((image) => 
                    <ImageShow key={image.key} image={image}/>
                )
            }
        </div>
    )
}

export default ImageList