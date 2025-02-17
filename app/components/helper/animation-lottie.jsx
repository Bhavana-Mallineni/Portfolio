// "use client"

// import Lottie from "lottie-react";

// const AnimationLottie = ({ animationPath, width }) => {
//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: animationPath,
//     style: {
//       width: '95%',
//     }
//   };

//   return (
//     <Lottie {...defaultOptions} />
//   );
// };

// export default AnimationLottie;

"use client";

import PropTypes from "prop-types";
import Lottie from "lottie-react";

export const AnimationLottie = ({ animationPath }) => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationPath,
		style: {
			width: "95%"
		}
	};

	return <Lottie {...defaultOptions} />;
};

// PropTypes validation (for safety)
AnimationLottie.propTypes = {
	animationPath: PropTypes.object.isRequired
};
