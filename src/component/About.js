import React from 'react'
// import { withRouter } from 'react-router'
// import { useState } from 'react/cjs/react.development'

export default function About(props) {
    // const [myStyle, setMyStyle] = useState(
    // {
    //     color: 'black',
    //     backgroundColor: 'white'
        
    // })
    let myStyle = {
        color: props.mode ==='dark'?'white':'#042743',
        backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white',
        border: '2px solid',
        borderColor: props.mode === 'dark'?'white':'#042743'    }

    // const [btn, setBtnText] = useState("Enable Dark Mode")

    // const  toggleStyle = ()=> {
    //    if( myStyle.color === 'black') {
    //        setmyStyle({
    //         color: 'white',
    //         backgroundColor: 'black',
    //         border: '1px solid white'

    //        })
    //        setBtnText("Enable Light Mode");
    //     }
    //     else {
    //         setmyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //        })
    //         setBtnText("Enable Dark Mode");  
    //     }
    // }


    return (
        <div className="container">
            <h1 className="my-3" style={{color: props.mode ==='dark'?'white':'#042743'}}>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze Your text</strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    TextUtils is a word counter and a character counting utility which can be used to manipulate your text in the way you want. You can remove extra spaces, copy the manipulated text as well as convert your text from Uppercase to lowercase and lowercase to Uppercase.Text analyzer is an online tool for complete text analysis. Check the number of characters, spaces, words, sentences, paragraphs, shortest and longest words used in your text or article.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use</strong>
                    </button>
                    </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                Textutils gives you a way to analyze your text quickly and efficiently.TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible</strong> 
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                </div>
                </div>
            </div>
            </div>

            {/* <div className="container my-3">
                <button onClick={toggleStyle} type="button" className="btn btn-primary">{btn}</button>
            </div> */}
           
        </div>
    )
}