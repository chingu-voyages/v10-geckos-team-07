import React from 'react';

class ImageCard extends React.Component {
  render() {
    return (
      <img
        src='./house1.jpg'
        style={{ border: '1px solid red', padding: 80 }}
        alt={this.props.images.title}
      />
    );
  }
}

/* Maps thru images */
const ImageList = props => {
  const images = props.images.map(img => {
    return <ImageCard key={img.id} images={img} />;
  });
  return <div>{images}</div>;
};

export default ImageList;
