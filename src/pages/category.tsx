import Image from "next/image";
import Link from "next/link";

export default function Category (){
    return(
        <main>



{/* header section */}

      {/* nav bar include some pages and social urls */}
      <header className="text-white bg-slate-400  body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-yellow-400 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">Bistro Bakers</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">

    <Link className="ml-2 mr-5   hover:text-purple-600" href="/">Home</Link>
   <Link className="mr-5  hover:text-pink-600" href="/about">About </Link>
   <Link className="mr-5  hover:text-blue-600" href="/contact">contact</Link>
   <Link className="mr-5  hover:text-green-600" href="/category">category</Link>
    
      
    </nav>
    <button className="inline-flex items-center bg-slate-300 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-300 rounded text-base mt-4 md:mt-0">View more
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>


{/* category section */}


            <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Cake , Maccrons and Cupcake</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base"> We source only the finest ingredients, locally sourced whenever possible, to ensure our baked goods are not only delicious but also sustainable.
      .</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-auto h-auto object-cover object-center" src="image/cake1.jpg" />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Birthday cake</h1>
            <p className="leading-relaxed">This is birthday cake category and we have all kind of flavours in it</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-auto h-auto object-cover object-center" src="image/cake2.jpg"/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The customize cakes</h1>
            <p className="leading-relaxed">This is customize cakes category and we have all kind of flavours in it and you can customize your cakes.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-auto h-auto object-cover object-center" src="image/cake3.jpg"/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Occational </h1>
            <p className="leading-relaxed">There are allkind of Occational cake  and we have all kind of flavours in it .</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-auto h-auto object-cover object-center" src="image/cake4.jpg"/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Cupcakes</h1>
            <p className="leading-relaxed">This is cupcake category and we have all kind of flavours in it.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-auto h-auto object-cover object-center" src="image/cake5.jpg"/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Maccrone</h1>
            <p className="leading-relaxed">This is maccrons category and we have all kind of flavours in it.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-auto h-auto object-cover object-center" src="image/cake6.jpg"/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Holiday cakes
              
            
            </h1>
            <p className="leading-relaxed">This is Holiday cake category and we have all kind of flavours in it.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </main>
    )}
            