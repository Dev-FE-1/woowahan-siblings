import { colors } from '@/constants/colors';
import styled from '@emotion/styled';
import React, { forwardRef } from 'react';

export interface IInputProps {
	value: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onKeyDown?: (event: React.KeyboardEvent) => void;
	name?: string;
	inputWidth?: string;
	placeholder?: string;
	type?: 'text' | 'password' | 'date';
	disabled?: boolean;
	className?: string;
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
	(
		{
			value,
			onChange,
			onKeyDown,
			name,
			inputWidth = '100%',
			placeholder = '',
			type = 'text',
			disabled = false,
			className,
		},
		ref,
	) => (
		<InputComponent
			value={value}
			onChange={onChange}
			onKeyDown={onKeyDown}
			name={name}
			inputWidth={inputWidth}
			placeholder={placeholder}
			type={type}
			disabled={disabled}
			className={className}
			ref={ref}
		/>
	),
);

const InputComponent = styled.input<IInputProps>`
	width: ${(props) => props.inputWidth};
	height: 50px;
	padding: 12px;
	border: 1px solid ${colors.lightGray};
	border-radius: 8px;
	color: ${colors.darkestGray};

	::placeholder {
		color: ${colors.gray};
	}

	&:hover {
		background-color: ${colors.veryLightGray};
	}

	&:focus {
		outline: none;
		border: 1px solid ${colors.primaryYellow};
	}

	&:disabled {
		border-color: ${colors.lightestGray};
		background-color: ${colors.lightestGray};
		color: ${colors.darkestGray};
	}
`;

export default Input;

Input.displayName = 'Input';
