import React from "react";
import { connect } from "react-redux";

import {
  ItemPage,
  ItemImageContainer,
  ItemImage,
  ItemPurchaseContainer,
  ItemBrand,
  ItemSpecifications
} from "./item.styles";

import { selectCategory } from "../../redux/browse/browse.selectors";

import CustomButton from "../../components/custom-button/custom-button.component";

const Item = ({ match, category }) => {
  const item = category.items.find(
    item => Number(match.params.itemId) === item.id
  );

  return (
    <ItemPage>
      <ItemImageContainer>
        <ItemImage src={item.imageUrl} alt="item" />
      </ItemImageContainer>
      <ItemPurchaseContainer>
        <p>Availability: In Stock</p>
        <h2>{item.item}</h2>
        <ItemBrand>{item.company}</ItemBrand>
        <CustomButton btnLink>
          <i className="fas fa-heart"></i> Add To Wishlist
        </CustomButton>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nobis
          quod voluptate, explicabo cum at corrupti libero adipisci impedit
          itaque perferendis asperiores, soluta fugiat dolores.
        </p>
        <p>${Number(item.price) / 100}</p>
        <button>Quantity</button>
        <CustomButton>Add To Cart</CustomButton>
      </ItemPurchaseContainer>
      <ItemSpecifications style={{ backgroundColor: "yellowgreen" }}>
        <div>
          <h3>Description</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus eius possimus praesentium ducimus reprehenderit facilis
            velit placeat eligendi odit dolorem perspiciatis, delectus
            distinctio consequuntur assumenda. Quia maiores facere debitis
            officia?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nulla
            fugit eligendi atque praesentium voluptates accusantium vitae illum
            temporibus molestias ipsum iusto velit repellat nostrum ullam
            exercitationem iste, saepe aut.
          </p>
        </div>
        <div>
          <h3>Additional Information</h3>
          <table>
            <tbody>
              <tr>
                <td>Weight</td>
                <td>7kg</td>
              </tr>
              <tr>
                <td>Dimensions</td>
                <td>90x60x90cm</td>
              </tr>
              <tr>
                <td>Color</td>
                <td>Black</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h3>Reviews</h3>
          <div>
            <div>
              <img src="" alt="user avatar" />
              <div>
                <h4>
                  John Smith <span>4 stars</span>
                </h4>
                <p>12.07.2013</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div>
              <img src="" alt="user avatar" />
              <div>
                <h4>
                  John Smith <span>4 stars</span>
                </h4>
                <p>12.07.2013</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div>
              <img src="" alt="user avatar" />
              <div>
                <h4>
                  John Smith <span>4 stars</span>
                </h4>
                <p>12.07.2013</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
          <div>
            <h3>Add Review</h3>
            <form>
              <div>
                Name*
                <input type="text" />
              </div>
              <div>
                Email*
                <input type="text" />
              </div>
              <div>
                Your Rating*
                <p>5 stars</p>
              </div>
              <div>
                Your Review
                <textarea
                  name="review"
                  id="review"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <CustomButton type="submit">Submit</CustomButton>
            </form>
          </div>
        </div>
      </ItemSpecifications>
    </ItemPage>
  );
};

const mapStateToProps = (state, ownProps) => ({
  category: selectCategory(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(Item);
