const Footer = () => {
    const date =new Date().getFullYear()
  return (
    <footer className="bg-[#252627] pt-[50px] pb-[50px]">
     <p className="text-center">copyright &copy; {date}</p> 
    </footer>
  )
}

export default Footer
