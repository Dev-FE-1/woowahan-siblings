import { forwardRef, useCallback } from 'react';
import styled from '@emotion/styled';
import { colors } from '@/constants/colors';
import { ChevronDown } from 'lucide-react';
interface IDropdownProps {
	id: string;
	openDropdownId: string | null;
	setOpenDropdownId: (id: string | null) => void;
	defaultLabel: string;
	options: { value: string; label: string; color?: string }[];
	selectedOption: string;
	onSelect: (option: string) => void;
	disabled?: boolean;
	className?: string;
	name?: string;
}

const Dropdown = forwardRef<HTMLButtonElement, IDropdownProps>(
	(
		{
			id,
			openDropdownId,
			selectedOption,
			defaultLabel,
			options,
			setOpenDropdownId,
			onSelect,
			disabled,
			className,
			name,
		},
		ref,
	) => {
		const isOpen = openDropdownId === id;
		const handleToggle = useCallback(() => {
			if (!disabled && setOpenDropdownId && typeof id !== 'undefined') {
				setOpenDropdownId(isOpen ? null : id);
			}
		}, [disabled, id, isOpen, setOpenDropdownId]);

		const handleSelect = useCallback(
			(option: string) => {
				if (!disabled && setOpenDropdownId) {
					onSelect(option);
					setOpenDropdownId(null);
				}
			},
			[disabled, onSelect, setOpenDropdownId],
		);

		const selectedOptionData = options.find((opt) => opt.value === selectedOption);

		return (
			<DropdownContainer className={className}>
				<DropdownButton
					ref={ref}
					onClick={handleToggle}
					disabled={disabled}
					className={className}
					name={name}
				>
					<div>
						{selectedOptionData?.color && (
							<ColorCircle color={selectedOptionData.color} />
						)}
						{selectedOptionData?.label || <span>{defaultLabel}</span>}
					</div>
					<ChevronDown style={{ marginLeft: 'auto', strokeWidth: 1.2 }} />
				</DropdownButton>
				{isOpen && (
					<DropdownMenu>
						{options.map((option) => (
							<DropdownItem
								key={option.value}
								onClick={() => handleSelect(option.value)}
							>
								{option.color && <ColorCircle color={option.color} />}
								{option.label}
							</DropdownItem>
						))}
					</DropdownMenu>
				)}
			</DropdownContainer>
		);
	},
);

export default Dropdown;

Dropdown.displayName = 'Dropdown';

const DropdownContainer = styled.div`
	position: relative;
	width: 100%;
`;

const DropdownButton = styled.button<{ disabled?: boolean }>`
	padding: 0px 12px;
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border: ${(props) => (props.disabled ? 'none' : `1px solid ${colors.lightGray}`)};
	border-radius: 8px;
	background-color: ${(props) => (props.disabled ? colors.lightestGray : colors.white)};
	color: ${colors.black};
	cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
	text-align: left;
	appearance: none;
	-webkit-appearance: none;
	-moz-appearance: none;

	&.error {
		border: 1px solid ${colors.red};
	}
`;

const DropdownMenu = styled.ul`
	z-index: 99;
	position: absolute;
	top: 100%;
	left: 0;
	width: 100%;
	border: 1px solid ${colors.lightGray};
	border-radius: 8px;
	background-color: ${colors.white};
	list-style: none;
	margin-top: 4px;
`;

const DropdownItem = styled.li`
	padding: 10px 12px;
	margin: 4px;
	border-radius: 8px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	&:hover {
		background-color: ${colors.lightestGray};
	}
`;

const ColorCircle = styled.span<{ color: string }>`
	display: inline-block;
	width: 14px;
	height: 14px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
	margin-right: 8px;
`;
