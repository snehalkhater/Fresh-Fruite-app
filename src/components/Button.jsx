const BUTTON_VARIANTS ={
primary: "bg-[#CD2C58] text-white hover:bg-[#CD2C58] hover:shadow-xl hover:shadow-black/40",
secondary: "bg-[#FFE6D4] text-[#333] hover:shadow-xl hover:shadow-black/30",
tertiary: "bg-[#9E3B3B] text-white hover:shadow-xl hover:shadow-black/50",

};
const BUTTON_SIZES={
    small:"text-lg px-6 py-0.5 m-3",
    medium:"text-xl px-8 py-1.5 m-2",
    large:"text-2xl px-8 py-2 m-1" ,
};
function Button({title, onClick=()=>{}, variant = "primary", size="medium"}) {
  return (
    <button onClick={onClick}
    className={`rounded-full ${BUTTON_VARIANTS[variant]} ${ BUTTON_SIZES[size]}
         cursor-pointer`}>{title}</button>
  )
}

export default Button