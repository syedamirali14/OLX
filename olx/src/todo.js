// import React, { Component } from 'react';
// class Search extends Component {
//     constructor(props){
//         super(props);
//         this.state = {value: '' };

//         this.handleChange = this.handleChange.bind(this);
//         this.handleChange = this.handleSubmit.bind(this);
//     }
//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }
//     handleChange(event){
//         alert('A name was submitted : ' + this.state.value);
//         event.preventDefault();
//     }
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Name:
//         <input type="text" value={this.state.value} onChange={this.handleChange}> </input>
//                 </label>
//                 <input type="submit" value="Submit"></input>
//             </form>

//         );
//     }
// }

// export default Search