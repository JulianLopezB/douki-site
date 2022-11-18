
// const Image = ({ data }) => {
//   return (
//     <a href={data.img_urls} target="_blank" rel="noreferrer">
//       <img className="h-72 w-full object-cover rounded-lg shadow-md" src={data.img_urls} alt={data.name} />
//     </a>
//   )
// }

// export default Image


import React from "react";
import "../styles.css";
export default class Image extends React.Component {
  state = { isOpen: false };
  
  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log("cliked");
  };

  render() {
    return (
      <div>
        <img 
          className="h-72 w-full object-cover rounded-lg shadow-md" 
          src={this.props.data.img_urls}
          onClick={this.handleShowDialog}
          alt={this.props.data.name}
        />
        {/* <img
          className="small"
          src={this.props.data.img_urls}
          onClick={this.handleShowDialog}
          alt={this.props.data.name}
        /> */}
        {this.state.isOpen && (
          <dialog
            className="dialog"
            style={{ position: "absolute" }}
            open
            onClick={this.handleShowDialog}
          >
            <img 
              className="h-72 w-full object-cover rounded-lg shadow-md" 
              src={this.props.data.img_urls}
              onClick={this.handleShowDialog}
              alt={this.props.data.name}
            />  
          </dialog>
        )}
      </div>
    );
  }
}
