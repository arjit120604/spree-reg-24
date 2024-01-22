function SportTeam(){
    return(<>
        <div className="flex justify-between items-center flex-col h-full w-5/12">
            <div>
            <select placeholder="Sport" required className="bg-transparent border-white border-2 rounded-lg h-9 px-2 w-full outline-none text-ggrey">
                        <option className="bg-transparent " value="" selected disabled hidden>
                            Sport
                        </option>
                        <option className="bg-transparent text-black" value="M">
                            Basketball
                        </option>
                        <option className="bg-transparent text-black" value="F">
                            Badminton
                        </option>
                        <option className="bg-transparent text-black" value="F">
                            Carrom
                        </option>
                        <option className="bg-transparent text-black" value="F">
                            Chess
                        </option>
                        <option className="bg-transparent text-black" value="F">
                            Cricket
                        </option>
                        <option className="bg-transparent text-black" value="F">
                            Kabaddi
                        </option>
                        <option className="bg-transparent text-black" value="F">
                            Powerlifting
                        </option>
                        <option className="bg-transparent text-black" value="F">
                            Squash
                        </option>
                        <option className="bg-transparent text-black" value="F">
                            Tennis
                        </option>
                        <option className="bg-transparent text-black" value="F">
                            Table Tennis
                        </option>
                        <option className="bg-transparent text-black" value="F">
                            Volleyball
                        </option>
                    </select>  
            </div>
            <div className="flex justify-center items-center flex-col py-5 w-full border-white border-2 rounded-lg text-ggrey">
                <div className="flex justify-between items-center w-4/5">
                    <input type="text" placeholder="Full Name" className="w-5/12 bg-transparent border-ggrey border-b-2 h-9 px-2 outline-none"></input>
                    <input type="number" placeholder="Phone Number" className="w-5/12 bg-transparent border-ggrey border-b-2 h-9 px-2 outline-none"></input>
                </div>
                <div className="flex justify-between items-center w-4/5">
                    <input type="text" placeholder="Full Name" className="w-5/12 bg-transparent border-ggrey border-b-2 h-9 px-2 outline-none"></input>
                    <input type="number" placeholder="Phone Number" className="w-5/12 bg-transparent border-ggrey border-b-2 h-9 px-2 outline-none"></input>
                </div>
                <div className="flex justify-between items-center w-4/5">
                    <input type="text" placeholder="Full Name" className="w-5/12 bg-transparent border-ggrey border-b-2 h-9 px-2 outline-none"></input>
                    <input type="number" placeholder="Phone Number" className="w-5/12 bg-transparent border-ggrey border-b-2 h-9 px-2 outline-none"></input>
                </div>
                <div className="flex justify-between items-center w-4/5">
                    <input type="text" placeholder="Full Name" className="w-5/12 bg-transparent border-ggrey border-b-2 h-9 px-2 outline-none"></input>
                    <input type="number" placeholder="Phone Number" className="w-5/12 bg-transparent border-ggrey border-b-2 h-9 px-2 outline-none"></input>
                </div>
            </div>
            <div className="flex justify-center items-center py-5 flex-col w-full border-white border-2 rounded-lg text-ggrey">
                <div className="w-11/12 text-ggrey">
                    Point of Contact (POC)
                </div>
                <div className="flex justify-between items-center w-4/5">
                    <input type="text" placeholder="Full Name" className="w-5/12 bg-transparent border-ggrey border-b-2 h-9 px-2 outline-none"></input>
                    <input type="number" placeholder="Phone Number" className="w-5/12 bg-transparent border-ggrey border-b-2 h-9 px-2 outline-none"></input>
                </div>
            </div>
        </div>
    </>);
}

export default SportTeam;