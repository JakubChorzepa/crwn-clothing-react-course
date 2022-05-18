import './categories.style.scss'

import CategoryItem from "../category-item/category-item.component";

const Categories = ({categories}) => {
  return (
    <div className="categories-container">
      {
        categories.map(({id, title, imageUrl}) => (
          <CategoryItem 
            key={id} 
            id={id} 
            title={title} 
            imageUrl={imageUrl} 
          />
        ))
      }
    </div>
  )
}

export default Categories;