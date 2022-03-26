import React from "react"
import { Button, Card,CardImg } from 'react-bootstrap';


function Work() {

    const works = [
        {
            title: "Portfolio",
            image: "https://miro.medium.com/max/1100/1*OlgqUIhvl5-9dZISlZ2-yQ.jpeg",
            view: "view1",
            sourcecoede: "sourcecoede1",
            summary:"This Shows My portfolio in React"


        },
        {
            title: "Movie App",
            image: "https://miro.medium.com/max/1100/1*OlgqUIhvl5-9dZISlZ2-yQ.jpeg",
            view: "https://loving-hoover-14da3f.netlify.app",
            sourcecoede: "sourcecoede2",
            summary:"It is Fullstack Applcation with signin and signup in React,Mongodb and Express . The short summary of the movie can be viewed in it "

        },


    ]

    return (

        <>
            <div className="workdesign ">
                {
                    works.map(d => (

                        <div>
                            <Card style={{ width: '18rem',color:"black" }}>
                                <Card.Img variant="top" src={d.image} />
                                <Card.Body>
                                    <Card.Title>{d.title}</Card.Title>
                                    <Card.Text>
                                        {d.summary}
                                    </Card.Text>
                                    <div className="cardbutton">
                                <a href={d.view} >
                                <Button variant="primary">View</Button>
                                </a>
                                    
                                    

                                    </div>
                                </Card.Body>
                            </Card>
                        </div>




                    ))
                }



            </div>
        </>
    )

}

export default Work