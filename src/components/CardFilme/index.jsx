export default function CardFilme(){
    return (
        <div className="w-[310px] h-[240px] flex flex-col rounded-lg bg-[#222222]">
            <div className="w-full h-[70%] rounded-t-lg">
                <img 
                    className="w-full h-full rounded-t-lg object-cover"
                    src="https://image.api.playstation.com/vulcan/ap/rnd/202206/0720/0kRqUeSBIbQzz7cen3c989c6.jpg"
                    alt=""    
                />
            </div>
            <div className="w-full h-[30%] flex flex-col pt-1 px-4">
                <p className="text-[15px] font-bold">The Last of Us</p>
                <p className="text-[15px] text-[#8a898c]">Neil Druckmann</p>
                <div className="w-full flex justify-between">
                    <p className="text-[15px] text-[#8a898c]">2019</p>
                    <div className="px-1 py-0 bg-[#8F7BD8]/10 text-[#8F7BD8] rounded-lg">Ação</div>
                </div>
            </div>
        </div>
    )
}