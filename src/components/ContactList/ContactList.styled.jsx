import styled from 'styled-components';

export const List = styled.ul`
  padding-left: 0;
	margin-bottom: 20px;
`;
export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 5px;
`;
export const Button = styled.button`
  padding: 5px;
  background-color: #0a47b7;

  :hover {
    background-color: #00158e;
  }
  :active {
    background-color: #00158e;
  }
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 14px;
  margin-right: 10px;
`;




