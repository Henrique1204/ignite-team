import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

export const Message = styled.Text`
	font-size: ${({ theme }) => theme.fontSize.sm};
	font-family: ${({ theme }) => theme.fontFamily.regular};
	text-align: center;
	color: ${({ theme }) => theme.colors.gray_300};
`;
