import './Card.css'

const Card = ({name, img, price}) => {
  return (
      <div class="product">
        <img className='prod-img' src={img} alt="prd-img" />
        <div className="prod-main">
          <p class="product-name">{name}</p>
              <p class="product-price">MRP: &#8377;{price} &#40;inclusive all taxes&#41;</p>
          <div className="btns">
            <button class="my-btn">Buy Now <i className='bi bi-bag-fill'></i></button>
            <button class="my-btn">Add to Card <i className='bi bi-cart-plus-fill'></i></button>
          </div>
        </div>
      </div>
  )
}

export default Card
