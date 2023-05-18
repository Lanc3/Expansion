import { motion } from 'framer-motion';
import ContactDetails from '../components/contact/ContactDetails';
import ContactForm from '../components/contact/ContactForm';
import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';
const contacts = [
	{
		id: 1,
		name: 'Tralee, Ireland',
		icon: <FiMapPin />,
	},
	{
		id: 2,
		name: 'aaron.keating.lanc3@gmail.com',
		icon: <FiMail />,
	},
	{
		id: 3,
		name: '083 317 5637',
		icon: <FiPhone />,
	},
];
const contactsNicola = [
	{
		id: 1,
		name: 'Tralee, Ireland',
		icon: <FiMapPin />,
	},
	{
		id: 2,
		name: 'nicolab137@gmail.com',
		icon: <FiMail />,
	},
	{
		id: 3,
		name: '087 137 5876',
		icon: <FiPhone />,
	},
];
const Contact = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.5,
				delay: 0.1,
			}}
			className="container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-10"
		>
			
			<ContactDetails contacts={contacts} name={"Aaron Keating"}/>
			<ContactDetails contacts={contactsNicola} name={"Nicola Byrne"}/>
		</motion.div>
	);
};

export default Contact;
