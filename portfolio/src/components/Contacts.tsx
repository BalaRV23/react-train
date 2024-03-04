import pimage from '../assets/user.png'
function Contacts() {
    return (
        <>
            <div className="d-flex justify-content-space-between align-items-center">

                <div>
                <img src={pimage} alt="profile image" width='30%' />
                </div>

                <div className="text-align-end">
                    <ul className="menu-items">
                        <li className='active'>Home</li>
                        <li>About</li>
                        <li>Experiance</li>
                        <li>Porfolio</li>
                        <li>Contacts</li>
                    </ul>
                </div>
            </div>
        </>
    )

}

export default Contacts