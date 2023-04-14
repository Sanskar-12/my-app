import React,{useState} from 'react'

export default function About(props) {
    // let [Style,setStyle]=useState({
    //     color:'black',
    //     backgroundColor:'white',

    // })

    let Style={
        color:props.mode==='dark'?'white':'#042743',
        backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white',
        border:'1px solid',
        borderColor:props.mode==='dark'?'white':'#042743',

    }

    // let [button,setbutton]=useState("Turn to DarkMode")

    // let ToggleStyle =()=>{
    //     if(Style.color==='white')
    //     {
    //         setStyle({
    //             color:'black',
    //             backgroundColor:'white',
                
    //         })
    //         setbutton("Turn to DarkMode")
    //     }
    //     else
    //     {
    //         setStyle({
    //             color:'white',
    //             backgroundColor:'black',
    //             border: '1px solid white',
    //         })
    //         setbutton("Turn to LightMode")
    //     }
    // }
  return (
    
        <div classNameNameName="container" style={{color:props.mode==='dark'?'white':'#042743',}}>
            <h1 classNameName="my-3">About Us</h1>
            <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={Style}>
        <h2 className="accordion-header">
            <button className="accordion-button" type="button" style={Style} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
           <strong>Analyse your text</strong>
            </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={Style} >
            If you receive huge amounts of unstructured data in the form of text emails, social media conversations, chats, youre probably aware of the challenges that come with analyzing this data.
            </div>
        </div>
        </div>
        <div className="accordion-item" style={Style}>
        <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={Style} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Free to use</strong>
            </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={Style}>  
            Free Use means a specific case in which people can use the work without permission according to the copyright limitation on the work. In this case, the user should comply with the specific legal conditions. 
            </div>
        </div>
        </div>
        <div className="accordion-item" style={Style}>
        <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={Style} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Browser compatible</strong>
            </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={Style}>
            Browser compatibility, often known as cross-browser compatibility, refers to whether or not a website or web application functions as intended in any particular browser version on different devices.
            </div>
        </div>
        </div>
        </div>
        {/* <div className="container my-3">
        <button className="btn btn-primary" onClick={ToggleStyle} >{button}</button>
        </div> */}
        
        </div>
        
  )
}
