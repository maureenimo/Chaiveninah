import '../Styles/MenuItem.css';

const MenuItem = ({title, price}) => {
  return (
    <div className='app__menuitem'> 
      <div className="app__menuitem-head">
        <div className="app__menuitem-name">
          <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
        </div>
        {/* Self closing */}
        {/* <div className="app__menuitem-dash" /> */}
        {/* End of self-closing */}
          <div className="app__menuitem-price">
            <p className="p__cormorant">{price}</p>
          </div>
      </div>
    </div>
  )
}

export default MenuItem
