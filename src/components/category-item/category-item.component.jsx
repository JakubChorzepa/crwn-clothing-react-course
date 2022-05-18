import './category-item.style.scss'

const CategoryItem = ({id, title, imageUrl}) => {
  return (
    <div className="category-container" key={id}>
      <div className='background-image' style={{
        backgroundImage: `url(${imageUrl})`
      }}>
      </div>
      <div className="category-body-container">
        <h1>{title}</h1>
        <p>Shop Now</p>
      </div>
    </div>
  )
};

export default CategoryItem;