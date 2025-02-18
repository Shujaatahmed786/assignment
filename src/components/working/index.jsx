import { working } from "@/data/working"
const Working = () => {
    return (
        <div className="px-36">
            <div className="flex justify-center">
                <h1 className="text-[31px] max-w-lg w-full text-center font-bold">We work with you until you are
                    <span className="text-[rgb(250,172,29)]">100% satisfied</span> with the quality!</h1></div>
                    <div className="flex justify-center"><h2 className="text-center max-w-[57rem] w-full text-base text-[#4c4c4c]">The quality of English in all documents edited by ACE ASSIGNMENT HUB will meet the standards required in the international publishing industry. This guarantee covers every document edited by us, regardless of the service level chosen, deadline, or price.</h2></div>
                   <div>
                    {working.map((items,index) => (<div key={index}>
                        <h1 className="text-base text-[#121212] font-bold">{items.para}</h1>
                    </div>))}
                   </div>
                    </div>


    )
}

export default Working