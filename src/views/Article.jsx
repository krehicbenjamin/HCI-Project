import React, { Component } from 'react';
import Card from "../Components/Card/Card"
import Sidecard from "../Components/Sidecard/Sidecard"
import image from "../Images/pepsi.jpeg"
class Article extends Component {
    state = {  }
    render() { 
        return ( 
            <div className = "content">
                <div className="articles">
                    <img src = "https://picsum.photos/1150/500" className = "article_image" />
                    <h1 className ="article_view_title">Title</h1>
                    <p className ="article_view_body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti vitae in velit, id reprehenderit harum non eius nihil accusamus deserunt, ducimus illum modi, perspiciatis voluptatibus neque corporis quae molestiae magnam!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti vitae in velit, id reprehenderit harum non eius nihil accusamus deserunt, ducimus illum modi, perspiciatis voluptatibus neque corporis quae molestiae magnam!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti vitae in velit, id reprehenderit harum non eius nihil accusamus deserunt, ducimus illum modi, perspiciatis voluptatibus neque corporis quae molestiae magnam!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti vitae in velit, id reprehenderit harum non eius nihil accusamus deserunt, ducimus illum modi, perspiciatis voluptatibus neque corporis quae molestiae magnam!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti vitae in velit, id reprehenderit harum non eius nihil accusamus deserunt, ducimus illum modi, perspiciatis voluptatibus neque corporis quae molestiae magnam!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti vitae in velit, id reprehenderit harum non eius nihil accusamus deserunt, ducimus illum modi, perspiciatis voluptatibus neque corporis quae molestiae magnam!
                    </p>
                </div>
                <div className="sidecard">
                <img src={image} className="Ad"/>
          <Sidecard 
            title="title"
            imageURL="https://picsum.photos/200/300"
            time="1d"
          />
          <Sidecard 
            title="title"
            imageURL="https://picsum.photos/200/300"
            time="1d"
            />
            <Sidecard 
            title="title"
            imageURL="https://picsum.photos/200/300"
            time="1d"
            />
            <Sidecard 
            title="title"
            imageURL="https://picsum.photos/200/300"
            time="1d"
            />
                </div>

            </div>
         );
    }
}
 
export default Article;