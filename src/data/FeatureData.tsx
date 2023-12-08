import s1 from '../assets/s1.svg';
import s2 from '../assets/s2.svg';
import s3 from '../assets/s3.svg';
import s4 from '../assets/s4.svg';
import s5 from '../assets/s5.svg';
import s6 from '../assets/s6.svg';
import s7 from '../assets/s7.svg';
import s8 from '../assets/s8.svg';

type sliderItem = {
    image: string
    header: string
    text: string
};

export const scrollData: sliderItem[] = [
    {
        image: s1,
        header: 'Create a new ecommerce website from scratch.',
        text: 'Building a brand new ecommerce website is one of the most common use cases. Commerce Layer will fit in your current stack — whatever it is — adding global shopping capabilities and orchestrating all your commerce operations.'
    },
    {
        image: s2,
        header: 'Add a shopping cart to your existing website.',
        text: `Let's say you already have a marketing website and you want to enable ecommerce. All you need to do is connect your Commerce Layer account and use our commerce API to make any of your pages shoppable.`
    },
    {
        image: s3,
        header: 'Build ecommerce into your native mobile app.',
        text: `Mobile commerce is increasing and consumers also prefer native app experiences over mobile sites. Commerce Layer can be your backend API taking your customer's shopping experience to the next level of engagement.`
    },
    {
        image: s4,
        header: 'Integrate your POS software and sell in store',
        text: 'Omnichannel commerce is all about providing seamless experiences whether the customer is shopping online or in store. This can only be achieved through a headless approach, such as the one provided by Commerce layer.'
    },
    {
        image: s5,
        header: 'Add ecommerce to wearable or voice devices',
        text: `Will consumers buy products through Amazon's Alexa or Google Assistant in the near future? Or perharps shop by simply touching their apple watch. When the next major sales channel emerges. Commerce Layer will keep you up to date and innovating.`
    },
    {
        image: s6,
        header: 'Create a subscription-based business model',
        text: `Selling through subscriptions is an effective way to increase revenues and increase customers loyalty. Commerce Layer's API allows you to store your customer payment instruments and place recurring orders with any frequency.`
    },
    {
        image: s7,
        header: 'Create a multi-vendor ecommerce',
        text: 'Commerce Layer can support multi-vendor models in different ways, depending on your business requirements. In all cases, customers can place orders that are automatically split amongst all vendors.'
    },
    {
        image: s8,
        header: 'Make print catalogs shoppable through QR codes',
        text: 'A QR code can trigger an API call just like an HTML button on a product page. Connecting the physical world to Commerce Layer works just the same as building an ecommerce website, a mobile app, or any other buy button.'
    }
];