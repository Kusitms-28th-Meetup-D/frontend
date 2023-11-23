import { useRecoilValue } from 'recoil';
import BeforeNextButton from '../../components/common/BeforeNextButton';
import ReviewHero from '../../components/review/ReviewHero';
import ReviewReason from '../../components/review/ReviewReason';
import {
  reviewCommentState,
  reviewMemberIndexState,
  reviewState,
} from '../../recoil/atom';
import {
  RequestReviews,
  SelectedKeywords,
  SelectedTeamCultures,
  SelectedWorkMethods,
} from '../../interface/Review';
import { useNavigate, useParams } from 'react-router-dom';
import { useReviewUsers } from '../../hooks/review/useReviewUsers';
import { useReviewsCreate } from '../../hooks/review/useReviewsCreate';
import { useState } from 'react';

const MultipleChoice = () => {
  const { teamId } = useParams();
  const { reviewUsers } = useReviewUsers(Number(teamId));

  const reviewMemberIndex = useRecoilValue(reviewMemberIndexState);
  const reviewRecoilData = useRecoilValue(reviewState);
  const reviewComment = useRecoilValue(reviewCommentState);

  const [requestDTO, setRequestDTO] = useState<RequestReviews>();

  const handleUseCreateReview = useReviewsCreate(requestDTO as RequestReviews);

  const navigate = useNavigate();

  // console.log('제출전 가공후 데이터', requestDTO);
  const handleSubmit = () => {
    const newArr = reviewRecoilData.slice(
      0,
      reviewUsers?.data.userReviewResponseDtoList.length,
    );
    const newObj = { ...reviewRecoilData[reviewMemberIndex] };

    newObj.recommendationComment = reviewComment;

    newArr[reviewMemberIndex] = newObj;
    // console.log('제출전 가공전 데이터', newArr);

    const myRequestDTO: RequestReviews = {
      uploadReviews: newArr.map((recoilReview, index) => {
        const selectedKeywords: SelectedKeywords[] =
          recoilReview.selectedKeywords.map((keyword) => ({
            selectKeyword: keyword,
          }));

        const selectedTeamCultures: SelectedTeamCultures = {
          feedbackStyle: recoilReview.arr[0][0],
          teamStyle: recoilReview.arr[0][1],
          personalityStyle: recoilReview.arr[0][2],
        };
        const selectedWorkMethods: SelectedWorkMethods = {
          workStyle: recoilReview.arr[1][0],
          resultProcess: recoilReview.arr[1][1],
          workLifeBalance: recoilReview.arr[1][2],
        };

        return {
          userId: reviewUsers?.data.userReviewResponseDtoList[index]
            .teamMemberId as unknown as string,
          teamId: teamId as string,
          selectedKeywords,
          selectedTeamCultures,
          selectedWorkMethods,
          recommendationComment: recoilReview.recommendationComment,
        };
      }),
    };

    setRequestDTO(myRequestDTO);

    setTimeout(() => {
      handleUseCreateReview.mutate();
      navigate(`/myteam/${teamId}/end`);
    }, 500);
  };

  return (
    <>
      <ReviewHero />
      <ReviewReason />
      <BeforeNextButton
        next="제출하기"
        route="/"
        isNextDisabled={false}
        onClick={handleSubmit}
      />
    </>
  );
};

export default MultipleChoice;
