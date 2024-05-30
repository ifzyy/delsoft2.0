const Footer = () => {
    const date = new Date().getFullYear()
    console.log(date)
  return (
    <footer className="bg-[#252627] pt-[50px] pb-[50px]">
     <p className="text-center text-[#fff]">copyright &copy; {date}</p> 
    </footer>
  )
}

export default Footer
