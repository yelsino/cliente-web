const ModalLibre = ({ children, style }) => {
	return (
		<div className="fixed  inset-0 overflow-y-auto flex justify-center items-center z-30">
			<div className="fixed inset-0 transition-opacity" aria-hidden="true">
				<div className={`absolute inset-0  ${style ? style : ""}`}>
					{children}
				</div>
			</div>
		</div>
	);
};

export default ModalLibre;
