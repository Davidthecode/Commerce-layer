import big from '../assets/big-green-egg.svg'
import buoni from '../assets/buoni.svg'
import bupa from '../assets/bupa.svg'
import chillys from '../assets/chillys.svg'
import ginori from '../assets/ginori.svg'
import lampoo from '../assets/lampoo.svg'
import mentra from '../assets/mentra.svg'
import nonstop from '../assets/non-stop.svg'
import paradox from '../assets/paradox.svg'
import rapha from '../assets/rapha.svg'
import sumup from '../assets/sumup.svg'
import sungod from '../assets/sungod.svg'
function Brands() {
    const images: string[] = [big, buoni, bupa, chillys, ginori, lampoo, mentra, nonstop, paradox, rapha, sumup, sungod]
    return (
        <div
            className='flex flex-wrap mt-4'
        >
            {images.map((image: string, index: number) => {
                return (
                    <div
                        key={index}
                        className='bg-[#F8F8F8] w-1/3'
                    >
                        <img
                            className='w-9/12 h-auto p-2 border border-dotted border-[#F8F8F8]'
                            src={image}
                            alt="" 
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default Brands