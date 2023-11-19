import { styled } from 'styled-components';
import { activityAreaOptions } from '../../constants/myteam';

const ActivityAreaSelectBox = () => {
  return (
    <SelectBox>
      <Option value="">지역을 선택해주세요</Option>
      {activityAreaOptions.map((option) => (
        <Option value={option}>{option}</Option>
      ))}
    </SelectBox>
  );
};

export default ActivityAreaSelectBox;

const SelectBox = styled.select`
  border: 1px solid ${({ theme }) => theme.colors.gray40};
  border-radius: 5px;
  padding: 0.2rem 0.7rem;
  cursor: pointer;
  width: 20rem;
`;

const Option = styled.option`
  ${({ theme }) => theme.fonts.bodyM};
  color: ${({ theme }) => theme.colors.gray70};
`;