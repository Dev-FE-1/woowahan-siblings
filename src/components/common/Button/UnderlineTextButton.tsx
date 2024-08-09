import { FC } from 'react';
import { colors } from '@/constants/colors';
import { fontWeight } from '@/constants/font';
import styled from '@emotion/styled';

export interface IUnderlineTextButtonProps {
	label: string;
	onClick: () => void;
}

const UnderlineTextButton: FC<IUnderlineTextButtonProps> = ({ label, onClick }) => {
	return <UTButtonComponent onClick={onClick}>{label}</UTButtonComponent>;
};

const UTButtonComponent = styled.a`
	color: ${colors.gray};
	text-decoration: underline;
	font-weight: ${fontWeight.semiBold};

	:hover {
		cursor: pointer;
	}
`;

export default UnderlineTextButton;
