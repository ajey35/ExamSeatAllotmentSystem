import Clglogo from '../img/clg.png'
export default function ClgName(){
    return(
        <>
        <nav className="flex min-h-28 bg-gray-300 ">
            <img src={Clglogo} className='max-h-28 p-2 sm:ml-4'/>
            <h1 className="font-bold sm:text-6xl mt-4 sm:ml-80 text-xl ml-16 ">CMR Instuite of Technology</h1>
        </nav>
        </>
    )
}