import { styled } from 'styled-components';

interface RecruitingProps {
  title: string;
  name: string;
  description: string;
  profile: string;
}

const RecruitingBox = ({
  title,
  name,
  description,
  profile,
}: RecruitingProps) => {
  return (
    <RecruitingLayout>
      <RecruitingTitle>{title}</RecruitingTitle>
      <RecruitingHr />
      <RecruitingProfile src={profile} />
      <RecruitingName>{name}</RecruitingName>
      <RecruitingDescription>"{description}"</RecruitingDescription>
    </RecruitingLayout>
  );
};

export default RecruitingBox;

const RecruitingLayout = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  padding: 2rem;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.gray20};
`;

const RecruitingHr = styled.hr`
  width: 70%;
  border: 0.5px solid ${({ theme }) => theme.colors.gray10};
  margin: 1rem 0;
`;

const RecruitingProfile = styled.img`
  width: 6.1rem;
  height: 6.1rem;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.primary40};
  margin-bottom: 1rem;
`;

const RecruitingTitle = styled.div`
  ${({ theme }) => theme.fonts.subtitleXS};
  color: ${({ theme }) => theme.colors.gray100};
  text-align: center;
`;

const RecruitingName = styled.div`
  ${({ theme }) => theme.fonts.subtitleXXS};
  color: ${({ theme }) => theme.colors.gray100};
  margin-bottom: 0.2rem;
`;

const RecruitingDescription = styled.div`
  ${({ theme }) => theme.fonts.bodyXXS};
  color: ${({ theme }) => theme.colors.gray80};
`;
