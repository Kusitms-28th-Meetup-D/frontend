import styled from 'styled-components';
import { REGIONS } from '../../constants/Join';

const SelectInput = () => {
  return (
    <SelectContainer>
      <Label>활동 지역</Label>
      <Select>
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
`;

const Label = styled.label`
  width: 10rem;
  color: ${(props) => props.theme.colors.gray80};
  ${(props) => props.theme.fonts.subtitleL};

  margin: 0 2.4rem;
`;
const Select = styled.select`
  width: 100%;
  /* flex: 1; */

  color: ${(props) => props.theme.colors.gray80};
  ${(props) => props.theme.fonts.bodyL};
`;
const Option = styled.option`
  color: ${(props) => props.theme.colors.gray80};
  ${(props) => props.theme.fonts.bodyL};
`;
export default SelectInput;
