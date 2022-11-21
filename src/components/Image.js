
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
        {/* <img 
          className="h-72 w-full object-cover rounded-lg shadow-md" 
          src={this.props.data.img_urls}
          onClick={this.handleShowDialog}
          alt={this.props.data.name}
        /> */}


          <div class="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-10">
            <img class="w-full rounded-md rounded-lg shadow-md object-cover" 
                 src={this.props.data.img_urls}
                 onClick={this.handleShowDialog}
            />
            <div class="test__body absolute inset-0 p-8 text-white flex flex-col">
              <div class="relative">
                <a class="test__link absolute inset-0" target="_blank" href="/"></a>
                <h1 class="test__title text-1xl font-bold mb-1">{this.props.data.name}</h1>
                <p class="test__author font-sm font-light">{this.props.data.brand}</p>
              </div>
              <div class="mt-auto">
                <span class="test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black">See in shop</span>
              </div>
            </div>
          </div>

        {this.state.isOpen && (

          <dialog
            className="dialog"
            style={{ position: "absolute" }}
            open
            onClick={this.handleShowDialog}
          >
            <h1>{this.props.data.name}</h1>
            <h2>{this.props.data.brand}</h2>
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
