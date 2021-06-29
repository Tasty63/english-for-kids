import './card.scss';
import { Category } from '../../app.api';
import {Link, useParams} from 'react-router-dom';
import { RegExpRemoveSpaces } from '../../config';

const CategoryCard = ( {name, image}: Category) => {
  const nameWithoutSpaces = name.replace(RegExpRemoveSpaces,'')

  return (
   <Link to={nameWithoutSpaces} className="card">
     <div className="card__image-wrapper">
       <img src={image} alt={name} className="card__image" />
     </div>
     <footer className="card__footer">
       <span className="card__name">{name}</span>
     </footer>
   </Link>
  )
}

export default CategoryCard;

//             this.cardsContainer.insertAdjacentHTML('beforeend', card);
//         })
//     }

//     renderWordsCards(categoryToRenderIndex) {
//         this.cardsContainer.innerHTML = '';
//         const categoryToRended = cards[categoryToRenderIndex];
//         categoryToRended.forEach((categoryWord, index) => {
//             const card = `<a className="card" href="#">
//                         <div className="card__img-wrapper">
//                             <img src = "${categoryWord.image}"
//                             alt="Actions"
//                                 className="card__img">
//                         </div>
//                         <footer className = "card__footer card__footer_word" >
//                             <span className = "card__name">${categoryWord.word}</span>
//                         </footer>
//                     </a>`;

//             this.cardsContainer.insertAdjacentHTML('beforeend', card);
//         })
//     }