import { styled } from 'styled-components';
import FormTitle from './FormTitle';
import ActivityAreaSelectBox from './ActivityAreaSelectBox';

const MyTeamCreateOpen = () => {
  return (
    <NyTeamCraeteOpenContainer>
      <MyTeamCreateOpenTitle>
        <h1>내 팀 오픈하기</h1>
        <p>나와 딱 맞는 팀원들을 찾기 위한 똑똑한 여정을 시작하셨군요!</p>
        <p>멋진 팀을 만날 수 있도록 아래 내용을 입력해주세요.</p>
      </MyTeamCreateOpenTitle>
      <MyTeamCreateForm>
        <QuestionBox>
          <FormTitle title={'모집 정원'} />
          <FormInputBox>
            <p>
              <RecruitmentInput /> 명
            </p>
            <p>10 이하의 숫자만 입력 가능합니다.</p>
          </FormInputBox>
        </QuestionBox>

        <QuestionBox>
          <FormTitle title={'활동 지역'} />
          <ActivityAreaSelectBox />
        </QuestionBox>

        <QuestionBox>
          <FormTitle title={'활동 종료 예정일'} />
          <FormInputBox>
            <ActivityEndInput placeholder={'ex) 2023-12-25'} />
            <p>
              활동 종료 날짜에 팀원 모두에게 추천사 작성 링크가 발송됩니다. 팀
              활동 종료 후 추천사를 작성할 날짜로 입력해주세요.
            </p>
          </FormInputBox>
        </QuestionBox>

        <Hr />

        <FormQuestionBox>
          <FormTitle title={'팀장의 한 마디'} />
          <FormDescription>
            <p>예비 팀원들에게 하고 싶은 한 마디를 적어주세요!</p>
            <p>적어주신 내용은 '모집 중인 팀'메인에 가장 먼저 노출됩니다.</p>
          </FormDescription>
          <FormTextarea
            placeholder={`ex)\n즐거운 팀 문화를 중요시합니다! 믿고 함께해주세요 :)`}
          />
        </FormQuestionBox>

        <FormQuestionBox>
          <FormTitle title={'모집 공고'} />
          <FormDescription>
            본인 소개 및 어필, 만나고 싶은 팀원의 조건, 우대 사항, 팀 운영 계획
            등을 포함하여 모집 공고 글을 적어주세요!
          </FormDescription>
          <FormTextarea1
            placeholder={`ex)\n창업 학회, 마케팅 공모전 수상 경력이 여러 번 있어서 믿고 따라오셔도 될 것 같습니다!\n제가 전력 기획 쪽을 담당할 테니, UX/UI 디자인을 잘하시는 팀원을 만나고 싶어요!\n그리고 아이디어가 많으신 분들 환영합니다!\n+) 팀 모집은 제가 하지만, 팀 구성되고 난 후에는 따로 리더를 뽑을 계획입니다!`}
          />
        </FormQuestionBox>

        <FormQuestionBox>
          <FormTitle title={'카카오톡 오픈채팅방 링크'} />
          <FormDescription>
            최종 합류 후 팀원들과 소통할 오픈채팅방을 생성하여, 링크를 붙여넣기
            해주세요.
          </FormDescription>
          <FormTextarea2
            placeholder={'카카오톡 오픈채팅방 URL을 입력해 주세요.'}
          />
        </FormQuestionBox>
      </MyTeamCreateForm>
    </NyTeamCraeteOpenContainer>
  );
};

export default MyTeamCreateOpen;

const NyTeamCraeteOpenContainer = styled.div``;

const MyTeamCreateOpenTitle = styled.div`
  margin: 3rem 0;
  h1 {
    ${({ theme }) => theme.fonts.heading2_1};
    color: ${({ theme }) => theme.colors.gray90};
  }
  p {
    ${({ theme }) => theme.fonts.bodyXL};
    color: ${({ theme }) => theme.colors.gray90};
  }
`;

const MyTeamCreateForm = styled.form`
  ${({ theme }) => theme.fonts.bodyXL};
  color: ${({ theme }) => theme.colors.gray90};
  background: ${({ theme }) => theme.colors.gray5};
  border: 1px solid ${({ theme }) => theme.colors.gray30};
  border-radius: 10px;
  padding: 3rem 4rem;
  margin-bottom: 8rem;
`;

const QuestionBox = styled.div`
  display: flex;
  margin-bottom: 1.8rem;
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.gray40};
  border-radius: 5px;
  padding: 0.8rem 1rem;
`;

const FormInputBox = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.fonts.bodyM};
  color: ${({ theme }) => theme.colors.gray70};
  gap: 0.8rem;
`;

const RecruitmentInput = styled(Input)`
  width: 7rem;
  margin-right: 0.5rem;
`;

const ActivityEndInput = styled(Input)`
  width: 20rem;
`;

const Hr = styled.hr`
  width: 100%;
  color: ${({ theme }) => theme.colors.gray20};
  margin: 2rem 0;
`;

const FormDescription = styled.div`
  ${({ theme }) => theme.fonts.bodyXL};
  color: ${({ theme }) => theme.colors.gray80};
  margin: 1rem 0;
`;

const FormTextarea = styled.textarea`
  width: 100%;
  height: 15rem;
  border: 1px solid ${({ theme }) => theme.colors.gray40};
  border-radius: 5px;
  padding: 1.5rem 2rem;
  resize: none;
  ${({ theme }) => theme.fonts.bodyXL};
  color: ${({ theme }) => theme.colors.gray50};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray50};
  }
`;

const FormTextarea1 = styled(FormTextarea)`
  height: 25rem;
`;

const FormTextarea2 = styled(FormTextarea)`
  height: 6.5rem;
`;

const FormQuestionBox = styled.div`
  padding: 2rem 0;
`;