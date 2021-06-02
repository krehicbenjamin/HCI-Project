import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/footer"
import Card from "./Components/Card/Card"
import Sidecard from "./Components/Sidecard/Sidecard"
import './App.css'
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <div className="articles">
        <Card 
          title='Title'
          imageURL='https://picsum.photos/200/300'
          body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        />
        <Card 
          title='Title'
          imageURL='https://picsum.photos/200/300'
          body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        />
        <Card 
          title='Title'
          imageURL='https://picsum.photos/200/300'
          body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        />
        <Card 
          title='Title'
          imageURL='https://picsum.photos/200/300'
          body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        />
        <Card 
          title='Title'
          imageURL='https://picsum.photos/200/300'
          body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        />
        <Card 
          title='Title'
          imageURL='https://picsum.photos/200/300'
          body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        />
        <Card 
          title='Title'
          imageURL='https://picsum.photos/200/300'
          body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        />
        <Card 
          title='Title'
          imageURL='https://picsum.photos/200/300'
          body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        />
        <Card 
          title='Title'
          imageURL='https://picsum.photos/200/300'
          body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        />
        <Card 
          title='Title'
          imageURL='https://picsum.photos/200/300'
          body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        />
        <Card 
          title='Title'
          imageURL='https://picsum.photos/200/300'
          body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        />
        <Card 
          title='Title'
          imageURL='https://picsum.photos/200/300'
          body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        />
        <Card 
          title='Title'
          imageURL='https://picsum.photos/200/300'
          body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        />
        <Card 
          title='Title'
          imageURL='https://picsum.photos/200/300'
          body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        />
        <Card 
          title='Title'
          imageURL='https://picsum.photos/200/300'
          body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        />
        <Card 
          title='Title'
          imageURL='https://picsum.photos/200/300'
          body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        />
      </div>
        <div className="sidecard">
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
          <Sidecard 
          title="title"
          imageURL="https://picsum.photos/200/300"
          time="1d"
          />
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
