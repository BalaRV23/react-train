import easyimg from "../../../portfolio/src/assets/easy-mbl.png"
import buddyimg from "../../../portfolio/src/assets/buddy.png"
import bikeimg from "../../../portfolio/src/assets/bike-green.png"
import yudimg from "../../../portfolio/src/assets/yuy-dud.png"
const Details = () => {
    return (
        <div>
            <div>
                <h1 className="text-center">My Works</h1>
            </div>
            <div className="d-flex">
                <div className="w-50 text-align-center">
                    <h3><strong>Easy Way</strong></h3>
                    <img src={easyimg} alt="easy" width="50%" />
                    <p className="text-center">Application for new immigrants</p>
                </div>
                <div className="w-50 text-align-center">
                    <h3><strong>Bike Generation</strong></h3>
                    <img src={bikeimg} alt="easy" width="50%" />
                    <p className="text-center">E-commerce website</p>
                </div>
            </div>
            <div className="d-flex">
                <div className="w-50 text-align-center">
                    <h3><strong>Buddy</strong></h3>
                    <img src={buddyimg} alt="easy" width="50%" />
                    <p className="text-center">adopt a dog website</p>
                </div>
                <div className="w-50 text-align-center">
                    <h3><strong>YuTu Social</strong></h3>
                    <img src={yudimg} alt="easy" width="50%" />
                    <p className="text-center"> UK social network aimed</p>
                </div>
            </div>
        </div>
    )
}
export default Details
