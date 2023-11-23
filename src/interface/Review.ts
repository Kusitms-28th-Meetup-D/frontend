export interface ResponseReviewUsers {
  status: number;
  message: string;
  data: ReviewUsers;
}

export interface ReviewUsers {
  teamId: number;
  userReviewResponseDtoList: userReviewResponse[];
}

export interface userReviewResponse {
  teamMemberId: number;
  teamMemberName: string;
  teamMemberImage: string;
}

export interface ResponseReviewCheck {
  status: number;
  message: string;
  data: ReviewCheck;
}

export interface ReviewCheck {
  isReviewdBefore: boolean;
}

export interface RequestNonUserReview {
  userId: number;
  selectedKeywords: SelectedKeywords[];
  selectedTeamCultures: SelectedTeamCultures;
  selectedWorkMethods: SelectedWorkMethods;
  recommendationComment: string;
}

export interface SelectedTeamCultures {
  feedbackStyle: number;
  teamStyle: number;
  personalityStyle: number;
}

export interface SelectedWorkMethods {
  workStyle: number;
  resultProcess: number;
  workLifeBalance: number;
}
export interface ResponseReviewUsers {
  status: number;
  message: string;
  data: ReviewUsers;
}

export interface ReviewUsers {
  teamId: number;
  userReviewResponseDtoList: userReviewResponse[];
}

export interface userReviewResponse {
  teamMemberId: number;
  teamMemberName: string;
  teamMemberImage: string;
}

export interface ResponseReviewCheck {
  status: number;
  message: string;
  data: ReviewCheck;
}

export interface ReviewCheck {
  isReviewdBefore: boolean;
}

export interface RequestNonUserReview {
  userId: number;
  selectedKeywords: SelectedKeywords[];
  selectedTeamCultures: SelectedTeamCultures;
  selectedWorkMethods: SelectedWorkMethods;
  recommendationComment: string;
}

export interface SelectedKeywords {
  selectKeyword: number;
}

export interface SelectedTeamCultures {
  feedbackStyle: number;
  teamStyle: number;
  personalityStyle: number;
}

export interface SelectedWorkMethods {
  workStyle: number;
  resultProcess: number;
  workLifeBalance: number;
}

export interface ReviewContextType {
  review: {
    userId: number;
    selectedKeywords: any[];
    selectedTeamCultures: {
      feedbackStyle: number;
      teamStyle: number;
      personalityStyle: number;
    };
    selectedWorkMethods: {
      workStyle: number;
      resultProcess: number;
      workLifeBalance: number;
    };
    recommendationComment: string;
  };
  setReview: React.Dispatch<React.SetStateAction<any>>;
}

//Review 진우

export interface RequestReviews {
  uploadReviews: UploadReview[];
}

export interface UploadReview {
  userId: string;
  teamId: string;
  selectedKeywords: SelectedKeywords[];
  selectedTeamCultures: SelectedTeamCultures;
  selectedWorkMethods: SelectedWorkMethods;
  recommendationComment?: string;
}

export interface RecoilReview {
  selectedKeywords: number[];
  arr: number[][];
  recommendationComment?: string;
}

////유저가 해당 팀에 리뷰룰 넘겻는지 여부
export interface RequestIsReviewedOnTeam {
  teamId?: string;
}
export interface IsReviewedOnTeamData {
  isReviewedBefore: boolean;
}
export interface ResponseIsReviewedOnTeam {
  status: number;
  message: string;
  data: IsReviewedOnTeamData;
}
