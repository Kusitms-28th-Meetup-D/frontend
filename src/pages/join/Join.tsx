import styled from 'styled-components';

const Join = () => {
  const regions = ['서울', '경기', '충청'];
  return (
    <JoinLayout>
      <form>
        {' '}
        <Input type="date" id='birth' placeholder="생년월일" />
        <label>
          <Input type="radio" name="gender" /> 남성
        </label>
        <label>
          <Input type="radio" name="gender" /> 여성
        </label>
        {regions.map((each, idx) => (
          <label key={idx}>
            <Input type="radio" name="region" />
            {each}
          </label>
        ))}
        <Input type="text" id='major' placeholder="전공" />
        <Submit type="submit"/>
      </form>
    </JoinLayout>
  );
};

export default Join;

const JoinLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input``;
const Submit = styled.input``;
