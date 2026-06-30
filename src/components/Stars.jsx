export default function Stars() {

    return (

        <div className="absolute inset-0 overflow-hidden">

            {[...Array(80)].map((_,i)=>(

                <div
                    key={i}
                    className="absolute bg-white rounded-full animate-pulse"
                    style={{
                        width:2,
                        height:2,
                        left:`${Math.random()*100}%`,
                        top:`${Math.random()*100}%`
                    }}
                />

            ))}

        </div>

    )

}
