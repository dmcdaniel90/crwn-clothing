import './category-group-styles.scss';
import CategoryItem from '../CategoryItem/CategoryItem';

const CategoryGroup = ({ categories }) => {
  return (
    <div className='categories-container'>
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          category={category}
        />
      ))}
    </div>
  );
};

export default CategoryGroup;
