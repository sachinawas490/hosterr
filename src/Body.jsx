
function Body() {
  return (
  <div className=" space-y-4
  ">
    <div className="flex items-center justify-center mt-[50px]">
    <img src="./assets/Blue-Shape.svg" alt="2nd" className="h-[300px] rotate-[12deg]
    "/>
      <img src="./assets/Pink-Shape.svg" alt="1st" className="absolute h-[300px] rotate-[19deg]"/>
     
      <img src="./assets/Purple-Shape.svg" alt="3rd" className="absolute h-[300px] rotate-[26deg]"/>
      <img src="./assets/Hero-Model.png" alt="hero" className="absolute h-[300px] "/>
      
    </div>
    <div className=" px-[50px] md:px-[150px] my-10 text-center">
      <h1 className="text-3xl md:text-5xl ">Host your website in less than 5 Minute</h1>
      <p className="md:text-xl pt-3 mb-[20px]">With hoster, get your website up and running in no less than 5 minute with the most competative pricing package</p>
      <form  className="">
        <input type="text" name="" className="bg-blue-500 px-5 py-1 placeholder:text-slate-900"
        id="" placeholder="Enter email address"/>
        <button className="rounder-md px-5 py-1 hover:bg-blue-600 " onClick={(e)=>(
          e.preventDefault()
        )}
        >Join waitlist</button> </form>
        <div className="flex items-center justify-center mt-5">
          <img src="./assets/Checkmark.svg" alt="" className="pr-5"/>
          No Span, ever, Unsubscibe anytime.
        </div>
      
    </div>
  </div>
  )
}

export default Body
