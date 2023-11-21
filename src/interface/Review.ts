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

export interface RequestReviews {
  uploadReviews: UploadReview[];
}

export interface UploadReview {
  userId: number;
  teamId: number;
  selectedKeywords: SelectedKeywords[];
  selectedTeamCultures: SelectedTeamCultures;
  selectedWorkMethods: SelectedWorkMethods;
  recommendationComment: string;
}

export interface RequestNonUserReview {
  userId: number;
  selectedKeywords: SelectedKeywords[];
  selectedTeamCultures: SelectedTeamCultures;
  selectedWorkMethods: SelectedWorkMethods;
  recommendationComment: string;
}

export interface SelectedKeywords {
  selecteKeyword: number;
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

export interface RequestReviews {
  uploadReviews: UploadReview[];
}

export interface UploadReview {
  userId: number;
  teamId: number;
  selectedKeywords: SelectedKeywords[];
  selectedTeamCultures: SelectedTeamCultures;
  selectedWorkMethods: SelectedWorkMethods;
  recommendationComment: string;
}

export interface RequestNonUserReview {
  userId: number;
  selectedKeywords: SelectedKeywords[];
  selectedTeamCultures: SelectedTeamCultures;
  selectedWorkMethods: SelectedWorkMethods;
  recommendationComment: string;
}

export interface SelectedKeywords {
  selecteKeyword: number;
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
    userId: string | undefined;
    selectedKeywords: any[];
    selectedTeamCulture: {
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
