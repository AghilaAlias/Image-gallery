import React from  'react';
import ImageModal from "../components/ImageModal";

class Image extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
          };

    }
    
  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
    render(){
        let {id,thumbnailUrl,title, url} = this.props;
        

    return(
        <span>
            <img key = {id} src={thumbnailUrl} alt={title} onClick={this.toggleModal} />
            {this.state.isOpen && <ImageModal width={600} url={url} onClick = {this.toggleModal} /> }
        </span>
    )
    }
}

export default Image;