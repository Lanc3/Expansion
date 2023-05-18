import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import { FiArrowDownCircle } from 'react-icons/fi';
import developerLight from '../../images/profile.png';
import developerDark from '../../images/nicola.jpg';
import { motion } from 'framer-motion';
import logoLight from '../../images/LightLogoText.svg';
import logoDark from '../../images/logoText.svg';
import {useState,useEffect} from 'react'
const AppBanner = () => {
	const [activeTheme] = useThemeSwitcher();
	const [save,setSave] = useState(activeTheme)
	useEffect(() => {
		setSave(localStorage.getItem('theme'));
		console.log(save)
	  });


	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2"
		>
			<div className="flex flex-col sm:w-1/3 px-6">
			<motion.div
				initial={{ opacity: 0, y: -180 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className="w-full text-right float-right mt-8 sm:mt-0"
			>
				{activeTheme === 'dark' ? (
								<img
									src={developerLight}
									className="w-38"
									alt="Dark Logo"
								/>
							) : (
								<img
									src={developerLight}
									className="w-38"
									alt="Dark Logo"
								/>
							)}
			</motion.div>
			<div className="mx-2">
			<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.3,
					}}
					className="flex justify-center w-full"
				>
					<a
						download="Aaron Keating Resume.pdf"
						href="/files/Aaron Keating Resume.pdf"
						className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
						aria-label="Download Resume"
					>
						<FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
						<span className="text-sm sm:text-lg font-general-medium duration-100">
							Download CV
						</span>
					</a>
				</motion.div>
			</div>
			
			</div>
			
			
			<div className="w-full md:w-1/3 text-center">
				
				
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.1,
					}}
					className="flex flex-row"
				>
					<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.1,
					}}
					className="text-center p-2 font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-center text-ternary-dark dark:text-primary-light "
				>
					We are
				</motion.h1>
					{activeTheme === 'dark' ? (
								<img
									src={logoDark}
									className="w-38"
									alt="Dark Logo"
								/>
							) : (
								<img
									src={logoLight}
									className="w-38"
									alt="Dark Logo"
								/>
							)}
				</motion.div>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.2,
					}}
					className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-center leading-normal text-gray-500 dark:text-gray-200"
				>
					A Duo, Full Stack Developer & Graphics Designer
				</motion.p>
				
			</div>
			<div className="flex flex-col w-full sm:w-1/3 px-6">
			<motion.div
				initial={{ opacity: 0, y: -180 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className="w-full text-right float-right mt-8 sm:mt-0"
			>
				<img
					src={
						activeTheme === 'dark' ? developerDark : developerDark
					}
					alt="Developer"
				/>
			</motion.div>
			<div className="">
			<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.3,
					}}
					className="flex justify-center w-full "
				>
					<a
						download="Aaron Keating Resume.pdf"
						href="/files/Aaron Keating Resume.pdf"
						className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
						aria-label="Download Resume"
					>
						<FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
						<span className="text-sm sm:text-lg font-general-medium duration-100">
							Download CV
						</span>
					</a>
				</motion.div>
			</div>
			
			</div>
			
		</motion.section>
	);
};

export default AppBanner;
