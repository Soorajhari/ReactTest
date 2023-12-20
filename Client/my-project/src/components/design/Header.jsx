import React ,{useState} from 'react'

const Header = () => {
    const [rotate, setRotate] = useState(false);
    const handleClick = () => {
        setRotate(!rotate);
      };
  return (
<div className={` bg-black `}>
    <div className='w-full h-full  '>
    <div className='flex justify-between'>
    <div className='mx-auto'>
        <p className='text-white text-base md:text-xl font-semibold tracking-normal md:tracking-wider pt-5 text-center '>Epic Games : An American video game and software developer</p>
        <p className='text-white text-sm md:text-base lg:text-xl font-medium tracking-wider text-center text-balance'>And publisher based in Cary, North Carolina.</p>
    </div>
    <div className=' mr-5 md:mr-10' onClick={handleClick}>
        <ion-icon name="close-outline" class="text-white text-lg md:text-3xl mt-5"></ion-icon>
    </div>
</div>

        
   
        <div className={`${rotate? 'rotate-180' :""} mt-10`}>
            <img className=' h-[200px] w-[700px] md:w-[900px] m-auto object-cover flex justify-center' src={require("../assets/2150712388.jpg")} alt="game" />
        </div>
        <div className='mt-10'>
            <p className='text-white text-base md:text-lg font-normal text-balance text-center '>Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or</p>
            <p className='text-white text-base md:text-lg font-normal text-balance text-center '>live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has</p>
            <p className='text-white text-base md:text-lg font-normal text-balance text-center '>an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.</p>
        </div>
        <div className='mt-7 flex justify-center'>
            <button className='p-1 bg-white text-black font-semibold rounded-2xl w-[250px] h-[40px]'>Visit Website</button>
        </div>
        <div >
            <div className='flex  justify-center gap-x-28 flex-wrap mt-10'>
                <div>
                <img className='w-[350px] h-[400px] object-cover' src={require("../assets/one-person-men-adult-headset-protective-eyewear-digitally-generated-image-computer-graphic-virtual-reality-generative-ai.jpg")} alt="" />
                <p className='text-white text-base text-center '>Explore large, destructible</p>
                <p className='text-white text-base text-center '>environments where no two games </p>
                <p className='text-white text-base text-center '> are ever the same.</p>
                </div>
               <div>
               <img className='w-[350px] h-[400px] object-cover' src={require("../assets/one-person-men-adult-headset-protective-eyewear-digitally-generated-image-computer-graphic-virtual-reality-generative-ai.jpg")} alt="" />
               <p className='text-white text-base text-center '>Explore large, destructible</p>
                <p className='text-white text-base text-center '>environments where no two games </p>
                <p className='text-white text-base text-center '> are ever the same.</p>
               </div>
               <div>
               <img className='w-[350px] h-[400px] object-cover' src={require("../assets/one-person-men-adult-headset-protective-eyewear-digitally-generated-image-computer-graphic-virtual-reality-generative-ai.jpg")} alt="" />
               <p className='text-white text-base text-center '>Explore large, destructible</p>
                <p className='text-white text-base text-center '>environments where no two games </p>
                <p className='text-white text-base text-center '> are ever the same.</p>
               </div>
               
          
            </div>

            <div className='mt-20'>
                <p className='text-3xl font-semibold text-white text-center '>Our Contribution</p>
                <div className='mt-10'>
                <p className='text-white font-normal text-balance text-center '>Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user </p>
                <p className='text-white font-normal text-balance text-center '>community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to providing </p>
                <p className='text-white font-normal text-balance text-center '>distinctive digital interactions guarantees unparalleled benefits for our clientele</p>

                </div>
                
            </div>
            <div className='flex justify-center gap-x-20 mt-20 mx-8' >
                <div className='text-white'>
                    <p className=' text-[20px] md:text-[60px] lg:text-[100px] text-center '>5 M</p>
                    <p className='text-sm md:text-base text-balance text-center '>Daily </p>
                    <p className='text-sm md:text-base text-balance text-center '> User Engagments</p>
                </div>
                <div className='text-white'>
                    <p className=' text-[20px] md:text-[60px] lg:text-[100px] text-center '>$ 500k</p>
                    <p className='text-sm md:text-base text-balance text-center '>Daily  </p>
                    <p className='text-sm md:text-base text-balance text-center '> User Engagments</p>
                </div>
                <div className='text-white'>
                    <p className=' text-[20px] md:text-[60px] lg:text-[100px] text-center '>10x</p>
                    <p className='text-sm md:text-base text-balance text-center '> Daily</p>
                    <p className='text-sm md:text-base text-balance text-center '> User Engagments</p>
                </div>
            </div>
        </div>
        <div className='text-white mt-8'>
        <p className=' text-[25px] md:text-[40px] text-balance text-center '>Interested in delving deeper into the project?</p>
        </div>
        <div className='text-white mt-5 tracking-wider '>
            <p className='text-lg  text-balance text-center '>If you'd like to explore further details about our initiatives or any of our 
             </p>
             <p className='text-white text-balance text-center '> affiliated brands, don't hesitate to connect. You can reach out to us via </p>
             <p className='text-white text-balance text-center '> email at hello@abc.com or give us a call at +91 480 20802730.</p>
        </div>
        <div className='flex justify-center mt-10 gap-x-8'>
            <div className=''>
                <button className='p-2 w-[130px] text-sm md:text-base  md:w-[180px] h-[40px] text-white rounded-xl border border-white'>Ring us on Skype</button>
            </div>
            <div className=''>
                <button className='p-2 w-[100px] text-sm md:text-base md:w-[180px] h-[40px] text-black rounded-xl bg-white'>Contact us</button>
            </div>
        </div>
        <div className='mt-10'>
            <p className='text-white font-medium  text-base md:text-lg tracking-widest md:text-center '>© 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved</p>
        </div>
    </div>
</div>

  )
}

export default Header