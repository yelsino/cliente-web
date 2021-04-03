const Modal = ({ children, style, position }) => {
	return (
		<div
			className={`fixed  inset-0 overflow-y-auto flex justify-center items-center ${
				position ? position : "z-30"
			}`}
		>
			<div className="fixed inset-0 transition-opacity " aria-hidden="true">
				<div className={`absolute inset-0 ${style ? style : ""}`}></div>
			</div>

			<div
				className="inline-block align-bottom  rounded-lg text-left overflow-hidden shadow-xl transform transition-all "
				role="dialog"
				aria-modal="true"
				aria-labelledby="modal-headline"
			>
				{children}
			</div>
		</div>
	);
};

export default Modal;
