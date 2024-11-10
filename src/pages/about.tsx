import Image from "next/image";
import Link from "next/link";

export default function about() {
    return (
     
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



{/* about section */}


<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-col">
    <div className="lg:w-4/6 mx-auto">
      <div className="rounded-lg h-64 overflow-hidden">
        <img alt="content" className="object-cover object-center h-full w-full" src="https://usercontent.one/wp/www.catbedog.com/wp-content/uploads/2019/02/sthlm-1200x500-1-1024x427.jpg"/>
      </div>
      <div className="flex flex-col sm:flex-row mt-10">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Azaad panchi</h2>
            <div className="w-12 h-1 bg-pink-500 rounded mt-2 mb-4"></div>
            <p className="text-base">We'd love to hear from you! Contact us to place an order, ask a question, or share your feedback.
            .</p>
          </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p className="leading-relaxed text-lg mb-4">Welcome to Bistro Bakers

At Bistro Bakers, we're passionate about crafting delicious treats that bring people together. Our story began with a simple dream: to create a warm and inviting bakery where every bite feels like home.
Our Mission
We're dedicated to providing exceptional quality, taste, and service to our customers. Our team of skilled bakers and pastry chefs use only the finest ingredients to create mouthwatering bread, cakes, pastries, and desserts that delight the senses.
Our Story
Bistro Bakers was founded by [Your Name], a passionate baker with a love for traditional baking techniques and innovative flavors. With years of experience in the culinary industry, our team has perfected the art of baking to bring you the freshest, most delicious treats in town.

.</p>
          <a className="text-pink-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
</main>


)
}