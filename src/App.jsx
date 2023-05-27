import Blogs from './Blogs'
import Footer from './Footer'
import Hero from './Hero'
import Products from './Products'
import Testimonials from './Testimonials'
import WhyUs from './WhyUs'
function App() {
  return (
    <div className='flex flex-col mx-auto w-full max-w-screen-2xl'>
      <Hero/>
      <Products/>
      <WhyUs/>
      <Testimonials/>
      <Blogs/>
      <Footer/>
    </div>
  )
}

export default App
