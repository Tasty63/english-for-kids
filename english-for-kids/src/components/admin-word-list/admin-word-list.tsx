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
  const currentCategory = categories.find(category => removeSpacesfromWord(category.name) === name);

  if (!currentCategory) {
    return (
      <div className="page404">
        <h1 className="page404__text">404</h1>
      </div>
    );
  }

  const categoryWords = currentCategory.words;
  const categoryId = currentCategory._id;

  return (
    <>
      <div className="word-list">
        {categoryWords.map(wordData => (
          <AdminWordCard
            word={wordData.word}
            image={wordData.image}
            translation={wordData.translation}
            audioSrc={`${wordData.audioSrc}`}
            id={wordData.id}
            key={`${wordData.id}${wordData.word}${wordData.image}${wordData.translation}${wordData.audioSrc}`}
          />
        ))}
        <NewWordCard categoryId={categoryId} />
      </div>
    </>
  );
};

export default AdminWordList;
