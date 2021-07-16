import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RouteParams } from '../../app.api';
import { RootState } from '../../redux/store';
import { removeSpacesfromWord } from '../../utils/helpers';
import AdminWordCard from './admin-word-card/admin-word-card';
import NewWordCard from './new-word-card/new-word-card';

const AdminWordList: React.FC = () => {
  const { name } = useParams<RouteParams>();
  const categories = useSelector((state: RootState) => state.categories.list);
  const currentCategoryWords = categories.find(category => removeSpacesfromWord(category.name) === name)?.words;

  return (
    <>
      <div className="word-list">
        {currentCategoryWords?.map(wordData => (
          <AdminWordCard
            word={wordData.word}
            image={wordData.image}
            translation={wordData.translation}
            audioSrc={`${wordData.audioSrc}`}
            id={wordData.id}
            key={wordData.id}
          />
        ))}
        <NewWordCard />
      </div>
    </>
  );
};

export default AdminWordList;
