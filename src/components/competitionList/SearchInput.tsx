import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { searchTextAtom } from '../../recoil/competition';

const SearchInput = () => {
  const [searchText, setSearchText] = useRecoilState(searchTextAtom);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <SearchBoxLayout>
      <SearchImage src="/assets/images/common/search.svg" alt="search" />
      <SearchInputBox
        value={searchText}
        onChange={handleChange}
        placeholder="원하는 공모전을 검색해보세요."
      />
    </SearchBoxLayout>
  );
};

export default SearchInput;

const SearchBoxLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 70%;
`;

const SearchImage = styled.img`
  width: 1.168rem;
  height: 1.168rem;
  position: absolute;
  left: 5rem;
`;

const SearchInputBox = styled.input`
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 5rem;
  border: none;
  outline: none;
  border-radius: 0.8rem;
  padding: 0 9rem;
  ${({ theme }) => theme.fonts.bodyM};
  color: ${({ theme }) => theme.colors.gray90};
`;
