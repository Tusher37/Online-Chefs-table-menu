import banner from '../../assets/images/Rectangle.jpg'

const Banner = () => {

    const backgroundImageStyle = {
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '96vw',
        height: '110vh',
        borderRadius: '25px',
      };

    return (
        <div style={backgroundImageStyle} className='m-5 pt-5'>
            <h2 className='text-5xl text-center font-bold text-white mt-40'>Discover an exceptional cooking <br /> class tailored for you!</h2>
            <p className='text-lg text-center font-normal text-white mt-5'><i>Culinary Kitchen:</i> A sanctuary of artisanal flavors, innovative creations, and unforgettable dining experiences. <br /> Indulge in elevated epicurean delights today</p>
            <div className='flex gap-4 justify-center mt-16'>
                <div className='bg-green-400 rounded-full pl-3 pr-3'>
                    <button className='text-black text-xl font-semibold p-3'>Explore Now</button>
                </div>
                <div className='border-2 rounded-full pl-3 pr-3'>
                    <button className='text-white text-xl font-semibold p-3'>Our Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;