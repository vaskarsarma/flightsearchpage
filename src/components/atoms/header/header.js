import './header.scss';

const Header = () => {
  return (
    <header className='App-header'>
      <h1 className='Center-align-text'>Flight Search Page</h1>
      <h2 hidden={true} className='Center-align-text'>Displaying 10 Flight Routes</h2>
      <h3 hidden={true} className='Center-align-text'>Please Select Any</h3>
      <h4 className='Center-align-text'>Found 10 Flights</h4>
    </header>
  );
};

export default Header;
