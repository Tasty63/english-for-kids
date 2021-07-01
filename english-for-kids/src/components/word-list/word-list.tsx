import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RouteParams} from '../../app.api';
import { RootState } from '../../redux/store';
import { removeSpacesfromWord } from '../../utils/helpers';
import WordCard from '../card/word-card';

const WordList = () => {
  const { name } = useParams<RouteParams>();
  const categories = useSelector((state: RootState) => state.categories.list);
  const category = categories.find(category => removeSpacesfromWord(category.name) === name);
  
  return (
    <div className="card-list">
        {category?.words.map((wordData, index) => {
          return <WordCard {...wordData} key={index}></WordCard>
        })}
    </div>
  )
}

export default WordList;