import { useState } from 'react';
import clsx from 'clsx';
import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';

export type OnClick = () => void;

interface ArrowButtonProps {
	open: boolean;
	setOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
}

export const ArrowButton = ({ open, setOpen }: ArrowButtonProps) => {
	return (
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={clsx(styles.container, open && styles.container_open)}
 			onClick={() => {
 				setOpen((prev) => !prev);
 			}}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx(styles.arrow, open && styles.arrow_open)}
			/>
		</div>
	);
};
