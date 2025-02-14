import { facebook, instagram, shieldTick, support, truckFast, twitter, } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer3, customer4, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "home", label: "Trang Chủ" },
    { href: "about-us", label: "Về Chúng Tôi" },
    { href: "products", label: "Sản Phẩm" },
    { href: "contact-us", label: "Liên Hệ" },
    { href: "cart", label: "Giỏ Hàng" },
   
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1+', label: 'Brands' },
    { value: '50+', label: 'Cửa Hàng' },
    { value: '2k+', label: 'Khàng hàng' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "5,000,000đ ($200.20)",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "4,999,999đ ($210.20)",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "5,000,000đ ($220.20)",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "5,250,000đ ($230.20)",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Tận hưởng trải nghiệm mua sắm liền mạch với dịch vụ giao hàng miễn phí của chúng tôi."
    },
    {
        imgURL: shieldTick,
        label: "Thanh toán an toàn",
        subtext: "Trải nghiệm giao dịch không lo lắng với các lựa chọn thanh toán an toàn của chúng tôi."
    },
    {
        imgURL: support,
        label: " Chúng tôi rất vui được hỗ trợ bạn!",
        subtext: "Đội ngũ chuyên nghiệp của chúng tôi luôn sẵn lòng hỗ trợ bạn mỗi bước của hành trình."
    },
];

export const reviews = [
    {
        imgURL: customer3,
        customerName: 'De Bop',
        rating: 1,
        feedback: " Code đến mấy thì cũng Hello world thôi man!"
    },
    {
        imgURL: customer4,
        customerName: 'Missi',
        rating: 4.5,
        feedback: " Sản phẩm không chỉ đáp ứng mà còn vượt xa mong đợi của tôi. Tôi nhất định sẽ trở lại!"
    }
];


export const footerLinks = [
    {
        title: "Sản Phẩm",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
            { name: "Thượng Đình", link: "/" }
        ],
    },
    {
        title: "Trợ giúp",
        links: [
            { name: "Về Chúng tôi", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Chính sách và Quyền lợi", link: "/" },
            { name: "Chính sách thanh toán", link: "/" },
        ],
    },
    {
        title: "Thông tin Liên Hệ",
        links: [
            { name: "thongtinkhachhang@nike.com.vn", link: "mailto:customer@nike.com" },
            { name: "+84395342620", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
