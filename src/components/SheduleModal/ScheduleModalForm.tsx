import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { colors } from '@/constants/colors';
import Input from '@/components/common/Input';
import Dropdown from '@/components/common/Dropdown';
import { workTimeOption } from '@/constants/options';
import { fontSize, fontWeight } from '@/constants/font';

interface IModalFormProps {
	workDate: string;
	wage: string;
	workTime: string;
	breakTime: string;
	memo: string;
	isFieldDisabled: (field: string) => boolean;
	setWorkDate: (value: string) => void;
	setWage: (value: string) => void;
	setWorkTime: (value: string) => void;
	setBreakTime: (value: string) => void;
	setMemo: (value: string) => void;
	content: 'add' | 'edit' | 'view' | null;
	errors: { [key: string]: boolean };
}

const ModalFormComponent: React.FC<IModalFormProps> = ({
	workDate,
	wage,
	workTime,
	breakTime,
	memo,
	isFieldDisabled,
	setWorkDate,
	setWage,
	setWorkTime,
	setBreakTime,
	setMemo,
	content,
	errors,
}) => {
	const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
	const handleInputChange = useCallback(
		(setter: (value: string) => void) =>
			(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
				setter(e.target.value);
			},
		[],
	);

	useEffect(() => {
		if (workTime === 'middle') {
			setWorkTime('미들 (12:00~17:00)');
		} else if (workTime === 'open') {
			setWorkTime('오픈 (07:00~12:00)');
		} else if (workTime === 'close') {
			setWorkTime('마감 (17:00~22:00)');
		}
	}, [workTime]);

	return (
		<AddScheduleForm>
			<FormGroup>
				<label>근무일</label>
				<StyledInput
					value={workDate}
					disabled={true}
					onChange={handleInputChange(setWorkDate)}
					className={`workDate ${errors.workDate ? 'error' : ''}`}
				/>
			</FormGroup>
			<FormGroup>
				<label>시급</label>
				<StyledInput
					type="text"
					value={wage}
					disabled={true}
					onChange={handleInputChange(setWage)}
					className={`wage ${errors.wage ? 'error' : ''}`}
				/>
			</FormGroup>
			<FormGroup>
				<label>근무시간</label>
				<Dropdown
					id="workTime"
					openDropdownId={openDropdownId}
					setOpenDropdownId={setOpenDropdownId}
					options={workTimeOption}
					selectedOption={workTime}
					onSelect={setWorkTime}
					disabled={isFieldDisabled('workTime') || content === 'view'}
					className={`workTime ${errors.workTime ? 'error' : ''}`}
					defaultLabel="선택"
				/>
			</FormGroup>
			<FormGroup>
				<label>휴게시간</label>
				<StyledInput
					type="text"
					value={breakTime}
					disabled={true}
					onChange={handleInputChange(setBreakTime)}
					className={`breakTime ${errors.breakTime ? 'error' : ''}`}
				/>
			</FormGroup>
			<FormGroup>
				<label>메모</label>
				<StyledTextarea
					value={memo}
					onChange={handleInputChange(setMemo)}
					disabled={isFieldDisabled('memo') || content === 'view'}
					className={`memo ${errors.memo ? 'error' : ''}`}
				/>
			</FormGroup>
		</AddScheduleForm>
	);
};

export default ModalFormComponent;

const AddScheduleForm = styled.div`
	margin-bottom: 20px;
	@media (min-width: 400px) {
		margin: 36px 0;
	}
`;

const FormGroup = styled.div`
	margin-bottom: 10px;
	width: 100%;

	label {
		display: block;
		margin-bottom: 5px;
		font-size: ${fontSize.sm};
		font-weight: ${fontWeight.light};
		color: ${colors.gray};
	}

	input {
		padding: 0 12px;
		border: 1px solid ${colors.lightGray};
		border-radius: 8px;
		height: 50px;
	}

	textarea {
		padding: 12px;
		border: 1px solid ${colors.lightGray};
		border-radius: 8px;
	}

	@media (min-width: 400px) {
		margin-bottom: 20px;
	}
`;

const StyledTextarea = styled.textarea`
	width: 100%;
	display: block;
	border: ${(props) => (props.disabled ? 'none' : `1px solid ${colors.lightGray}`)};
	border-radius: 8px;
	resize: none;
	height: 86px;
	background-color: ${(props) => (props.disabled ? colors.lightestGray : 'inherit')};
	&:disabled {
		border: none;
		background-color: ${colors.lightestGray};
	}
	&.error {
		border: 1px solid ${colors.red};
	}

	&:focus {
		outline: 0;
		border: 1px solid ${colors.primaryYellow};
	}
`;

const StyledInput = styled(Input)`
	border: ${(props) => (props.disabled ? 'none' : `1px solid ${colors.lightGray}`)};
	border-radius: 8px;
	background-color: ${(props) => (props.disabled ? colors.lightestGray : 'inherit')};
	&:disabled {
		border: none;
		background-color: ${colors.lightestGray};
	}
	&.error {
		border: 1px solid ${colors.red};
	}
`;
