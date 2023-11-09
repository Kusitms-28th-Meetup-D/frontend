import styled from 'styled-components';
import { REGIONS } from '../../constants/Join';

const SelectInput = ({ onChangeFunc }: { onChangeFunc: any }) => {
  return (
    <SelectContainer>
      <Label>활동 지역</Label>
      <Select onChange={onChangeFunc} name="region">
        {REGIONS.map((each, idx) => (
          <Option key={idx} value={each}>
            {each}
          </Option>
        ))}
      </Select>
    </SelectContainer>
  );
};
const SelectContainer = styled.div`
  width: 100%;
  height: 6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.gray20};
  background-color: white;

  padding: 1.4rem 2.4rem;
`;

const Label = styled.label`
  width: 12rem;
  color: ${(props) => props.theme.colors.gray80};
  ${(props) => props.theme.fonts.subtitleL};
`;
const Select = styled.select`
  width: 100%;
  /* flex: 1; */

  color: ${(props) => props.theme.colors.gray80};
  ${(props) => props.theme.fonts.bodyL};

  border: none;
`;
const Option = styled.option`
  color: ${(props) => props.theme.colors.gray80};
  ${(props) => props.theme.fonts.bodyL};
`;
export default SelectInput;
