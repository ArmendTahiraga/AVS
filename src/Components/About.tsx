import { useContext } from "react";
import { Context } from "../Context";

const About = () => {
	const { language } = useContext(Context);

	return (
		<div className="about-us w-[90%] mx-auto bg-contain bg-no-repeat bg-center mb-40" id="about">
			<div className="flex justify-center items-center px-20 min-h-[40vh] bg-[#ffffff0f] border rounded-2xl border-[#ffffff1a] backdrop-blur-xl brightness-100">
				<p className="text-white text-justify text-sm font-inter">
					{language === "EN"
						? `Welcome to Albanian Visual Studios (AVS), your one-stop destination for a spectrum of online services that elevate your 
                    digital presence. At AVS, we specialize in crafting captivating websites, eye-catching posters, distinctive logos, professional 
                    photo editing, and efficient management of your social media platforms. Whether you're a startup looking to establish a strong 
                    online presence, an established business aiming to refresh your brand image, or an individual seeking personalized digital 
                    services, AVS is here to turn your ideas into reality. We understand the importance of a cohesive and impactful online presence 
                    in today's digital landscape, and we are dedicated to helping you stand out. Choose AVS for a seamless experience where creativity 
                    meets functionality. Let us be your partners in success as we navigate the dynamic world of online services together. Albanian 
                    Visual Studios - where your your ideas turn into reality!`
						: `Mirë se vini në Albanian Visual Studios (AVS), destinacioni juaj i vetëm për një spektër shërbimesh online që lartësojnë 
                    praninë tuaj dixhitale. Në AVS, ne jemi të specializuar në krijimin e website-ve magjepsëse, posterave që bien në sy, logove 
                    dalluese, editimit profesional të fotografive dhe menaxhimit efikas të platformave tuaja të mediave sociale. Ekipi ynë 
                    profesional i AVS është i përkushtuar për të sjellë në jetë vizionin tuaj, duke siguruar që identiteti juaj online të pasqyrojë 
                    thelbin e markës suaj. Me fokus në kreativitet, inovacion dhe cilësi, ne përpiqemi të ofrojmë zgjidhje të përshtatshme që 
                    plotësojnë nevojat tuaja unike. Pavarësisht nëse jeni një startup që kërkon të krijojë një prani të fortë në internet, një biznes 
                    që synon të rifreskojë imazhin e markës tuaj, ose një individ që kërkon shërbime dixhitale të personalizuara, AVS është këtu për 
                    t'i kthyer idetë tuaja në realitet. Ne e kuptojmë rëndësinë e një pranie të fuqishme në internet dhe jemi të përkushtuar t'ju 
                    ndihmojmë të dalloheni. Zgjidhni AVS për një përvojë të qetë ku kreativiteti takohet me funksionalitetin. Na lejoni të jemi 
                    partnerët tuaj në sukses teksa lundrojmë së bashku në botën dinamike të shërbimeve online. Albanian Visual Studios - ku idetë 
                    tuaja kthehen në realitet!`}
				</p>
			</div>
		</div>
	);
};

export default About;
