import React from 'react';

function Home() {
  return (
      <div className='Homepage overflow-hidden justify-center'>
        
        <center>
          <div className='bg-blue w-100 h-[690px] grid-cols-1 z-10 -mt-72  items-center border-b-[22px] border-orange overflow-x-hidden'>
            <div className='z-30 relative pt-72 text-center font-jomhuria tracking-wide text-[8rem]'>
              <h1 className='text-white'>FOOD FROM TV.</h1>
              <h1 className='text-orange -mt-28'>ALL IN ONE PLACE.</h1>
            </div>
              <div className='-mt-6 relative w-1/4'>
                <form>   
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-white sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                          <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Search Restaurants & Shows" required />
                          <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue font-medium rounded-lg text-sm px-4 py-2">Search</button>
                      </div>
                </form>
              </div>
            </div>
        </center>

        <div className='flex space-x-24 mt-0 pb-20 bg-gray-100 justify-center border-b-[22px] border-orange'>
          <div className='flex-col text-center'>
            <div className='text-[128px] font-jomhuria'><h1>about.</h1></div>
            <div className='-mt-12'><img src="mockLogoGiant.svg" alt="" /></div>
          </div>

          <div className='w-3/6 mt-[52px]'>
            <div>
              <h1 className='font-bold text-2xl'> Delicious Discoveries: Exploring the Best Restaurants Near Me</h1>
              <p className='text-xl'> Looking for a delectable dining experience near you? Look no further! We will take you on a mouthwatering journey as we explore the best restaurants in your vicinity. From cozy cafes to five-star establishments, we have uncovered a range of culinary gems that are sure to satisfy your taste buds.
                  Whether you are a foodie searching for the perfect spot to celebrate a special occasion or simply craving a delicious dinner, our comprehensive guide has got you covered. Our team of seasoned food enthusiasts has scoured the area to bring you an expertly curated list of eateries that are known for their exceptional cuisine, impeccable service, and welcoming ambiance.
                  Indulge in a variety of cuisines, from traditional favorites to innovative dishes that push the boundaries of flavor. Experience culinary excellence prepared by talented chefs who passionately showcase their craft on every plate. Discover hidden gems, trendy hotspots, and time-tested favorites, all conveniently located near you.
                  Prepare yourself for an unforgettable dining adventure. Get ready to explore the best restaurants near you and embark on a culinary exploration that will tantalize your taste buds and leave you craving for more. Let's dive in!</p>
            </div>
          </div>
          
        </div>

        <center>
          <div className='grid-cols-1 place-content-center mt-0 pb-20 bg-blue border-b-[0px] border-orange'>
            <div>
              <h1 className='font-jomhuria text-white text-[128px]'>Join our newsletter!</h1>
            </div>
            
            <div className="mt-6 flex max-w-md gap-x-2">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-orange px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
            </div>
          </div>
        </center>

      </div>
      
  );
}

export default Home;
