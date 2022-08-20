import { convertTrToEng } from "utils";

function Category({ category }){
    return (
        <a href={convertTrToEng(category.title)}>
            <div 
            style={{'background' : category.color}} 
            className="rounded-md before:pt-[100%] before:block relative overflow-hidden"
            >
                <div className='absolute inset-0'>
                    <h3 className='p-4 text-2xl tracking-tighter font-semibold'>{category.title}</h3>
                </div>
                <img src={category.cover} alt='' className='w-[6.25rem] h-[6.25rem] rotate-[25deg] translate-x-[18%] translate-y-[2%] absolute bottom-0 right-0 shadow-spotify'/>
            </div>
        </a>
        
    )
}

function FavCategory({ category }){
    return (
        <a href={convertTrToEng(category.title)}>
            <div 
                style={{'background' : category.color}} 
                className="flex flex-shrink-0 rounded-lg relative overflow-hidden w-[27.375rem] h-[13.75rem]"
            >
                <div className='absolute inset-0'>
                    <h3 className='p-4 text-[2.5rem] tracking-tighter font-semibold'>{category.title}</h3>
                </div>
                <img src={category.cover} alt='' className='w-32 h-32 rotate-[25deg] translate-x-[18%] translate-y-[2%] absolute bottom-0 right-0 shadow-spotify'/>
            </div>
        </a>
    )
}
export {
    Category,
    FavCategory
};