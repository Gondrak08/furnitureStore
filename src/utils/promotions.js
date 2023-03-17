
import ChairOne from '../assets/cadeiraOne.webp'
import ChairTwo from '../assets/cadeiraTwo.webp'
import ChairThree from '../assets/cadeiraThree.webp';
import ChairFour from '../assets/cadeiraFour.webp';
import ChairFive from '../assets/cadeiraFive.webp';
import ChairSix from '../assets/cadeiraSix.webp';
import ChairSeven from '../assets/cadeiraSeven.webp';
import ChairEight from '../assets/cadeiraEight.webp';
import ChairNine from '../assets/cadeiraNine.webp';
import ChairTen from '../assets/cadeiraTen.webp';
import ChairEleven from '../assets/cadeiraEleven.webp';
import ChairTwelve from '../assets/cadeiraTwelve.webp';


import Mob1 from '../assets/mob1.webp';
import Mob2 from '../assets/mob2.webp';
import Mob3 from '../assets/mob3.webp';
import Mob4 from '../assets/mob4.webp';
import Mob5 from '../assets/mob5.webp';

import FurnOne from '../assets/furn1.webp'
import FurnTwo from '../assets/furn2.webp'
import FurnThree from '../assets/furn3.webp'
import FurnFour from '../assets/furn4.webp'


export const ArrPromotions = {
    type: "array",
    SeeMoreButton: {
        name: 'ver mais',
        link: '#'

    },
    products: {
        chair: {
            type: 'chair',
            name: "Cadeiras",
            promotionText: "4=3",
            products: [
                {
                    name: "cadeira branca echair",
                    image: ChairOne,
                    price: "35",
                    isPromotion: false,
                    discount: '0'
                },
                {
                    name: "cadeirão cinza milan",
                    image: ChairTwo,
                    price: "60",
                    isPromotion: false,
                    discount: 0
                },
                {
                    name: "cadeira toupeira pads",
                    image: ChairThree,
                    price: "50",
                    isPromotion: false,
                    discount: 0
                },
                {
                    name: "cadeirão azul milan",
                    image: ChairFour,
                    price: "60",
                    isPromotion: false,
                    discount: 0
                },
                {
                    name: "cadeira preta chair",
                    image: ChairFive,
                    price: "35",
                    isPromotion: false,
                    discount: 0
                },
                {
                    name: "cadeira cinza echair",
                    image: ChairSix,
                    price: "35",
                    isPromotion: false,
                    discount: 0
                },
                {
                    name: "poltrona odemira",
                    image: ChairSeven,
                    price: "85",
                    isPromotion: false,
                    discount: 0

                },
                {
                    name: "cadeira cinza pads",
                    image: ChairEight,
                    price: "50",
                    isPromotion: false,
                    discount: 0

                },
                {
                    name: "cadeira rosa torino",
                    image: ChairNine,
                    price: "85",
                    isPromotion: false,
                    discount: 0

                },
                {
                    name: "cadeira dobrável metal branca",
                    image: ChairTen,
                    price: "85",
                    isPromotion: false,
                    discount: 0

                },
                {
                    name: "poltrona echair weave preta",
                    image: ChairEleven,
                    price: "85",
                    isPromotion: false,
                    discount: 0

                }, {
                    name: "cadeira castanha lecce",
                    image: ChairTwelve,
                    price: "85",
                    isPromotion: false,
                    discount: 0
                },

            ]
        },
        furniture: {
            type: 'furniture',
            name: "Mobiliário",
            promotionText: "-20%",
            products: [
                {
                    name: "movél de tv nordic",
                    image: Mob1,
                    price: "35",
                    isPromotion: false,
                    DiscountPercent: 20
                },
                {
                    name: "aparador portas e gatevas nordic",
                    image: Mob2,
                    price: "35",
                    isPromotion: false,
                    DiscountPercent: 20
                },
                {
                    name: "mesa consola nordic",
                    image: Mob3,
                    price: "35",
                    isPromotion: false,
                    DiscountPercent: 20
                },
                {
                    name: "aparador de gavetas nordic",
                    image: Mob4,
                    price: "35",
                    isPromotion: false,
                    DiscountPercent: 20
                },
                {
                    name: "aparador nordic",
                    image: Mob5,
                    price: "35",
                    isPromotion: false,
                    DiscountPercent: 20
                },

            ]
        }
    }

}

export const Promotion = {
        type: 'object',
        name: "Mobiliário",
        promotionText: "-20%",
        SeeMoreButton: {
            name: 'ver todos os produtos',
            link: '#'
    
        },
        products: [
            {
                name: "movél de tv nordic",
                image: FurnOne,
                price: "199",
                isPromotion: true,
                DiscountPercent: 20
            },
            {
                name: "aparador portas e gatevas nordic",
                image: FurnTwo,
                price: "549",
                isPromotion: true,
                DiscountPercent: 20
            },
            {
                name: "mesa consola nordic",
                image: FurnThree,
                price: "399",
                isPromotion: true,
                DiscountPercent: 20
            },
            {
                name: "aparador de gavetas nordic",
                image: FurnFour,
                price: "299",
                isPromotion: true,
                DiscountPercent: 20
            },
            
        ]
    
}