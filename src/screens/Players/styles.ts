import styled from 'styled-components/native';

export const Container = styled.View`
	padding: 24px;
	margin-top: 16px;

	flex: 1;
	align-items: center;
	justify-content: flex-start;
`;

export const Form = styled.View`
	width: 100%;
	border-radius: 6px;

	background: ${({ theme }) => theme.colors.gray_700};

	flex-direction: row;
	justify-content: center;
	gap: 12px;
`;
