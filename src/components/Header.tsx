import Brands from "./Brands"

function Header() {
    return (
        <header className='mt-16 mx-8 alg:mx-16 alg:mt-20'>
            <div className="text-left">
                <h1 className="text-[32px] font-medium alg:text-7xl">Headless commerce dosen't have to be hard.</h1>
                <p className="mt-4 alg:mt-8 alg:text-lg">Commerce Layer is an API-first commerce engine that makes it easy to go headless. Start fast with our production-ready micro frontends. Scale globally with our full suite of APIs, webhooks, and dev tools.</p>
            </div>
            <div className='space-y-4 mt-8'>
                <button className="text-white bg-[#666EFF] hover:bg-[#5458F0] w-full p-2 rounded-lg xsm:w-2/5 xsm:mr-6 sm:w-1/3 sm:mr-6 alg:text-lg alg:font-medium alg:w-[14rem]">Start building for free</button>
                <button className="text-[#666EFF] bg-blue-100 hover:bg-blue-50 w-full p-2 rounded-lg xsm:w-2/5 sm:w-1/3 alg:text-lg alg:font-medium alg:w-[14rem]">Request a demo</button>
            </div>

            {/* dotted line */}
            <div className="relative mt-16">
                <div className="w-full h-0.5">
                    <div
                        className="absolute inset-0 flex justify-between"
                        style={{
                            backgroundImage:
                                "linear-gradient(to right, rgba(0, 0, 0, 0) 50%, #999999 50%)",
                            backgroundSize: "4px 1px",
                        }}
                    ></div>
                </div>
            </div>
            <h2 className="mt-12 text-xl font-medium alg:text-3xl">Loved by developers, trusted by brands.</h2>
            <Brands />
        </header>
    )
}

export default Header