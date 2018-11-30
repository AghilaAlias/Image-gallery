import React from "react";
import Image from "../components/Image";
import retrieveImages from "../actions/index";
import { connect } from "react-redux";

const baseURL =  "https://jsonplaceholder.typicode.com/photos";

class ImageGallery extends React.Component {
 constructor(props){
   super(props);
   this.state = {
     albumId:1,
     loading:false
   }
 }

 loadMoreImages = () => {
   this.setState({loading: true, albumId: this.state.albumId + 1})
   let url = `${baseURL}?albumId=${this.state.albumId}`;
   this.props.loadImages(url);
 }
componentDidMount(){
  let url = `${baseURL}?albumId=${this.state.albumId}`
  this.props.loadImages(url);
  
}
componentWillMount() {
  window.addEventListener("scroll", this.handleScroll);
}

componentWillUnmount() {
  window.removeEventListener("scroll", this.handleScroll);
}


handleScroll = () => {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight || document.body.scrollHeight;
  const clientHeight =
    document.documentElement.clientHeight || window.innerHeight;
  const scrolledToBottom = scrollHeight - scrollTop - clientHeight;
  if (scrolledToBottom) {
      this.loadMoreImages();
  }
};

  render() {
    let images = this.props.images;
    return (
      <div>    
          <div>
            {images.map(image => 
              <Image key = {image.id} id= {image.id} thumbnailUrl={image.thumbnailUrl} title={image.title} url={image.url} />
            )}
          </div>             
          {this.props.isError && <h1>Error while fetching images</h1>}
        </div>    
    );
  }
}

const mapStateToProps = state => {
  return {
    images: state.images,
    isFetching: state.isFetching,
    isSuccess: state.isSuccess,
    isError: state.isError,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadImages: url => dispatch(retrieveImages(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageGallery);
