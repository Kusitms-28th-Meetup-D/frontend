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
