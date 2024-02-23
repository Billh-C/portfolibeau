const Header = () => {
  return (
    <nav className="sticky top-0 h-20 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-15 rounded-b-2xl shadow-lg">
        <div className='max-w-5xl mx-auto px-4'>
            <div className='flex items-center justify-between h-16'>
                <span className=" font-averia text-2xl font-bold">home logo/beau?</span>
                <div className='flex space-x-4 font-averia_reg text-lg text-gray-300'>
                    <a className="">Films</a>
                    <a className="">Contact</a>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Header