import React from "react"
import EditItemModal from "../components/EditItemModal"


    //     itemId: '5',
    //     itemName: 'ss',
    //     brand: 'sadas',
    //     itemPrice: '9.5',
    //     size: '9.5',
    //     releaseDate: '2023-01-05',
    //     itemColor: 'asdasd',
    //     descriptions: 'asdas'
    //   
const LandingPage:React.FC = ()=>{
    return(
        <div>
            <p>Hi This is landing page</p>
            <EditItemModal itemId={5} itemName="ss" brand="ss" itemPrice={9} size={9} releaseDate="2023-01-03" itemColor="red" descriptions="hello"/>
        </div>
    )
}

export default LandingPage