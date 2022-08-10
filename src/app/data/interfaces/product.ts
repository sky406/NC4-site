import { getLocaleEraNames } from "@angular/common"

export interface Product {
id:number,
name:string,
price:number,
isfeatured:boolean,
image:string,
}

export function gen_pholders(number:number):Product[]
{
  let pholders = []
  let pimages = ["https://images.pexels.com/photos/2587175/pexels-photo-2587175.jpeg?auto=compress&cs=tinysrgb&w=400",
"https://images.pexels.com/photos/2587176/pexels-photo-2587176.jpeg?auto=compress&cs=tinysrgb&w=400",
"https://images.pexels.com/photos/5217886/pexels-photo-5217886.jpeg?auto=compress&cs=tinysrgb&w=400",
"https://images.pexels.com/photos/10514763/pexels-photo-10514763.jpeg?auto=compress&cs=tinysrgb&w=400"]

for(let i = 0; i < number-4; i++)
{
  let im = Math.round(Math.random()*3)

  // console.log(im)
  let pholder:Product = {
    id:i,
    name:"lorem",
    price:69.99,
    isfeatured:false,
    image:pimages[im]
  }
  console.log(pholder.image)
  pholders.push(pholder)
}
for(let i = number-4;i < number; i++)
{
  let im = Math.round(Math.random()*3)
  let pholder:Product = {
    id:i,
    name:"lorem ipsum",
    price:69.99,
    isfeatured:true,
    image:pimages[im]
  }
  pholders.push(pholder)

}
return pholders
}
