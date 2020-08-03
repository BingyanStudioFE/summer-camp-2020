// import React, { Component } from 'react'
// import '../assets/style/courses_content.css'
// export default class Courses_content extends Component {
//     constructor(props){
//         super(props);
//         const comments =this.props.comments;
//         const listItems = comments.map((comment) =>
//         <li>{comment}</li>);
//     }
//     render() {

//         return (
//             <div className="content">
//                 <div className="content_left">
//                     <p className="one">{this.props.title}</p>
//                     <p className="two">{this.props.l}</p>
//                     <p className="three">{this.props.r}</p>
//                 </div>
//                 <div className="content_right">
//                         <ul>
//                             {listItems}
//                         </ul>
//                 </div>
//             </div>
//         )
//     }
// }
import React, { Component } from 'react'
import '../assets/style/courses_content.css'
export default class CoursesContent extends Component {
    constructor(props){
        super(props);
        this.listItems=this.props.comments.map((this.props.comment)=>
        <li>{this.props.comment}</li>
                );
    }
    // listItems(){
    //     const comments =this.props.comments;
    //     var str=""
    //     for(var i=0;i<this.props.comments.length;i++)
    //             str+="<li>"+(comments[i])+"</li>\n";
    //     return str;
 
    // }
    render() {

        return (
            <div className="content">
                <div className="content_left">
                    <p className="one">{this.props.title}</p>
                    <p className="two">{this.props.l}</p>
                    <p className="three">{this.props.r}</p>
                </div>
                <div className="content_right">
                        <ul>
                            {/* {this.listItems()} */}
                            {this.listItems}
                        </ul>
                </div>
            </div>
        )
    }
}
