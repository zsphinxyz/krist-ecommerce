export type ItemType = {
    name: string,
    description: string,
    price: number,
    sizes?: string[],
    inStock: boolean,
    reviews: number,
    color: string[],
    img: string,
    hot?: boolean,
}

export type ProductType = {
    category: string,
    items: ItemType[],
}

export type ProductsType = {
    products: ProductType[]
}

export const products:ProductType[] = [
    {
        "category": "Men's Wear",
        "items": [
            {
                "name": "Classic T-Shirt",
                "description": "A soft cotton T-shirt with a classic fit.",
                "price": 15.99,
                "sizes": ["S", "M", "L", "XL"],
                "inStock": true,
                "reviews": 4,
                "color": ["white", "black", "gray"],
                "hot": true,
                // "img": "https://raw.githubusercontent.com/zsphinxyz/ba/refs/heads/main/krist/Men's%20Wear/classic%20t-shirt.webp"
                "img": "https://lh3.googleusercontent.com/d/15bxnlP5sNFzS7cYW4RNa7Sp_pcP51cSo"
            },
            {
                "name": "Casual Hoodie",
                "description": "A warm, comfortable hoodie with a modern cut.",
                "price": 35.99,
                "sizes": ["M", "L", "XL", "XXL"],
                "inStock": true,
                "reviews": 5,
                "color": ["blue", "green", "gray"],
                // "img": "https://raw.githubusercontent.com/zsphinxyz/ba/refs/heads/main/krist/Men's%20Wear/casual%20hoodie.jpg",
                "img": "https://lh3.googleusercontent.com/d/1NPrZ-83oo-a02B6GDT9glSCv-9TOlZmo"
            },
            {
                "name": "Slim Fit Jeans",
                "description": "Stylish slim-fit jeans with a touch of stretch.",
                "price": 49.99,
                "sizes": ["30", "32", "34", "36"],
                "inStock": false,
                "reviews": 3,
                "color": ["darkblue", "black"],
                // "img": "https://raw.githubusercontent.com/zsphinxyz/ba/refs/heads/main/krist/Men's%20Wear/slim%20fit%20jeans.jpeg"
                "img": "https://lh3.googleusercontent.com/d/13Pn3Qr4kn5ckiny2EzpiHLB-1vM9WCyh"
            },
            {
                "name": "Leather Jacket",
                "description": "Classic leather jacket with a rugged look.",
                "price": 120.00,
                "sizes": ["S", "M", "L"],
                "inStock": true,
                "reviews": 4,
                "color": ["brown", "black"],
                "hot": true,
                // "img": "https://raw.githubusercontent.com/zsphinxyz/ba/refs/heads/main/krist/Men's%20Wear/leather%20jacket.jpg"
                "img": "https://lh3.googleusercontent.com/d/1luFD-bAx7CG-MXWlgv3fsphdMK4CJnPG"
            },
            {
                "name": "Polo Shirt",
                "description": "Comfortable polo shirt for casual outings.",
                "price": 25.99,
                "sizes": ["S", "M", "L", "XL"],
                "inStock": true,
                "reviews": 5,
                "color": ["navy", "white", "green"],
                // "img": "https://raw.githubusercontent.com/zsphinxyz/ba/refs/heads/main/krist/Men's%20Wear/polo%20shirt.jpg"
                 "img": "https://lh3.googleusercontent.com/d/1ItIwlDj64yJ2NPydHQhjmKlBFTD79Fsy"
            },
            {
                "name": "Chino Pants",
                "description": "Smart-casual chinos for versatile styling.",
                "price": 39.99,
                "sizes": ["32", "34", "36"],
                "inStock": true,
                "reviews": 3,
                "color": ["khaki", "olive", "black"],
                // "img": "https://raw.githubusercontent.com/zsphinxyz/ba/refs/heads/main/krist/Men's%20Wear/chino%20pants.webp"
                 "img": "https://lh3.googleusercontent.com/d/1EVSqShZMkUBEuQ2YXvDWI_pFXjO2YCZk"
            },
            {
                "name": "Sweatpants",
                "description": "Soft, comfortable sweatpants for lounging.",
                "price": 20.99,
                "sizes": ["S", "M", "L", "XL"],
                "inStock": true,
                "reviews": 5,
                "color": ["black", "gray", "navy"],
                // "img": "https://raw.githubusercontent.com/zsphinxyz/ba/refs/heads/main/krist/Men's%20Wear/sweat%20pants.jpg"
                 "img": "https://lh3.googleusercontent.com/d/1zy5RQGd-Avw7UWXbHlTC5Rv4ik9gVR2h"
            },
            {
                "name": "Denim Jacket",
                "description": "Classic denim jacket with a relaxed fit.",
                "price": 60.00,
                "sizes": ["M", "L", "XL"],
                "inStock": true,
                "reviews": 4,
                "color": ["blue", "black"],
                // "img": "https://raw.githubusercontent.com/zsphinxyz/ba/refs/heads/main/krist/Men's%20Wear/denim%20jacket.webp"
                 "img": "https://lh3.googleusercontent.com/d/1iNXF4VPtoLNIyM2f2mRqtvSFNEmraJPL"
            },
            {
                "name": "Formal Shirt",
                "description": "Crisp shirt ideal for formal occasions.",
                "price": 30.99,
                "sizes": ["S", "M", "L", "XL"],
                "inStock": true,
                "reviews": 4,
                "color": ["white", "lightblue", "gray"],
                // "img": "https://raw.githubusercontent.com/zsphinxyz/ba/refs/heads/main/krist/Men's%20Wear/formal%20shirt.jpg"
                 "img": "https://lh3.googleusercontent.com/d/1Z50XKrZJksYFMIUTj-X9Iheg172gTrPz"
            },
            {
                "name": "Bomber Jacket",
                "description": "Trendy bomber jacket with a slim fit.",
                "price": 75.00,
                "sizes": ["M", "L"],
                "inStock": false,
                "reviews": 5,
                "color": ["green", "black", "navy"],
                // "img": "https://raw.githubusercontent.com/zsphinxyz/ba/refs/heads/main/krist/Men's%20Wear/bomber%20jacket.webp"
                 "img": "https://lh3.googleusercontent.com/d/12wZ3mttfGjxNsAAx03eMXoqN7trS2cv8"
            }
        ]
    },
    {
        "category": "Women's Wear",
        "items": [
            {
                "name": "Blouse Top",
                "description": "A flowy blouse for any occasion.",
                "price": 24.99,
                "sizes": ["XS", "S", "M", "L"],
                "inStock": true,
                "reviews": 4,
                "color": ["white", "pink", "blue"],
                "hot": true,
                // "img" : "https://raw.githubusercontent.com/zsphinxyz/ba/refs/heads/main/krist/Women's%20Wear/blouse%20top.jpg"
                 "img": "https://lh3.googleusercontent.com/d/1WtAPQn1OvJ1-xE5mBqtxwbELzD-shnfk"
            },
            {
                "name": "Skinny Jeans",
                "description": "Form-fitting jeans with a sleek look.",
                "price": 45.99,
                "sizes": ["26", "28", "30", "32"],
                "inStock": true,
                "reviews": 5,
                "color": ["darkblue", "black"],
                "hot": true,
                // "img" : "https://raw.githubusercontent.com/zsphinxyz/ba/refs/heads/main/krist/Women's%20Wear/skinny%20jeans.jpg"
                 "img": "https://lh3.googleusercontent.com/d/1_QHYjCj4X5Gk_v-I1YnLb8orWHcDrtOv"
            },
            {
                "name": "Knit Sweater",
                "description": "Cozy sweater, perfect for layering.",
                "price": 39.99,
                "sizes": ["S", "M", "L"],
                "inStock": false,
                "reviews": 4,
                "color": ["gray", "brown", "cream"],
                // "img" : "https://raw.githubusercontent.com/zsphinxyz/ba/refs/heads/main/krist/Women's%20Wear/knit%20sweater.jpg"
                 "img": "https://lh3.googleusercontent.com/d/10KDwwsJablBjyp6g97diuEY9-FW8bkrY"
            },
            {
                "name": "Maxi Dress",
                "description": "Long and flowing dress ideal for events.",
                "price": 60.00,
                "sizes": ["S", "M", "L"],
                "inStock": true,
                "reviews": 5,
                "color": ["red", "black", "blue"],
                // "img" : "https://raw.githubusercontent.com/zsphinxyz/ba/refs/heads/main/krist/Women's%20Wear/maxi%20dress.jpg"
                 "img": "https://lh3.googleusercontent.com/d/10Eu76-kgD-eJQ4Jm6ryyVxxxdK0dzQl0"
            },
            {
                "name": "Trench Coat",
                "description": "Stylish trench coat for the perfect look.",
                "price": 120.99,
                "sizes": ["S", "M", "L", "XL"],
                "inStock": true,
                "reviews": 5,
                "color": ["beige", "black", "olive"],
                // "img" : "https://raw.githubusercontent.com/zsphinxyz/ba/refs/heads/main/krist/Women's%20Wear/trench%20coat.jpg"
                 "img": "https://lh3.googleusercontent.com/d/1AxtVytIZnPiESRtLQwaxnrAT3wco80RF"
            },
            {
                "name": "Denim Shorts",
                "description": "Comfortable shorts for summer days.",
                "price": 20.99,
                "sizes": ["S", "M", "L"],
                "inStock": true,
                "reviews": 4,
                "color": ["blue", "black"],
                // "img" : "https://raw.githubusercontent.com/zsphinxyz/ba/refs/heads/main/krist/Women's%20Wear/denim%20shorts.jpg"
                 "img": "https://lh3.googleusercontent.com/d/13Rl1A8L68-F8TjAmel4-YzFetQlPDbTY"
            },
            {
                "name": "Midi Skirt",
                "description": "Elegant midi skirt with a chic design.",
                "price": 35.00,
                "sizes": ["XS", "S", "M"],
                "inStock": true,
                "reviews": 3,
                "color": ["pink", "navy", "green"],
                // "img" : "https://raw.githubusercontent.com/zsphinxyz/ba/refs/heads/main/krist/Women's%20Wear/midi%20skirt.jpg"
                 "img": "https://lh3.googleusercontent.com/d/11qLjw3yZBm8OkJongGyAtydFqP33Iupr"
            },
            {
                "name": "Lace Top",
                "description": "Elegant lace top for formal occasions.",
                "price": 25.99,
                "sizes": ["S", "M", "L"],
                "inStock": true,
                "reviews": 4,
                "color": ["black", "white"],
                // "img" : "https://raw.githubusercontent.com/zsphinxyz/ba/refs/heads/main/krist/Women's%20Wear/lace%20top.jpg"
                 "img": "https://lh3.googleusercontent.com/d/1VtjPEX11RQtzLuJnO8bUA8_R7zfDxJFj"
            },
            {
                "name": "Cardigan",
                "description": "Light cardigan for extra warmth.",
                "price": 28.99,
                "sizes": ["S", "M", "L", "XL"],
                "inStock": true,
                "reviews": 5,
                "color": ["gray", "beige", "green"],
                // "img" : "https://raw.githubusercontent.com/zsphinxyz/ba/refs/heads/main/krist/Women's%20Wear/cardigan.jpg"
                 "img": "https://lh3.googleusercontent.com/d/1bYlwlWeLmqZjtzHzj97Z7wQYIQVWZyDL"
            },
            {
                "name": "Leather Jacket",
                "description": "Bold leather jacket with a fitted design.",
                "price": 99.99,
                "sizes": ["S", "M", "L"],
                "inStock": false,
                "reviews": 5,
                "color": ["black", "brown"],
                // "img" : "https://raw.githubusercontent.com/zsphinxyz/ba/refs/heads/main/krist/Women's%20Wear/leather%20jacket.jpg"
                 "img": "https://lh3.googleusercontent.com/d/1we-ZL5OuTLTY-WZrrOidsjm0Xk3QxtmS"

            }
        ]
    },
    {
        "category": "Shoes",
        "items": [
            {
                "name": "Running Sneakers",
                "description": "Lightweight sneakers designed for comfort.",
                "price": 59.99,
                "sizes": ["7", "8", "9", "10", "11"],
                "inStock": true,
                "reviews": 5,
                "color": ["white", "black", "blue"],
                "hot": true,
                // "img" : "https://raw.githubusercontent.com/zsphinxyz/ba/refs/heads/main/krist/Shoes/running%20sneakers.jpg"
                 "img": "https://lh3.googleusercontent.com/d/1U5CKu5SKb5dmn4OA5F4rHZ1gKPvtAVDk"
            },
            {
                "name": "Leather Boots",
                "description": "Durable leather boots with a classic style.",
                "price": 79.99,
                "sizes": ["6", "7", "8", "9", "10"],
                "inStock": true,
                "reviews": 4,
                "color": ["black", "brown"],
                // "img" : "https://raw.githubusercontent.com/zsphinxyz/ba/refs/heads/main/krist/Shoes/leather%20boots.jpg"
                "img": "https://lh3.googleusercontent.com/d/1VQeDFU2k-0kxg2rVCCW4F_Jjilx5Rxme"
            },
            {
                "name": "Heeled Sandals",
                "description": "Elegant heeled sandals for a night out.",
                "price": 49.99,
                "sizes": ["5", "6", "7", "8", "9"],
                "inStock": false,
                "reviews": 4,
                "color": ["black", "red"],
                "hot": true,
                // "img" : "https://raw.githubusercontent.com/zsphinxyz/ba/refs/heads/main/krist/Shoes/heeled%20sandals.jpg"
                "img": "https://lh3.googleusercontent.com/d/1T-Ltdod33gziMrSy_pRXt3TYuBEF1blt"
            },
            {
                "name": "Slip-on Sneakers",
                "description": "Easy-to-wear slip-on sneakers.",
                "price": 40.00,
                "sizes": ["7", "8", "9", "10"],
                "inStock": true,
                "reviews": 5,
                "color": ["white", "gray", "blue"],
                // "img" : "https://raw.githubusercontent.com/zsphinxyz/ba/refs/heads/main/krist/Shoes/slip-on%20sneakers.jpg"
                "img": "https://lh3.googleusercontent.com/d/1NNWIXvcuDalnMkmU5d0Imcclyh_QTNm3"
            },
            {
                "name": "Loafers",
                "description": "Comfortable loafers for casual wear.",
                "price": 45.00,
                "sizes": ["6", "7", "8", "9", "10"],
                "inStock": true,
                "reviews": 4,
                "color": ["black", "brown"],
                // "img" : "https://raw.githubusercontent.com/zsphinxyz/ba/refs/heads/main/krist/Shoes/loafers.jpg"
                "img": "https://lh3.googleusercontent.com/d/1d945KXj5tOM6nLmdreqtXk97CF39nVN9"
            },
            {
                "name": "Ankle Boots",
                "description": "Stylish ankle boots with a heel.",
                "price": 70.00,
                "sizes": ["5", "6", "7", "8"],
                "inStock": true,
                "reviews": 5,
                "color": ["black", "brown"],
                // "img" : "https://raw.githubusercontent.com/zsphinxyz/ba/refs/heads/main/krist/Shoes/ankle%20boots.jpg"
                "img": "https://lh3.googleusercontent.com/d/1z-Oc9ZiJ5wHWJl2YNg88wBa6-nj2_zcQ"
            },
            {
                "name": "Espadrilles",
                "description": "Casual espadrilles for summer days.",
                "price": 35.00,
                "sizes": ["5", "6", "7", "8"],
                "inStock": false,
                "reviews": 4,
                "color": ["white", "blue", "red"],
                // "img" : "https://raw.githubusercontent.com/zsphinxyz/ba/refs/heads/main/krist/Shoes/espadrilles.jpg"
                "img": "https://lh3.googleusercontent.com/d/1cKA14aR_qEyPnNgC5io4KhHDq8iKzdgI"
            },
            {
                "name": "Flip Flops",
                "description": "Basic flip flops for the beach.",
                "price": 10.99,
                "sizes": ["5", "6", "7", "8"],
                "inStock": true,
                "reviews": 3,
                "color": ["black", "blue", "pink"],
                // "img" : "https://raw.githubusercontent.com/zsphinxyz/ba/refs/heads/main/krist/Shoes/flip%20flops.jpg"
                "img": "https://lh3.googleusercontent.com/d/1CIQUGt7Hsrb_rWMWu-om7WP0NfYw7AqS"
            },
            {
                "name": "Formal Oxfords",
                "description": "Formal Oxfords ideal for events.",
                "price": 89.99,
                "sizes": ["7", "8", "9", "10", "11"],
                "inStock": true,
                "reviews": 5,
                "color": ["black", "brown"],
                // "img" : "https://raw.githubusercontent.com/zsphinxyz/ba/refs/heads/main/krist/Shoes/formal%20oxfords.jpg"
                "img": "https://lh3.googleusercontent.com/d/1xtmGbJphooK1_64O2modRqDmSPUxKGhh"
            },
            {
                "name": "Slippers",
                "description": "Warm slippers for at-home comfort.",
                "price": 19.99,
                "sizes": ["M", "L", "XL"],
                "inStock": true,
                "reviews": 4,
                "color": ["gray", "blue"],
                // "img" : "https://raw.githubusercontent.com/zsphinxyz/ba/refs/heads/main/krist/Shoes/slippers.jpg"
                "img": "https://lh3.googleusercontent.com/d/1szq2eCyzL_UTEFgcrxIhG18NqEaWOoUA"
            }
        ]
    },
    {
        "category": "Kids",
        "items": [
            {
                "name": "Kids T-Shirt",
                "description": "Colorful T-shirt for kids.",
                "price": 10.99,
                "sizes": ["2T", "3T", "4T", "5T"],
                "inStock": true,
                "reviews": 4,
                "color": ["blue", "green", "red"],
                // "img" : "https://raw.githubusercontent.com/zsphinxyz/ba/refs/heads/main/krist/Kids/kids%20t-shirt.jpg"
                 "img": "https://lh3.googleusercontent.com/d/1KbsQk6vgoNQ4UvCE1SkxuJrx3If0ar9Y"
            },
            {
                "name": "Kids Hoodie",
                "description": "Warm hoodie for kids.",
                "price": 25.00,
                "sizes": ["S", "M", "L"],
                "inStock": true,
                "reviews": 5,
                "color": ["yellow", "gray", "pink"],
                // "img" : "https://raw.githubusercontent.com/zsphinxyz/ba/refs/heads/main/krist/Kids/kids%20hoodie.jpg"
                 "img": "https://lh3.googleusercontent.com/d/1i5RZB461JzT86Q3co-D0sbaEcWdq4CrK"
            }
        ]
    },
    {
        "category": "Bags",
        "items": [
            {
                "name": "Backpack",
                "description": "Durable backpack for daily use.",
                "price": 40.00,
                "inStock": true,
                "reviews": 4,
                "color": ["black", "gray", "blue"],
                // "img" : "https://raw.githubusercontent.com/zsphinxyz/ba/refs/heads/main/krist/Bags/backpack.jpg"
                 "img": "https://lh3.googleusercontent.com/d/1SbTQIvX-MO7D8ELOofAXZOF7pxWEwOV6"
            },
            {
                "name": "Leather Purse",
                "description": "Stylish leather purse for all occasions.",
                "price": 70.00,
                "inStock": true,
                "reviews": 5,
                "color": ["brown", "black"],
                // "img" : "https://raw.githubusercontent.com/zsphinxyz/ba/refs/heads/main/krist/Bags/leather%20purse.jpg"
                 "img": "https://lh3.googleusercontent.com/d/1cSCtVVXrqWLxw3DD8B-XNQv72FeGVx7E"
            }
        ]
    },
    {
        "category": "Watches",
        "items": [
            {
                "name": "Digital Watch",
                "description": "Modern digital watch with a sporty look.",
                "price": 55.00,
                "inStock": true,
                "reviews": 4,
                "color": ["black", "blue", "red"],
                // "img" : "https://raw.githubusercontent.com/zsphinxyz/ba/refs/heads/main/krist/Watches/digital%20watch.jpg"
                 "img": "https://lh3.googleusercontent.com/d/1g5Igobc_6kLyh7Ant5l5_MEuas9GHino"
                
            }
        ]
    },
    {
        "category": "Accessories",
        "items": [
            {
                "name": "Sunglasses",
                "description": "Trendy sunglasses for sunny days.",
                "price": 15.99,
                "inStock": true,
                "reviews": 5,
                "color": ["black", "brown", "blue"],
                // "img" : "https://raw.githubusercontent.com/zsphinxyz/ba/refs/heads/main/krist/Accessories/leather%20belt.jpg"
                 "img": "https://lh3.googleusercontent.com/d/1dwWbgOocIaMoTnCZqN81fT0gaP9LKt4E"
            },
            {
                "name": "Leather Belt",
                "description": "Quality leather belt with a classic buckle.",
                "price": 25.99,
                "inStock": true,
                "reviews": 4,
                "color": ["black", "brown"],
                // "img" : "https://raw.githubusercontent.com/zsphinxyz/ba/refs/heads/main/krist/Accessories/sunglasses.jpg"
                 "img": "https://lh3.googleusercontent.com/d/1FmFX94efTE9HMDEPPtA8wsBFkQI7iipq"
            }
        ]
    }
]