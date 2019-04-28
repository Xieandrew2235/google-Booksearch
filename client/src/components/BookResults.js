import React from "react";
import API from "../utils/API";
import DeleteBtn from "DeleteBtn";
// import {BrowserRouter as Router} from "react-router-dom";

class BookResults extends React.Component {
    constructor(props){
        this.state = {
            saved: false,
            deleted: false
        };
    }
  handleSaveClick = function(e) {
      e.preventDefault();
      API.addBookstoDB(bookData).then((res) => {
       console.log(res);
      }).catch(err) (
          console.log(err)
      );
       this.setState({saved: true});
       const booksResults = {
           title: this.props.title,
           author: this.props.author
       }
     }

     deleteBook = id => {
        API.deleteBook(id)
          .then(res => this.loadBooks())
          .catch(err => console.log(err));
      };

      render() {
        return(
            <div className="bookResult" id={(this.props.id)? this.props.id: null} style={{display: this.state.deleted? "none" : "block"}}>
                <div className="row">
                    <div className="aboutBook">
                        <h4>{this.props.title}</h4>
                        <p>By: {(this.props.authors)? this.props.authors.join(", "): "N/A"}</p>
                    </div>
                    <div className="btnDiv">
                        {
                            (this.props.link)? <a href={this.props.link} target="_blank" rel="noopener noreferrer"><button type="button" name="view">View</button></a> : null
                        }
                        {
                            (this.props.path === "/")? <button type="button" name="save" onClick={this.handleSaveClick} disabled={this.state.saved}>{(this.state.saved)? "Saved" : "Save"}</button> : <button type="button" name="Delete" onClick={this.handleDeleteClick} disabled={this.state.deleted}>Delete</button>
                        }
                    </div>
                </div>
                <div className="row">
                    {(this.props.img)? <img src= {
               (this.props.img.smallThumbnail)? this.props.img.smallThumbnail:
                        (this.props.img.thumbnail)? this.props.img.thumbnail: ""
                    } alt="book cover"/>: null}
                    <p>{(this.props.description)? this.props.description: "N/A"}</p>
                </div>
            </div>
        );
    }
}
 export default BookResults;