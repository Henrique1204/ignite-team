import styled from 'styled-components/native';

export const Container = styled.View`
	width: 100%;
	margin: 32px 0;
`;

export const Title = styled.Text`
	font-size: ${({ theme }) => theme.fontSize.xl};
	font-family: ${({ theme }) => theme.fontFamily.bold};
	text-align: center;

	color: ${({ theme }) => theme.colors.white};
`;

export const Subtitle = styled.Text`
	font-size: ${({ theme }) => theme.fontSize.md};
	font-family: ${({ theme }) => theme.fontFamily.regular};
	text-align: center;

	color: ${({ theme }) => theme.colors.gray_300};
`;
