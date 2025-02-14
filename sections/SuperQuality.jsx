import { shoe8 } from "../assets/images";
 import { Button } from "../components";

 const SuperQuality = () => {
   return (
     <section
       id='about-us'
       className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
     >
       <div className='flex flex-1 flex-col'>
         <h2 className='font-palanquin text-4xl lg:max-w-lg font-bold'>
           Chúng tôi chuyên cung cấp
           <span className='text-coral-red'> SIÊU </span>
           <span className='text-coral-red'>Giày </span> chất Lượng
         </h2>
         <p className='mt-4 lg:max-w-lg info-text'>
         Đảm bảo sự thoải mái và phong cách hàng đầu, 
         các sản phẩm giày dép được chúng tôi chế tạo một cách tỉ mỉ được thiết kế 
         để nâng cao trải nghiệm của bạn, mang đến cho bạn chất lượng không giới hạn, 
         sự đổi mới và một chút dư dật thanh lịch.
         </p>
         <p className='mt-6 lg:max-w-lg info-text'>
          Sự tận tâm đến chi tiết và xuất sắc của chúng tôi đảm bảo sự hài lòng của bạn.
         </p>
         <div className='mt-11'>
           <Button label='Xem Chi Tiết' />
         </div>
       </div>

       <div className='flex-1 flex justify-center items-center'>
         <img
           src={shoe8}
           alt='product detail'
           width={570}
           height={522}
           className='object-contain'
         />
       </div>
     </section>
   );
 };

 export default SuperQuality;