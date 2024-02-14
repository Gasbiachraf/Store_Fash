
import './firstSection.sass'
import bgImage from '../../../assets/img/heading-pages-06.jpg'
import woman from '../../../assets/img/banner-14.jpg'

export const FirstSectionAbout = () => {
    return (
        <>
            <div style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}>
                <p className='text-5xl py-20 text-center text-white'> ABOUT </p>

            </div>
            <div className='flex justify-center '>
                <div className='flex  w-[80%] justify-center py-24 items-end'>
                    <div className='overflow-hidden  w-[30%] flex justify-center mr-10  '>
                        <img className='duration-500 hover:scale-105 ' src={woman} alt="" />
                    </div>
                    <div className=' w-[60%] text-[#939393]'>
                        <p className='text-3xl  text-black pb-4'>Our story</p>
                        <p>Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.</p>
                        <div className='pl-5 ml-4 border-l-4 border-0 mt-7'>
                            <p className='pb-4'>Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.</p>
                            <p className='text-black text-sm pb-4'>- Steve Job's</p>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}
