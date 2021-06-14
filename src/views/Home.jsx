import React, { Component } from 'react';

import Card from "../Components/Card/Card"
import Sidecard from "../Components/Sidecard/Sidecard"
import image from "../Images/pepsi.jpeg"

class Home extends Component {
    state = {  }
    render() { 
        return ( 
          <div className="content">
          <div className="articles">
          <Card 
            title='Title'
            imageURL='https://picsum.photos/200/300'
            body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
          />
          <Card 
            title='Title'
            imageURL='https://picsum.photos/200/300'
            body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
          />
          <Card 
            title='Title'
            imageURL='https://picsum.photos/200/300'
            body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
          />
          <Card 
            title='Title'
            imageURL='https://picsum.photos/200/300'
            body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
          />
          <Card 
            title='Title'
            imageURL='https://picsum.photos/200/300'
            body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
          />
          <Card 
            title='Title'
            imageURL='https://picsum.photos/200/300'
            body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
          />
          <Card 
            title='Title'
            imageURL='https://picsum.photos/200/300'
            body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
          />
          <Card 
            title='Title'
            imageURL='https://picsum.photos/200/300'
            body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
          />
          <Card 
            title='Title'
            imageURL='https://picsum.photos/200/300'
            body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
          />
          <Card 
            title='Title'
            imageURL='https://picsum.photos/200/300'
            body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
          />
          <Card 
            title='Title'
            imageURL='https://picsum.photos/200/300'
            body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
          />
          <Card 
            title='Title'
            imageURL='https://picsum.photos/200/300'
            body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
          />
          <Card 
            title='Title'
            imageURL='https://picsum.photos/200/300'
            body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
          />
          <Card 
            title='Title'
            imageURL='https://picsum.photos/200/300'
            body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
          />
          <Card 
            title='Title'
            imageURL='https://picsum.photos/200/300'
            body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
          />
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
 
export default Home;