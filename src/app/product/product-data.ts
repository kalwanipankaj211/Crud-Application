import { Product} from "./product";

// Earlier we had only Product service in which we had data and we direct calling that method
//now we have made separate ts file for data
export const PRODUCT_ITEMS:Product[]=
[{
        id:1,
      name:'Scissors',
      description:'use this to cut staff',
      price:4.99
      },
      {
        id:2,
        name:'Steeve Knives',
        description:'use this to eat food',
        price:10.99
      },
      {
        id:3,
        name:'Shot Glass',
        description:'use this to take shots',
        price:5.99
      },
]