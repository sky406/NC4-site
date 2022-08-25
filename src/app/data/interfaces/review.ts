export interface Review {
  id:number,
  title:string,
  username:string,
  userimage:string,
  review:string,
  rating:number
}

export function gen_reviews(number:number):Review[]
{
  let reviews:Review[] = []
  for(let i = 0 ; i < number; i++)
  {
    reviews.push({
      id:i,
      title:"Test review",
      username:"user",
      userimage:"https://images.pexels.com/photos/1990241/pexels-photo-1990241.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
      review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in eros sed felis vestibulum ultricies id sit amet magna. Praesent mollis consequat nisl, et rhoncus augue efficitur eget. Donec nisl nulla, vestibulum eu ante eu, dictum vulputate mi. Quisque at est metus. Donec sed ipsum ullamcorper erat sollicitudin viverra ut a turpis. Curabitur vestibulum euismod libero, at accumsan nunc ultricies aliquet. Fusce viverra nisi eu volutpat convallis. Donec imperdiet orci nec sem finibus mattis. Maecenas et augue rutrum, bibendum felis sed, varius quam. Duis et mauris massa. Nunc mi eros, posuere ac lacus et, molestie ornare tortor. Quisque quam velit, iaculis sed lacus sollicitudin, dignissim scelerisque sem.",
      rating:Math.round(Math.random()*11+1)
    })
  }
  return reviews
}
