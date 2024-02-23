import Header from './Header.jsx';
import homeBG from '../assets/homeBG.png';

const MainBody = () => {
  return (
    <div className=' w-screen'>
        <Header />
        <img className='w-full h-full object-cover' src={homeBG} />
    </div>
  )
}

export default MainBody