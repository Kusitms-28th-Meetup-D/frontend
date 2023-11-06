import { styled } from 'styled-components';

interface HeroBoxProps {
  name: string;
  selected?: boolean;
  src: string;
}

const HeroBox = ({ name, src }: HeroBoxProps) => {
  return (
    <HeroBoxLayout>
      <HeroImage src={src} alt="" />
      <HeroName>{name}</HeroName>
      <HeroRadio type="radio" id="1" name="name" />
    </HeroBoxLayout>
  );
};

export default HeroBox;

const HeroBoxLayout = styled.label`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary20};
  border-radius: 24px;
  width: 100%;
  padding: 1.2rem 3rem;
  cursor: pointer;
`;

const HeroImage = styled.img`
  width: 9rem;
  height: 9rem;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
  margin-right: 3rem;
  border: 1px solid ${({ theme }) => theme.colors.primary40};
`;

const HeroName = styled.div`
  ${({ theme }) => theme.fonts.subtitleXXL};
  color: ${({ theme }) => theme.colors.gray90};
`;

const HeroRadio = styled.input`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.gray70};
  margin-left: auto;
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`;
