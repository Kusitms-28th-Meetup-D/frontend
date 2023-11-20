import { useMutation, useQueryClient } from 'react-query';
import { RequestModifyProfile } from '../../interface/Modify';
import patchModifyProfile from '../../apis/modify/patchModifyProfile';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { loginInfoState } from '../../recoil/atom';

interface UseModifyProfile {
  mutate: () => void;
}

export function useModifyProfile(
  requestData: RequestModifyProfile,
  userId: string,
): UseModifyProfile {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const setLoginInfo = useSetRecoilState(loginInfoState);

  const { mutate } = useMutation(() => patchModifyProfile(requestData), {
    onSuccess: () => {
      queryClient.invalidateQueries('modifyProfile');
      navigate(`/profile/${userId}`); //미쳤다 이 코드
      setLoginInfo((curr) => ({
        ...curr,
        data: {
          ...curr.data!,
          name: requestData.username,
        },
      }));
      // setLoginInfo((curr) => ({ ...curr, data: {...curr.data,name:requestData.username}} }));
    },
  });
  return { mutate };
}
