import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function HomeProductCoursel({ data }) {

    return (

        <div className="relative carousel-container">

  
        <div className="flex space-x-4 overflow-x-auto p-4 carousel-content" >
          {/* Örnek ürün kartları */}

  
          {
            data.map((item,index) => {
                return(
                    <div className="flex-none w-64  rounded-md overflow-hidden">
                    <div key={index} className="carousel-item">
                        <div class="justify-center  flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-56">
                            <div class="p-6 text-center">
                                <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                    {item.name}
                                </h5>
                            </div>
                            <div
                                class="relative max-h-56 mx-4 -mt-6 overflow-hidden text-white  ">
                                <img
                                    src={item.image}
                                    alt="card-image"
                                    className='shadow-lg bg-clip-border rounded-xl  shadow-blue-gray-500/40' />
                            </div>

                            <div class="p-6 text-center font-bold">
                                <span className='text-2xl'>{item.price}</span> <span className='text-sm'>TL</span>
                            </div>
                        </div>
                    </div>
              </div>
                )
            })
          }
  
          {/* Daha fazla ürün kartı eklenebilir */}
        </div>
      </div>
    )

}

export default HomeProductCoursel;