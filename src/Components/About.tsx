import { useContext } from "react";import { Context } from "../Context";

const About = () => {
	const { language, aboutRef } = useContext(Context);

	return (
		<div className="about-us w-[90%] mx-auto bg-contain bg-no-repeat bg-center mb-24 md:mb-40" id="about" ref={aboutRef}>
			<div className="flex justify-center items-center px-2 py-6 md:py-0 md:px-10 lg:px-20 min-h-[40vh] bg-[#ffffff0f] border rounded-2xl border-[#ffffff1a] backdrop-blur-xl brightness-100">
				<div>
					<p className="text-white text-center md:text-justify text-sm font-inter">
						{language === "EN"
							? `Welcome to Albanian Visual Studios (AVS), your one-stop destination for a range of online services that enhance your digital presence. We specialize in creating captivating websites, engaging designs, professional photo editing and effective management of your social media platforms.`
							: `Mirë se vini në Albanian Visual Studios (AVS), destinacioni juaj i vetëm për një spektër shërbimesh online që lartësojnë praninë tuaj dixhitale. Ne jemi të specializuar në krijimin e faqeve të internetit magjepsëse, dizajne tërheqëse, redaktimin profesional të fotografive dhe menaxhimin efektiv të platformave tuaja të mediave sociale.`}
					</p>

					<p className="text-white text-center md:text-justify text-sm font-inter">
						{language === "EN"
							? `Our AVS team is dedicated to bringing your vision to life, ensuring your online identity reflects the essence of your brand with creativity, innovation and quality. Whether you are a startup, business or individual, AVS is here to help you stand out in the dynamic world of online services.`
							: `Ekipi ynë i AVS është i përkushtuar për të sjellë në jetë vizionin tuaj, duke siguruar që identiteti juaj në internet pasqyron thelbin e markës tuaj me kreativitet, inovacion dhe cilësi. Pavarësisht nëse jeni fillestar, biznes apo individ, AVS është këtu për t'ju ndihmuar të dalloheni në botën dinamike të shërbimeve online.
                              `}
					</p>

					<p className="text-white text-center md:text-justify text-sm font-inter">
						{language === "EN"
							? `Choose AVS for a seamless experience where creativity meets functionality. Let us be your partners in success as we navigate the dynamic world of online services together. Albanian Visual Studios - where your ideas turn into reality!`
							: `Zgjidhni AVS për një përvojë të qetë ku kreativiteti takohet me funksionalitetin. Na lejoni të jemi partnerët tuaj në sukses teksa lundrojmë së bashku në botën dinamike të shërbimeve online. Albanian Visual Studios - ku idetë tuaja kthehen në realitet!`}
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
