import React from 'react'

function Blogs() {
  return (
    <div className="w-full bg-gradient-to-r from-emerald-50 to-teal-100 px-20 pb-10">
      <h2 className="text-5xl font-bold text-center text-blue-950 py-10 mb-12">Educational Blogs on Best Practices</h2>
      <div className='w-4/5 h-3/5  rounded-md shadow-md m-auto duration-500 hover:scale-105 bg-cyan-100 mb-20'>
        <img src="https://images.pexels.com/photos/2165688/pexels-photo-2165688.jpeg?cs=srgb&dl=pexels-quang-nguyen-vinh-222549-2165688.jpg&fm=jpg" alt="" className='object-fit w-full h-64 rounded-t-md '/>
        <h3 className='p-4 text-3xl font-bold text-emerald-800'>Pest Control Techniques</h3>
        <p className='px-4 text-xl text-cyan-900'>Stay ahead of crop threats with expert advice on identifying, preventing, and managing common agricultural pests using sustainable integrated pest management (IPM) strategies, maximizing your harvest while minimizing environmental impact.</p>
        <button className='mx-4 my-8 px-6 py-4 text-2xl border-4 border-teal-700 text-cyan-700 rounded-md hover:bg-teal-200'>Open Blog</button>
      </div>
      <div className='w-4/5 h-3/5  rounded-md shadow-md m-auto duration-500 hover:scale-105 bg-cyan-100 mb-20'>
        <img src="https://c4.wallpaperflare.com/wallpaper/549/835/824/nature-wheat-field-cereal-wallpaper-preview.jpg" alt="" className='object-fit w-full h-64 rounded-t-md '/>
        <h3 className='p-4 text-3xl font-bold text-emerald-800'>Irrigation Optimization</h3>
        <p className='px-4 text-xl text-cyan-900'>Learn how to maximize crop yields while minimizing water waste through intelligent irrigation strategies, utilizing advanced technologies to monitor soil moisture and tailor watering schedules to specific crop needs, maximizing water efficiency in your agricultural operations.</p>
        <button className='mx-4 my-8 px-6 py-4 text-2xl border-4 border-teal-700 text-cyan-700 rounded-md hover:bg-teal-200'>Open Blog</button>
      </div>
      <div className='w-4/5 h-3/5  rounded-md shadow-md m-auto duration-500 hover:scale-105 bg-cyan-100 mb-20'>
        <img src="https://png.pngtree.com/thumb_back/fh260/background/20210907/pngtree-agricultural-production-summer-solstice-farmer-rice-field-planting-photography-map-with-image_811853.jpg" alt="" className='object-fit w-full h-64 rounded-t-md '/>
        <h3 className='p-4 text-3xl font-bold text-emerald-800'>Farming Techniques</h3>
        <p className='px-4 text-xl text-cyan-900'>Explore the latest advancements in farming practices, from sustainable soil management to precision agriculture, to optimize crop yields and protect our environment. Learn how to implement innovative techniques to grow healthier food while maximizing your farm's efficiency.</p>
        <button className='mx-4 my-8 px-6 py-4 text-2xl border-4 border-teal-700 text-cyan-700 rounded-md hover:bg-teal-200'>Open Blog</button>
      </div>
      
    </div>
  )
}

export default Blogs