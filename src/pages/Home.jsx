import bacon from '../assets/bacon.jpg';
import '../Styles/Home.css'
import SubHeading from '../components/SubHeading';


const Home = () => {
  return (
    <div className='app__header app__wrapper section__paddding' id='home'>
      <div className="app__wrapper_info">
        <SubHeading title='Every dish tells a story' />
        <h1 className="app__header-h1">Taste the Tradition, Feel the Innovation
        </h1>
        <p className="p__opensans" style={{ margin: '2rem 0' }}>Open today till 9:00Pm. 
        <br/>Located at Lusengeti Shopping Center </p>
        <button type='button' className="custom__button">Check Out Menu</button>

      </div>
      {/* Start of img */}
      <div className="app__wrapper_img">
        <img src={bacon} alt="header image" />

      </div>
      {/* End of image */}
    </div>
  )
}

export default Home
