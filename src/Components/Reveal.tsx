import { RevealType } from "../models/models";
import { motion } from "framer-motion";

const Reveal: React.FC<RevealType> = ({ children, width }) => {
	// const ref = useRef(null);
	// const isInView = useInView(ref);
	// const controls = useAnimation();

	// useEffect(() => {
	// 	if (isInView) {
	// 		controls.start("visible");
	// 	}
	// }, [isInView, controls]);

	return (
		<div className="relative overflow-hidden" style={{ width: width }}>
			<motion.div
				variants={{
					hidden: { opacity: 0, y: -75 },
					visible: { opacity: 1, y: 0 },
				}}
				initial="hidden"
				whileInView="visible"
				transition={{ duration: 0.3, delay: 0.2 }}
			>
				{children}
			</motion.div>
		</div>
	);
};

export default Reveal;
