import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

export const Title = styled.Text`
	font-size: ${({ theme }) => theme.fontSize.xl};
	color: ${({ theme }) => theme.colors.white};
`;
