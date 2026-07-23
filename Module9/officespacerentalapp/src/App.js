import office from "./office.jpg";

function App() {
    const officeSpaces = [
        {
            name:"DBS Business Center",
            rent:55000,
            address:"Hyderabad",
            image:office
        },
        {
            name:"Cyber Towers",
            rent:70000,
            address:"Madhapur",
            image:office
        },
        {
            name:"Mindspace",
            rent:90000,
            address:"Hitech City",
            image:office
        }

    ];
    return(
        <div>
            <h1>Office Space Rental App</h1>
            {
                officeSpaces.map((office,index)=>(
                    <div key={index}>
                        <img
                            src={office.image}
                            alt="Office"
                            width="300"
                            height="200"
                        />
                        <h2>{office.name}</h2>
                        <h3
                            style={{
                                color:
                                office.rent<60000
                                ?"red"
                                :"green"
                            }}
                        >
                            Rent : Rs.{office.rent}
                        </h3>
                        <h3>
                            Address : {office.address}
                        </h3>
                        <hr/>
                    </div>
                ))
            }
        </div>
    );
}

export default App;