import { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import styles from "./Gallery.module.css";

const ApiKey = "563492ad6f91700001000001a1694d52156341ed8ac1b944afa82939";

class Gallery extends Component {
  state = {
    images: [],
    query: "dog",
  };

  componentDidMount() {
    axios.defaults.baseURL = "https://api.pexels.com";
    axios.defaults.headers.common.Authorization = ApiKey;

    let params = `v1/search?query=${this.state.query}`;
    axios
      .get(params)
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        console.log(data.photos);
        return data.photos;
      })
      .then((images) => {
        this.setState({ images });
      });
  }

  render() {
    console.log(this.state);
    const { galleryImg } = this.props;
    const { images } = this.state;
    return (
      <ul>
        {images &&
          images.map((image) => {
            return (
              <li key={image.id}>
                <img src={image.src.tiny} alt={image.photographer} />
              </li>
            );
          })}
      </ul>
      // <ul className={styles.cardSet}>
      //   {galleryImg.map((image) => (
      //     <li key={image.id} className={styles.item}>
      //       <img src={image.img} alt={image.label} />
      //       <p>{image.label}</p>
      //     </li>
      //   ))}
      // </ul>
    );
  }
}
export default Gallery;

Gallery.propTypes = {
  galleryImg: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};
