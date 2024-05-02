import '../Styles/Specials.css';
import data from '../constants/data';
import {SubHeading, MenuItem} from '../components';
import Fish from '../assets/Fish.png';

const Specials = () => {
  return (
    <div className='app__specialMenu flex__center section__padding' id='menu'>
      {/* Todays menu */}
      <div className="app__specialMenu-title">
        <SubHeading title='Menu that fits your taste'/>
        <h1 className="headtext__cormorant">Today&apos;s Special</h1>
      </div>
      {/* End of today's menu title */}
      {/* Start of menu */}
      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_food flex__center">
            <p className='app__specialMenu-menu_heading'>Food & Meat</p>
            <div className="app__specialMenu_menu_items">
                {data.food.map((food, index)=>(
                    <MenuItem key={food.title + index} title={food.title} price={food.price} />
                ))}
            </div>
        </div>
        {/* end of food */}
        <div className="app__specialMenu-menu_img">
        <img src={Fish} alt="menu__img" />
         </div>
        {/* start of beverages */}
        <div className="app__specialMenu-menu_beverages  flex__center">
            <p className="app__specialMenu-menu_heading">Beverages</p>
            <div className="app__specialMenu_menu_items">
                {data.beverages.map((beverages, index) =>(
                    <MenuItem key={beverages.title + index} title={beverages.title} price={beverages.price}/>
                ))}
            </div>
        </div>
      </div>
    {/* End */}
    
    <div style={{marginTop: 15}}>
        <button type='button' className='custom__button'>View More</button>
    </div>
    </div>
  )
}

export default Specials
