export default function InformationComponent({ fpHash }) {
    return (
        <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
            <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">Information</h2>
            <p className="mb-12 text-lg text-gray-500">Details about our project and security approach.</p>
            
            <div className="w-full">
                <div className="flex flex-col w-full mb-16 sm:flex-row sm:gap-10"> 
                    <div className="w-full mb-16 sm:mb-0 sm:w-1/2">
                        <div className="relative h-full">
                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-500 rounded-lg"></span>
                            <div className="relative h-full p-5 bg-white border-2 border-gray-500 rounded-lg">
                                <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Description</h3>
                                <p className="mt-3 mb-1 text-xs font-medium text-gray-500 uppercase">------------</p>
                                <p className="mb-2 text-gray-600">
                                    The aim of this project is to protect innovative web3 projects and their activities from abusers and fraudsters.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2">
                        <div className="relative h-full">
                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-500 rounded-lg"></span>
                            <div className="relative h-full p-5 bg-white border-2 border-gray-500 rounded-lg">
                                <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Anonymity & Security</h3>
                                <p className="mt-3 mb-1 text-xs font-medium text-gray-500 uppercase">------------</p>
                                <p className="mb-2 text-gray-600">
                                    We do not use user identity data, only device information to mark fraudulent transactions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-2/3 mb-16 sm:flex-row sm:gap-10"> 
                    <div className="w-full sm:w-1/2">
                        <div className="relative h-full">
                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-500 rounded-lg"></span>
                            <div className="relative h-full p-5 bg-white border-2 border-gray-500 rounded-lg">
                                <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Fingerprint Hash</h3>
                                <p className="mt-3 mb-1 text-xs font-medium text-gray-500 uppercase"></p>
                                <p className="mb-2 text-gray-600">{fpHash}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
