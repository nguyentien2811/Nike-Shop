import { star } from "../assets/icons";
import { products } from "../constants";

 const PopularProductCard = ({ imgURL, name, price, shoppingbag }) => {
   return (

     <div className='flex flex-1 flex-col w-full max-sm:w-full'>
       <img src={imgURL} alt={name} className='w-[282px] h-[282px] 
       object-cover object-center lg:h-full lg:w-full' />
       <div className='mt-2 flex justify-start gap-2.5'>
         <img src={star} alt='rating icon' width={2} height={2} />
         <p className='font-montserrat text-sm leading-normal text-slate-gray'>
           (4.5)
         </p>
         <i class='bx bxs-shopping-bag' id="shoppingbag" data-quantity="0"></i>
       
       </div>
       <h3 className='mt-1 justify between text-slate-gray-700 text-sm'>
         {name} 
       </h3>
       <p className='mt-0 font-montserrat text-coral-gray-500 text-sm leading-normal'>
         {price}
       </p>
     </div>
   );
 };


 export default PopularProductCard;