import Wraper from "@/shared/Wraper";
import Link from "next/link";

const Header = () => {
  return (
   <Wraper>
    <header className="text-[#21343b]">
        <section className="flex justify-between">
          <p className="text-base py-7 tracking-widest">MADDIN HARRIS</p>
          <List/>
          <button id="hamburger-button" className="text-3xl cursor-pointer relative">
                    &#9776;
                    {/* <div className="bg-white w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-500 before:content-[''] before:bg-white before:w-8 before:h-1 before:rounded before:absolute before:-translate-x-4 before:-translate-y-3 before:transition-all before:duration-500 after:content-[''] after:bg-white after:w-8 after:h-1 after:rounded after:absolute after:-translate-x-4 after:translate-y-3 after:transition-all after:duration-500"></div> */}

          </button>
        </section>
        <section id="mobile-menu">

        </section>
    </header>
    </Wraper>
  )
}

export default Header

export const List = () => {
  return (
    <div>
       <ul className="flex text-lg font-serif tracking-widest"id="menu-list">
            <li className=" hover:bg-[#e2c53d] py-6 px-4"><Link href={"#home"}>HOME</Link></li>
            <li className=" hover:bg-[#e2c53d] py-6 px-4"><Link href={"#home"}>ABOUT</Link></li>
            <li className=" hover:bg-[#e2c53d] py-6 px-4"><Link href={"#home"}>SKILLS</Link></li>
            <li className=" hover:bg-[#e2c53d] py-6 px-4"><Link href={"#home"}>PORTFOLIO</Link></li>
            <li className=" hover:bg-[#e2c53d] py-6 px-4"><Link href={"#home"}>CONTACT</Link></li>
          </ul>
    </div>
  )
}
