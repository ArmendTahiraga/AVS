import logo from "../../images/logo2.png";
import email from "../../images/email.png";
import phone from "../../images/phone.png";
import location from "../../images/location.png";
import instagram from "../../images/instagram.png";

const Footer = () => {
	return (
		<div className="backdrop-blur-lg bg-[#2d2d2d62] border border-[#464646] rounded-t-3xl shadow-lg shadow-white min-h-[17vh] flex items-center">
			<div className="flex justify-between items-center flex-col md:flex-row w-[90%] mx-auto">
				<div className="font-inter text-white flex justify-between items-center w-[70%] flex-wrap">
					<div className="me-3">
						<img src={email} alt="" className="inline-block" />
						<p className="inline-block text-sm ms-3">info@visualsolutions.al</p>
					</div>
					<div className="me-3">
						<img src={instagram} alt="" className="inline-block" />
						<a className="inline-block text-sm ms-3" href="https://www.instagram.com/albanianvisualsolutions/">
							albanianvisualsolutions
						</a>
					</div>

					<div className="me-3">
						<img src={phone} alt="" className="inline-block" />
						<p className="inline-block text-sm ms-3">06932434824</p>
					</div>
					<div className="me-3">
						<img src={location} alt="" className="inline-block" />
						<p className="inline-block text-sm ms-3">Shkodër, Albania</p>
					</div>
				</div>
				<div className="w-[30%]">
					<img src={logo} alt="" className="w-[40%] ms-auto" />
				</div>
			</div>
		</div>
	);
};

export default Footer;
