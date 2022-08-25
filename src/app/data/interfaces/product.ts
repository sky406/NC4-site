import { getLocaleEraNames } from "@angular/common"

export interface Product {
id:number,
name:string,
price:number,
isfeatured:boolean,
image:string,
rating:number,
desc:string
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
    image:pimages[im],
    rating:Math.round(Math.random()*11),
    desc:"Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn. K'yarnak ph'vulgtm sgn'wahl, fhtagn lw'nafh ftaghu fhtagn hrii lw'nafh uaaah, y-stell'bsna nnnebunma Nyarlathotep n'ghft ngvulgtlagln stell'bsna Shub-Niggurath. Tsathoggua syha'h ngn'ghft y-Hastur nilgh'ri nw sgn'wahl bug ya, bugagl ph'hlirgh vulgtm Nyarlathotep ep h'lw'nafh hai geb, gof'nn orr'e phlegeth ebunma n'ghftyar grah'n nog. Kadishtu tharanak nnnya fm'latgh cNyarlathotep ehye fhtagnog vulgtlagln hafh'drn, ilyaa nogor orr'e Yoggoth ngluioth gnaiih Dagon wgah'nog 'bthnkor, cphlegeth kn'a y-hrii ep h'r'luh y-n'ghft phlegeth. F'hupadgh ee ooboshu n'ghftor shogg li'hee y-r'luh bug y'hah hupadgh vulgtlagln ah stell'bsna nog, hlirghog nauln tharanak athg naflya gnaiih shogg nilgh'ri fhtagn 'ai f'n'ghft wgah'n mnahn' goka, 'bthnk ch' hupadgh vulgtlagln ehye Tsathoggua nnnR'lyeh phlegeth shtunggli h'stell'bsna uln Yoggoth. "
  }
  // console.log(pholder.image)
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
    image:pimages[im],
    rating:Math.round(Math.random()*11),
    desc:"Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn. K'yarnak ph'vulgtm sgn'wahl, fhtagn lw'nafh ftaghu fhtagn hrii lw'nafh uaaah, y-stell'bsna nnnebunma Nyarlathotep n'ghft ngvulgtlagln stell'bsna Shub-Niggurath. Tsathoggua syha'h ngn'ghft y-Hastur nilgh'ri nw sgn'wahl bug ya, bugagl ph'hlirgh vulgtm Nyarlathotep ep h'lw'nafh hai geb, gof'nn orr'e phlegeth ebunma n'ghftyar grah'n nog. Kadishtu tharanak nnnya fm'latgh cNyarlathotep ehye fhtagnog vulgtlagln hafh'drn, ilyaa nogor orr'e Yoggoth ngluioth gnaiih Dagon wgah'nog 'bthnkor, cphlegeth kn'a y-hrii ep h'r'luh y-n'ghft phlegeth. F'hupadgh ee ooboshu n'ghftor shogg li'hee y-r'luh bug y'hah hupadgh vulgtlagln ah stell'bsna nog, hlirghog nauln tharanak athg naflya gnaiih shogg nilgh'ri fhtagn 'ai f'n'ghft wgah'n mnahn' goka, 'bthnk ch' hupadgh vulgtlagln ehye Tsathoggua nnnR'lyeh phlegeth shtunggli h'stell'bsna uln Yoggoth. "
  }
  pholders.push(pholder)

}
return pholders
}
