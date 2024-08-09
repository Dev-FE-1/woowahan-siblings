import { FC } from 'react';
import { colors } from '@/constants/colors';
import styled from '@emotion/styled';

export interface IIconButtonProps {
	IconComponent: React.ComponentType;
	shape: 'transparent' | 'line';
	color?: 'gray' | 'black';
	size?: number;
	onClick?: () => void;
	disabled?: boolean;
}

const IconButton: FC<IIconButtonProps> = ({
	IconComponent,
	shape,
	color = 'gray',
	size = 28,
	onClick,
	disabled = false,
}: IIconButtonProps) => {
	return (
		<StyledIconButton
			shape={shape}
			color={color}
			size={size}
			onClick={!disabled ? onClick : undefined}
			disabled={disabled}
		>
			<IconComponent />
		</StyledIconButton>
	);
};

export default IconButton;

const StyledIconButton = styled.div<{
	shape: string;
	color: string;
	size: number;
	disabled: boolean;
}>`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50px;
	padding: 4px;
	cursor: pointer;
	width: ${(props) => `${props.size}px`};
	height: ${(props) => `${props.size}px`};
	border: ${(props) => {
		switch (props.shape) {
			case 'line':
				return `1px solid ${colors.lightGray}`;
			case 'transparent':
				return `1px solid transparent`;
			default:
				return `1px solid transparent`;
		}
	}};
	color: ${(props) => {
		switch (props.color) {
			case 'gray':
				return colors.gray;
			case 'black':
				return colors.black;
			default:
				return colors.gray;
		}
	}};
	color: ${(props) => (props.disabled ? 'lightGray' : 'gray')};
	cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
`;
