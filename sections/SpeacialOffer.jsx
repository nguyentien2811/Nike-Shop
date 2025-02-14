 import { arrowRight } from "../assets/icons";
 import { offer } from "../assets/images";
 import { Button } from "../components";

 const SpecialOffer = () => {
   return (
     <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
       <div className='flex-1'>
         <img
           src={offer}
           alt='Shoe Promotion'
           width={773}
           height={687}
           className='object-contain w-full'
         />
       </div>
       <div className='flex flex-1 flex-col'>
         <h2 className='text-4xl font-palanquin font-bold'>
           <span className='text-coral-red'>Ưu đãi </span>
           đặc biệt
         </h2>
         <p className='mt-4 info-text'>
         Bắt đầu hành trình mua sắm mà thay đổi trải nghiệm của bạn với 
         những ưu đãi không thể cạnh tranh. Từ các lựa chọn hàng đầu đến 
         sự tiết kiệm đáng kinh ngạc, chúng tôi cung cấp một giá trị 
         không giới hạn làm cho chúng tôi nổi bật.
         </p>
         <p className='mt-6 info-text'>
        Khám phá một thế giới của những khả năng được thiết kế để đáp ứng những mong
        muốn độc đáo của bạn, vượt xa những kỳ vọng cao nhất.
         Hành trình của bạn cùng chúng tôi không gì khác ngoài sự xuất sắc.
         </p>
         <div className='mt-11 flex flex-wrap gap-4'>
           <Button label='Mua Ngay' iconURL={arrowRight} />
           <Button
             label='Chi tiết'
             backgroundColor='bg-white'
             borderColor='border-slate-gray'
             textColor='text-slate-gray'
           />
  
         </div>
       </div>
     </section>
   );
 };

 export default SpecialOffer;