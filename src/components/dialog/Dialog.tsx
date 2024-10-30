import React, { useEffect, useRef, useState } from 'react';

import './dialog.scss';

const Dialog: React.FC = () => {
	const openButtonRef = useRef<HTMLButtonElement | null>(null);
	const focusButtonRef = useRef<HTMLButtonElement | null>(null);

	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => setIsOpen(true);

	const handleClose = () => {
		setIsOpen(false);
		openButtonRef.current?.focus();
	}

	useEffect(() => {
		if (isOpen && focusButtonRef.current) {
			focusButtonRef.current.focus();
		}
	}, [isOpen]);

	return (
		<div className={`dialog__backdrop ${isOpen ? 'active' : ''}`}>
			<div
			className='dialog'
				role='dialog'
				aria-modal='true'
				aria-labelledby='dialog-example-label'
				aria-describedby='dialog-example-desc'
				id='dialog-example'
			>
				<button onClick={handleOpen} ref={openButtonRef}>Show Dialog</button>
				<div className={`dialog__popup ${isOpen ? 'open' : ''}`}>
					<div className='dialog__content'>
						<h2 className='dialog__title' id='dialog-example-label'>Dialog Title</h2>
						<p className='dialog__content' id="dialog-example-desc">
							Lorem ipsum odor amet, consectetuer adipiscing elit. Sed bibendum eu diam ante, fringilla tellus. Varius est vulputate feugiat, maximus arcu adipiscing blandit pharetra elementum. At ac diam hendrerit risus amet odio lectus. Imperdiet ultrices arcu id laoreet dui litora ornare. Accumsan conubia integer molestie lacus vivamus consequat. Penatibus morbi nec tortor, lacus hac fusce congue neque. Litora habitant hac morbi donec augue habitasse proin netus sem?
						</p>
					</div>
					<button
						className='dialog__close'
						onClick={handleClose}
						ref={focusButtonRef}
					>close</button>
				</div>
			</div>
		</div>
	);
};

export default Dialog;
