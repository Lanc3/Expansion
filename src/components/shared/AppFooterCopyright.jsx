function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light pr-2">
				&copy; {new Date().getFullYear()}

				
			</div>
			<p className="px-4">Expansion.ie</p>
		</div>
	);
}

export default AppFooterCopyright;
