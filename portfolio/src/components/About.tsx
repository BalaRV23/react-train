// import pimage from '../assets/user.jpg'
function About(){
    return(
     <div className="d-flex justify-content-space-between align-items-center mt-3">
        <div className="mt-3">
            <p><u>HELLO, MY NAME IS</u></p>

            <h1 className='m-0 mt-3'>BALA MURUGAN</h1>
            <h2>UX/UI Design & Developer</h2>
        </div>
        <div className='user-photo d-flex justify-content-center align-items-centers'>
        {/* <img src={pimage} alt="profile image" width="30%"/> */}
        </div>
     </div>
    )
}

export default About