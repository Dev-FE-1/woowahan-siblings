import { ChangeEvent, forwardRef, useCallback, useEffect } from 'react';
import styled from '@emotion/styled';
import { colors } from '@/constants/colors';
import { ChevronDown } from 'lucide-react';

type TType = 'cover' | 'special' | 'vacation' | 'early';
type TWorkingTimes = 'open' | 'middle' | 'close';

interface ISelectProps {
	id: string;
	openDropdownId: string | null;
	setOpenDropdownId: (id: string | null) => void;
	defaultLabel: string;
	options: { value: string; label: string; color?: string }[];
	selectedOption: string | TType | TWorkingTimes;
	onSelect: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	disabled?: boolean;
	className?: string;
	name?: string;
}

const Select = forwardRef<HTMLButtonElement, ISelectProps>(
	(
		{
			id,
			openDropdownId,
			selectedOption,
			defaultLabel,
			options,
			setOpenDropdownId,
			onSelect,
			className,
			name,
		},
		ref,
	) => {
		const isOpen = openDropdownId === id;

		const handleToggle = useCallback(() => {
			if (setOpenDropdownId && typeof id !== 'undefined') {
				setOpenDropdownId(isOpen ? null : id);
			}
		}, [id, isOpen, setOpenDropdownId]);

		const handleSelect = useCallback(
			(value: string) => {
				if (setOpenDropdownId) {
					const pseudoEvent = {
						target: {
							name,
							value,
						},
					} as ChangeEvent<HTMLInputElement>;
					onSelect(pseudoEvent);
					setOpenDropdownId(null);
				}
			},
			[onSelect, setOpenDropdownId, name],
		);

		const selectedOptionData = options.find((opt) => opt.value === selectedOption);

		useEffect(() => {
			if (isOpen) {
				if (ref && typeof ref !== 'function' && ref.current) {
					ref.current.focus();
				}
			}
		}, [isOpen, ref]);

		return (
			<DropdownContainer className={className}>
				<DropdownButton ref={ref} onClick={handleToggle} className={className} name={name}>
					<div>
						{selectedOptionData?.color && (
							<ColorCircle color={selectedOptionData.color} />
						)}
						{selectedOptionData?.label ? (
							<span>{selectedOptionData.label}</span>
						) : (
							<span>{defaultLabel}</span>
						)}
					</div>
					<ChevronDown />
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

export default Select;

Select.displayName = 'Select';

const DropdownContainer = styled.div`
	position: relative;
	width: 100%;
`;

const DropdownButton = styled.button<{ disabled?: boolean }>`
	padding: 8px;
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

	&:focus {
		border: 1px solid ${colors.primaryYellow};
	}

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
	padding: 12px;
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
