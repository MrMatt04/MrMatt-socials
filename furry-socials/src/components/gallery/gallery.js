import "./gallery.css";

const requireImages = require.context(
  "../../assets/gallery",
  false,
  /\.(png|jpe?g|svg|webp)$/,
);
const images = requireImages.keys().map(requireImages);

const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="image-grid">
        {images.map((src, index) => (
          <div key={index} className="grid-item">
            <img src={src} alt={`Gallery item ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
