//import
import React from "react"
import { useState, useEffect } from "react"

//import react bootstrap
import { Row, Col, Image, Button, Modal } from "react-bootstrap"

//import images
import HeroImageMobile from "../../img/Hero-image__mobile.png"
import HeroImage from "../../img/Hero-image.png"
import MoviesEndpoint from "../../img/movies-endpoint.png"
import APIResponse from "../../img/API-movies-response.png"
import APIResponse2 from "../../img/API-movies-response(fullscreen).png"
import Schema from "../../img/schema.png"
import HashedPassword from "../../img/hashed-password.png"
import FetchExample from "../../img/fetch-example.png"
import FavoriteManipulation from "../../img/favorite-manipulation.png"

export const CaseStudy = () => {
    //function for changing screen sizes
    const [screenWidth, setScreenWidth] = useState(false)
    const [smallImage, setSmallImage] =useState(false)

    const checkWidth = () => {
        if (window.matchMedia("(min-width: 576px)").matches) {
            setScreenWidth(true)
        } else {
            setScreenWidth(false)
        }
    }

    const setImage= () => {
        if (window.matchMedia("(min-width: 992px)").matches) {
            setSmallImage(false)
        } else {
            setSmallImage(true)
        }
    }

    useEffect(() => {
        window.addEventListener("load", checkWidth)
        return () => {
            window.removeEventListener("load", checkWidth)
        }
    })
    
    useEffect(() => {
        window.addEventListener("resize", checkWidth)
        return () => {
            window.removeEventListener("resize", checkWidth)
        }
    })

    useEffect(() => {
        window.addEventListener("resize", setImage)
        return () => {
            window.removeEventListener("resize", setImage)
        }
    })


    return (
    <>
        <Row>
            { !screenWidth ? (
                <Col className="mt-3">
                    <Image style={{width: "100%"}} src={HeroImageMobile} />
                </Col>
                
            ) : (
                <Col xxl="12" className="mt-3 text-center">
                    <Image src={HeroImage} />
                </Col>
            )}
        </Row>
        { screenWidth ? (
            <Row>
                <Col 
                    xs="12"
                    className="fw-bold fs-1 text-primary text-center"
                >
                    Study Case of MyFlix application
                </Col>
            </Row>
        ) : (
            <>
                <Row>
                    <Col xs="12" className="fw-bold fs-1 text-primary text-center">
                        Study Case of
                    </Col>
                </Row>
                <Row>
                <Col xs="12"className="fw-bold fs-1 text-primary text-center">
                    MyFlix application
                </Col>
                </Row>
            </>
        )}
        <Row className="mt-3">
            <Col xs={{offset: 1, span: 10}}>
                <span className="text-primary fw-bold">Overview: </span>MyFlix is using MERN stack. MERN is an acronym, 
                what stands for MongoDB (a non-relational document-oriented database), 
                Express (a server-side framework), React (a client-side JavaScript 
                framework), and Node.js (the server-side environment for JavaScript 
                programming language).
            </Col>
        </Row>
        <Row className="mt-3">
            <Col xs={{offset: 1, span: 10}}>
                <span className="text-primary fw-bold">Purpose and Context: </span>The 
                MyFlix application project is a 
                one-person project and part of the CareerFoundry full-stack 
                web development course, where my project was to create both the 
                server-side and the client-side of the app from scratch.
            </Col>
        </Row>
        <Row className="mt-3">
            <Col xs={{offset: 1, span: 10}}>
                <span className="text-primary fw-bold">Objective: </span>Create an app 
                from scratch where the users are able 
                to see a list of all the movies that exist in the database of 
                the application, they can select a movie for more details, and 
                can create an account to save their favorite movies.
            </Col>
        </Row>
        <Row className="mt-3">
            <Col xs={{offset: 1, span: 10}}>
                <span className="text-primary fw-bold">Duration: </span>3 Months
            </Col>
        </Row>
        <Row className="mt-3">
            <Col xs={{offset: 1, span: 10}}>
                <span className="text-primary fw-bold">Role: </span>Lead Developer
            </Col>
        </Row>
        <Row className="mt-3">
            <Col xs={{offset: 1, span: 10}}>
                <span className="text-primary fw-bold">Tools used:</span>
            </Col>
        </Row>
        <Row className="mt-3">
            <Col xs={{offset: 1, span: 10}}>
                - Node.js
            </Col>
        </Row>
        <Row>
            <Col xs={{offset: 1, span: 10}} className="px-4">
                - Framework:
            </Col>
        </Row>
        <Row>
            <Col xs={{offset: 1, span: 10}} className="px-5">
                - Express
            </Col>
        </Row>
        <Row>
            <Col xs={{offset: 1, span: 10}}>
                - MongoDB
            </Col>
        </Row>
        <Row>
            <Col xs={{offset: 1, span: 10}}>
                - React
            </Col>
        </Row>
        <Row>
            <Col xs={{offset: 1, span: 10}} className="px-4">
                - UI framework:
            </Col>
        </Row>
        <Row>
            <Col xs={{offset: 1, span: 10}} className="px-5">
                - Bootstrap
            </Col>
        </Row>
        <Row className="mt-3 mb-3">
            <Col xs={{offset: 1, span: 10}}>
                Creating both sides came with challenges, like getting the right 
                response from a specific endpoint, debugging if something 
                functioned wrong, giving the client-side the information it 
                needed from the database. I had to do a lot of research and ask 
                my tutor and mentor for tips to solve the problems that emerged 
                along the way, but now I feel confident about using React and 
                Node.js as well. Let us see the project in a bit more detail.
            </Col>
        </Row>
        <Row className="mt-3">
            <Col className="fw-bold fs-2 text-primary text-center">
                Server-side
            </Col>
        </Row>
        <Row className="mt-3">
            <Col 
                lg={{offset:1, span: 4}}
                xs="12" 
                className="text-primary fw-bold fs-4 text-center"
            >
                Setting up the REST API endpoints
            </Col>
        </Row>
        <Row className="mt-3">
            <Col 
                xxl={{offset: 1, span: 5}} 
                lg={{offset: 1, span: 4}} 
                xs={{offset: 1, span: 10}}
            >
                API is the acronym for Application Programming Interface. It is a set 
                of rules defining how apps or devices can connect to and communicate 
                with each other. This step is the most crucial one at the backend, 
                because it assures the possibility to communicate with the client-side 
                and the database of the application.I used the package mongoose to be 
                able to connect with the database, and cors to specify the domains 
                that can communicate with the API.<br/>
                <br/>
                Challenges: At first I used the latest version of mongoose 
                (version 7.0.1), which didn't let me write any callback 
                functions, I could work only with premises. Later I downgraded 
                to version 6.0.3, after that the package worked how I wanted it 
                to work.
            </Col>
            <Col 
                    xxl="5" 
                    lg="6" 
                    sm={{offset: 1, span: 10}} 
                    className="mt-3 text-center"
                >   
                    <a href="https://darkpfeffer-myflix.netlify.app/movies-endpoint.ced65ccf.png" target="_blank">
                        <Image src={MoviesEndpoint} style={{width: "100%"}}/>
                    </a>
                    <br/>
                    <br/>
                    The endpoint to get all movies<br/>
                    (Click on the image to see it bigger)
                </Col>
        </Row>
        <Row className="mt-5 mb-sm-3 mb-5">
            <Col
                xxl={{offset: 7, span: 5}}
                lg={{offset: 8, span: 4}}
                xs="12"
                className="text-primary fw-bold fs-4 text-center"
            >
                Create the database and connect it with the API
            </Col>
        </Row>
        <Row>
            { !smallImage ? (
                <>
                    <Col 
                        xxl={{offset: 1, span: 5}}
                        lg={{offset: 1, span: 6}}
                        className="mb-3 text-center"
                    >
                        <a 
                            href="https://darkpfeffer-myflix.netlify.app/API-movies-response.9d3f869a.png"
                            target="_blank"
                        >
                            <Image 
                                src={APIResponse} width="80%"
                                className="h-75"
                            /><span><Image src={APIResponse2} width="0.2%"/></span>
                        </a><br/>
                        Request sent to API to get a list of all movies from the database<br/>
                        (Click on the image to see the full image)
                    </Col>
                    <Col 
                        xxl={{span: 5}} 
                        lg={{span: 4}} 
                        xs={{offset: 1, span: 10}}
                    >
                        The database was created with MongoDB, first locally, later in 
                        the cloud using MongoDB Atlas. The database stores all the 
                        information about the movies and users as well.<br/>
                        <br/>
                        Challenges: First I used the terminal to add the information to 
                        the database. It required a lot of awareness and focusing. I was 
                        able to ease the challenge. First I wrote everything in the code 
                        editor "Visual Studio Code", and I copy-pasted into the terminal. 
                        This way it was much easier to work with the database manually.
                    </Col>
                </>
                
            ) : (
                <>
                    <Col 
                        xxl={{span: 5}} 
                        lg={{span: 4}} 
                        xs={{offset: 1, span: 10}}
                    >
                        The database was created with MongoDB, first locally, later in 
                        the cloud using MongoDB Atlas. The database stores all the 
                        information about the movies and users as well.<br/>
                        <br/>
                        Challenges: First I used the terminal to add the information to 
                        the database. It required a lot of awareness and focusing. I was 
                        able to ease the challenge. First I wrote everything in the code 
                        editor "Visual Studio Code", and I copy-pasted into the terminal. 
                        This way it was much easier to work with the database manually.
                    </Col>
                    <Row className="mt-5">
                        <Col 
                            xxl={{offset: 1, span: 5}}
                            lg={{offset: 1, span: 6}}
                            className="mb-5 mb-sm-3 text-center"
                        >
                            <a 
                                href="https://darkpfeffer-myflix.netlify.app/API-movies-response.9d3f869a.png"
                                target="_blank"
                            >
                                <Image 
                                    src={APIResponse} width="80%"
                                    className="h-75"
                                />
                            </a><br/>
                            Request sent to API to get a list of all movies from the database<br/>
                            (Click on the image to see the full image)
                        </Col>
                    </Row>
                </>
                )} 
        </Row>
        <Row className="mt-3">
            <Col 
                xxl={{offset:1, span: 4}}
                lg={{offset:1, span: 5}}
                xs="12" 
                className="text-primary fw-bold fs-4 text-center"
            >
                Create schemas for the specific data types
            </Col>
        </Row>
        <Row>
            <Col 
                xxl={{offset: 1, span: 5}} 
                lg={{offset: 1, span: 4}} 
                xs={{offset: 1, span: 10}}
            >
                It is an important step, because with creating schemas the 
                database won't contain any faulty code, which can prevent attacks 
                from hackers. Normally, MongoDB doesn't require the developer to 
                use schemas in order to use the database, so it is the API's work 
                to check the given schemas with "mongoose". I created the database 
                first, so I had the rules set up already, it wasn't much of a 
                challenge at this point.
            </Col>
            <Col 
                    xxl="5" 
                    lg="6" 
                    sm={{offset: 1, span: 10}} 
                    className="mt-3 text-center"
                >   
                    <a href="http://localhost:1234/schema.bd2ab4e9.png?1687249179934" target="_blank">
                        <Image src={Schema} style={{width: "80%"}}/>
                    </a>
                    <br/>
                    <br/>
                    Schema for users<br/>
                    (Click on the image to see it bigger)
                </Col>
        </Row>
        <Row className="mt-5 mb-sm-3 mb-5">
            <Col
                xxl={{offset: 7, span: 5}}
                lg={{offset: 8, span: 4}}
                xs="12"
                className="text-primary fw-bold fs-4 text-center"
            >
                Create the user authentication, authorization and password encryption
            </Col>
        </Row>
        <Row>
            { !smallImage ? (
                <>
                    <Col 
                        xxl={{offset: 1, span: 5}}
                        lg={{offset: 1, span: 6}}
                        className="mb-3 text-center"
                    >
                        <a 
                            href="http://localhost:1234/hashed-password.01e18e8c.png?1687253974065"
                            target="_blank"
                        >
                            <Image 
                                src={HashedPassword} width="80%"
                            />
                        </a><br/>
                        Example for hashed password<br/>
                        (Click on the image to see it bigger)
                    </Col>
                    <Col 
                        xxl={{span: 5}} 
                        lg={{span: 4}} 
                        xs={{offset: 1, span: 10}}
                    >
                        It is one of the main foundation part of the application. 
                        I used packages passport, passport-jwt, passport-local and 
                        bcrypt. Here I had to define how the API should check the 
                        database when the user tries to log in.Created the schema 
                        of how the password should be encrypted, and the encrypted 
                        password will be stored at the database. This way, no one 
                        will know (not even the developer) what the password of 
                        the user is. The information of the user will be a lot 
                        more protected that way. After the log in, the user will 
                        be authorized to use the application. At first it was 
                        really hard to understand how it works, but after using it 
                        for a while, it gave me a lot of experience and 
                        understanding.
                    </Col>
                </>
                
            ) : (
                <>
                    <Col 
                        xxl={{span: 5}} 
                        lg={{span: 4}} 
                        xs={{offset: 1, span: 10}}
                    >
                        It is one of the main foundation part of the application. 
                        I used packages passport, passport-jwt, passport-local and 
                        bcrypt. Here I had to define how the API should check the 
                        database when the user tries to log in.Created the schema 
                        of how the password should be encrypted, and the encrypted 
                        password will be stored at the database. This way, no one 
                        will know (not even the developer) what the password of 
                        the user is. The information of the user will be a lot 
                        more protected that way. After the log in, the user will 
                        be authorized to use the application. At first it was 
                        really hard to understand how it works, but after using it 
                        for a while, it gave me a lot of experience and 
                        understanding.
                    </Col>
                    <Row className="mt-3">
                        <Col 
                            xxl={{offset: 1, span: 5}}
                            lg={{offset: 1, span: 6}}
                            className="mb-5 mb-sm-3 text-center"
                        >
                            <a 
                            href="http://localhost:1234/hashed-password.01e18e8c.png?1687253974065"
                            target="_blank"
                        >
                            <Image 
                                src={HashedPassword} width="80%"
                            />
                        </a><br/>
                        Example for hashed password<br/>
                        (Click on the image to see it bigger)
                        </Col>
                    </Row>
                </>
                )} 
        </Row>
        <Row className="mt-5">
            <Col xs={{offset: 1, span: 6}}>
                You can find all the dependencies of the server-side here: 
            </Col>
            <Col xs={{offset: 1, span: 6}}>
                <a 
                    href="https://github.com/Darkpfeffer/movie_api/blob/main/package.json"
                >
                    https://github.com/Darkpfeffer/movie_api/blob/main/package.json
                </a>
            </Col>
        </Row>
        <Row className="mt-3">
            <Col xs={{offset: 1, span: 6}}>
                To know more about the endpoints: 
            </Col>
            <Col xs={{offset: 1, span: 6}}>
                <a 
                    href="https://myflix-5sws.onrender.com/documentation.html"
                >
                    https://myflix-5sws.onrender.com/documentation.html
                </a>
            </Col>
        </Row>
        <Row className="mt-3">
            <Col className="fw-bold fs-2 text-primary text-center">
                Client-side
            </Col>
        </Row>
        <Row className="mt-5">
        <Col 
                lg={{offset:1, span: 5}}
                xs="12" 
                className="text-primary fw-bold fs-4 text-center"
            >
                Create components for each functionality the application has
            </Col>
        </Row>
        <Row className="mt-3">
            <Col 
                xxl={{offset: 1, span: 6}} 
                lg={{offset: 1, span: 5}} 
                xs={{offset: 1, span: 10}}
            >
                It is crucial for a single page application, because the 
                components are the views that will be rendered to the user. 
                At the early part of the project it was really hard to understand 
                how components work and how to connect them to each other and 
                transfer the data they need or they change. I got used to it 
                later on, and now I can use them confidently.
            </Col>
        </Row>
        <Row className="mt-5 mb-sm-3 mb-5">
            <Col
                xxl={{offset: 6, span: 6}}
                lg={{offset: 7, span: 5}}
                xs="12"
                className="text-primary fw-bold fs-4 text-center"
            >
                If a component sends data to the database, or needs data from it, the client-side needs to communicate with the REST API
            </Col>
        </Row>
        <Row>
            { !smallImage ? (
                <>
                    <Col 
                        xxl={{offset: 1, span: 4}}
                        lg={{offset: 1, span: 5}}
                        className="mb-3 text-center"
                    >
                        <a 
                            href="http://localhost:1234/fetch-example.671b6915.png?1687256410083"
                            target="_blank"
                        >
                            <Image 
                                src={FetchExample} 
                                className="w-75 h-75"
                            />
                        </a><br/>
                        "Fetch" example<br/>
                        (Click on the image to see it bigger)
                    </Col>
                    <Col 
                        xxl={{span: 6}} 
                        lg={{span: 5}} 
                        xs={{offset: 1, span: 10}}
                    >
                        Here I had to "fetch" the endpoints I created and use the 
                        appropriate CRUD (Create, Read, Update, Delete) operations 
                        to get or manipulate the information of the database. At 
                        some point it was challenging, especially at login and 
                        manipulating the user's favorite list.<br/>
                        <br/>
                        The former was challenging, because for security reasons 
                        the client-side sends the login credentials via the 
                        request body instead of the url, and it was really hard 
                        for me to send it correctly so that the API is able to 
                        read the credentials.
                    </Col>
                </>
                
            ) : (
                <>
                    <Col 
                        xxl={{span: 5}} 
                        lg={{span: 4}} 
                        xs={{offset: 1, span: 10}}
                    >
                        Here I had to "fetch" the endpoints I created and use the 
                        appropriate CRUD (Create, Read, Update, Delete) operations 
                        to get or manipulate the information of the database. At 
                        some point it was challenging, especially at login and 
                        manipulating the user's favorite list.<br/>
                        <br/>
                        The former was challenging, because for security reasons 
                        the client-side sends the login credentials via the 
                        request body instead of the url, and it was really hard 
                        for me to send it correctly so that the API is able to 
                        read the credentials.
                    </Col>
                    <Row className="mt-3">
                        <Col 
                            xxl={{offset: 1, span: 5}}
                            lg={{offset: 1, span: 6}}
                            className="mb-5 mb-sm-3 text-center"
                        >
                            <a 
                            href="http://localhost:1234/fetch-example.671b6915.png?1687256410083"
                            target="_blank"
                        >
                            <Image 
                                src={FetchExample}
                                className=" w-75 h-50"
                            />
                        </a><br/>
                        "Fetch" example<br/>
                        (Click on the image to see it bigger)
                        </Col>
                    </Row>
                </>
                )} 
        </Row>
        <Row>
            <Col 
                xxl={{offset: 1, span: 5}} 
                lg={{offset: 1, span: 4}} 
                xs={{offset: 1, span: 10}}
            >
                When manipulating the user's favorite list I had to change the 
                endpoint result to the whole user information, so that the 
                client-side can store it in-memory and in the browser's local 
                storage as well. Like that, if the user adds a movie to the 
                favorite list, the empty heart will switch to a full one, and 
                the list will be updated as well in the database.
            </Col>
            <Col 
                    xxl="5" 
                    lg="6" 
                    sm={{offset: 1, span: 10}} 
                    className="mt-3 text-center"
                >   
                    <a href="http://localhost:1234/favorite-manipulation.22a6c776.png?1687270459769" target="_blank">
                        <Image src={FavoriteManipulation} style={{width: "70%"}}/>
                    </a>
                    <br/>
                    <br/>
                    Example of movie removed from favorites<br/>
                    (Click on the image to see it bigger)
                </Col>
        </Row>
        <Row className="mt-5 mb-sm-3 mb-5">
            <Col
                xxl={{offset: 7, span: 5}}
                lg={{offset: 8, span: 4}}
                xs="12"
                className="text-primary fw-bold fs-4 text-center"
            >
                Create client-side endpoints, so users can go back to the 
                previous views of the application
            </Col>
        </Row>
        <Row>
            <Col 
                xxl={{offset: 7, span: 5}} 
                lg={{offset: 8, span: 4}} 
                xs={{offset: 1, span: 10}}
            >
                This way after the user changes a view on the website, it will 
                get a new URL endpoint, and with the back button pressed, it 
                returns to the previous view of the website. The packages 
                react-router and react-router-dom have been used to reach this 
                goal. It was pretty easy to get used to it, and I found it an 
                easier solution than the use of event listeners.
            </Col>
        </Row>
        <Row className="mt-5">
            <Col className="fw-bold fs-2 text-primary text-center">
                Summary and Future Plans
            </Col>
        </Row>
        <Row className="mt-3">
            <Col xs={{offset: 1, span: 10}}>
                I did every required objective on the project in time, and I'm 
                satisfied with the result. But there are some improvement I'll 
                plan to implement:
            </Col>
        </Row>
        <Row className="mt-3 ps-5">
            <Col xs={{offset: 1, span: 10}}>
                - If a user presses the favorite button, at this moment an alert 
                window pops up, showing that the movie was added/removed 
                successfully. I will change that only a full or an empty heart 
                will be shown depending if the movie is in the favorite list or 
                not.
            </Col>
        </Row>
        <Row className="mt-3 ps-5">
            <Col xs={{offset: 1, span: 10}}>
                - I would change at the user data change, that only one data 
                should be changed at a time. Like this the user has the option 
                to change one after another, but they don't have to enter data 
                they don't even want to change.
            </Col>
        </Row>
        <Row className="mt-3 ps-5">
            <Col xs={{offset: 1, span: 10}}>
                - The final change is to rewrite the website to React Redux.
            </Col>
        </Row>
        <Row className="mt-3">
            <Col xs={{offset: 1, span: 10}}>
                You can check the final application here: 
                <span> <a 
                    href="https://darkpfeffer-myflix.netlify.app"
                >
                    https://darkpfeffer-myflix.netlify.app
                </a>
                </span>
            </Col>
        </Row>
        <Row className="mt-3">
            <Col xs={{offset: 1, span: 10}}>
            Thank you for reading through! I hope you liked it!
            </Col>
        </Row>
        <Row className="mt-3">
            <Col xs={{offset: 1, span: 10}}>
                Extra thanks for:
            </Col>
        </Row>
        <Row className="mt-3 mb-5 ps-5">
            <Col xs={{offset: 1, span: 10}}>
                - CareerFoundry
            </Col>
        </Row>
    </>
    )
}