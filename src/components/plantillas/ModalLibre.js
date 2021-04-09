const ModalLibre = ({ children, style,position }) => {
	return (
		<div
			className={`fixed  inset-0 overflow-y-auto flex justify-center items-center ${
				!position ? "z-30" : position
			}`}
		>
			<div className="fixed inset-0 transition-opacity" aria-hidden="true">
				<div className={`absolute inset-0  ${style ? style : ""}`}>
					{children}
				</div>
			</div>
		</div>
	);
};

export default ModalLibre;
