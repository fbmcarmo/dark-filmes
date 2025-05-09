export default function CardFilme({ filme }){
    return (
        <div className="w-[310px] h-[240px] flex flex-col rounded-lg bg-[#222222]
         cursor-pointer border border-transparent hover:border hover:border-[#8F7BD8] transition-all duration-300 ease-in-out">
            <div className="w-full h-[70%] rounded-t-lg relative">
                <img 
                    className="w-full h-full rounded-t-lg object-cover"
                    src={filme.banner}
                    alt={filme.titulo}   
                />
                <div className="absolute top-1 left-2 flex text-[#9ca3af]">
                    <p className="text-[17px] text-green-400 font-semibold">{filme.nota}</p>
                    <p>/10</p>
                </div>
            </div>
            <div className="w-full h-[30%] flex flex-col pt-0.5 px-4">
                <p className="text-[15px] font-bold">{filme.titulo}</p>
                <p className="text-[15px] text-[#8a898c]">{filme.diretor}</p>
                <div className="w-full flex justify-between">
                    <p className="text-[15px] text-[#8a898c]">{filme.ano}</p>
                    <div className="px-1 py-0 bg-[#8F7BD8]/10 text-[#8F7BD8] rounded-lg">{filme.genero}</div>
                </div>
            </div>
        </div>
    )
}