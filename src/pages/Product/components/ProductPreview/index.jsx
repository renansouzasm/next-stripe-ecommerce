import "./style.css";

export const ProductPreview = ({ storedProduct }) => {
    return(
        <div className="productPreview">
            <img
                src={storedProduct?.thumbnail?.replace(/\w\.jpg/gi, "W.jpg")}
                alt="preview"
            />
        </div>
  );
}
