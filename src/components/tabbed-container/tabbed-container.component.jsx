import React from "react";

import {
  TabGroup,
  Tab,
  TabButton,
  TabInfo,
  TabInfoParagraph,
  TabInfoTable,
  TabInfoTableRow,
  TabInfoTableData,
  TabInfoTextBubble,
  TabInfoReviewContainer,
  TabInfoReviewDetails,
  TabInfoUserAvatar,
  TabInfoUserName,
  TabInfoReviewDate,
  TabInfoReviewForm
} from "./tabbed-container.styles";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

const TabbedContainer = () => (
  <div>
    <TabGroup>
      <Tab>
        <TabButton>Description</TabButton>
      </Tab>
      <Tab>
        <TabButton>Additional Information</TabButton>
      </Tab>
      <Tab>
        <TabButton activeTab>Reviews (0)</TabButton>
      </Tab>
    </TabGroup>
    <TabInfo>
      <TabInfoParagraph>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni magnam
        nemo rem? Rerum voluptatum enim eius! Totam vitae, ad deserunt placeat
        pariatur magni consequatur recusandae non quasi sint laborum ullam.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
        perferendis tempora, cum voluptate molestiae minima quod nobis,
        obcaecati rem, ipsam culpa accusantium libero. Minima veritatis mollitia
        dolor? Iste, aperiam et.
      </TabInfoParagraph>
      <TabInfoParagraph>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni magnam
        nemo rem? Rerum voluptatum enim eius! Totam vitae, ad deserunt placeat
        pariatur magni consequatur recusandae non quasi sint laborum ullam.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo neque
        tenetur in nulla! Ex a velit explicabo. Reprehenderit, eius veniam
        dolorum cum illo ducimus. Provident maiores quidem cumque quibusdam
        deleniti!
      </TabInfoParagraph>
    </TabInfo>
    <TabInfo>
      <TabInfoTable>
        <tbody>
          <TabInfoTableRow>
            <TabInfoTableData>Weight</TabInfoTableData>
            <TabInfoTableData>7.25kg</TabInfoTableData>
          </TabInfoTableRow>
          <TabInfoTableRow>
            <TabInfoTableData>Dimensions</TabInfoTableData>
            <TabInfoTableData>90x60x90cm</TabInfoTableData>
          </TabInfoTableRow>
          <TabInfoTableRow>
            <TabInfoTableData>Color</TabInfoTableData>
            <TabInfoTableData>Black</TabInfoTableData>
          </TabInfoTableRow>
        </tbody>
      </TabInfoTable>
    </TabInfo>
    <TabInfo activeInfo>
      <div>
        <TabInfoReviewContainer>
          <TabInfoUserAvatar>
            <i class="fas fa-user fa-2x"></i>
          </TabInfoUserAvatar>
          <TabInfoTextBubble>
            <TabInfoReviewDetails>
              <TabInfoUserName>John Smith</TabInfoUserName>
              <TabInfoReviewDate>2020-01-15</TabInfoReviewDate>
            </TabInfoReviewDetails>
            <TabInfoParagraph>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis ab maxime, voluptas veniam magnam ratione repudiandae
              sapiente tempore sed adipisci consequuntur, nam praesentium minus
              error commodi, eligendi ut recusandae reiciendis!
            </TabInfoParagraph>
          </TabInfoTextBubble>
        </TabInfoReviewContainer>
        <TabInfoReviewContainer>
          <TabInfoUserAvatar>
            <i class="fas fa-user fa-2x"></i>
          </TabInfoUserAvatar>
          <TabInfoTextBubble>
            <TabInfoReviewDetails>
              <TabInfoUserName>Jane Doe</TabInfoUserName>
              <TabInfoReviewDate>2020-01-15</TabInfoReviewDate>
            </TabInfoReviewDetails>
            <TabInfoParagraph>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis ab maxime, voluptas veniam magnam ratione repudiandae
              sapiente tempore sed adipisci consequuntur, nam praesentium minus
              error commodi, eligendi ut recusandae reiciendis!
            </TabInfoParagraph>
          </TabInfoTextBubble>
        </TabInfoReviewContainer>
      </div>
      <div>
        <TabInfoReviewForm action="">
          <FormInput
            label="Name"
            type="text"
            name="name"
            onChange={() => console.log("woo")}
          />
          <FormInput
            label="Email"
            type="email"
            name="email"
            onChange={() => console.log("wooo")}
          />
          <FormInput
            label="Your Review"
            name="review"
            onChange={() => console.log("wooo")}
            textarea
          />
          <CustomButton>Submit</CustomButton>
        </TabInfoReviewForm>
      </div>
    </TabInfo>
  </div>
);

export default TabbedContainer;
