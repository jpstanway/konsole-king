import React, { useState } from "react";

import {
  TabGroup,
  Tab,
  TabButton,
  TabInfo,
  TabInfoParagraph,
  TabInfoTable,
  TabInfoTableRow,
  TabInfoTableData,
  TabInfoReviewForm
} from "./tabbed-container.styles";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import UserReview from "../user-review/user-review.component";

const TabbedContainer = ({ item }) => {
  const [activeTab, setActiveTab] = useState("desc");

  return (
    <div>
      <TabGroup>
        <Tab>
          <TabButton
            activeTab={activeTab === "desc"}
            onClick={() => setActiveTab("desc")}
          >
            Description
          </TabButton>
        </Tab>
        <Tab>
          <TabButton
            activeTab={activeTab === "addinfo"}
            onClick={() => setActiveTab("addinfo")}
          >
            Additional Information
          </TabButton>
        </Tab>
        <Tab>
          <TabButton
            activeTab={activeTab === "reviews"}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews ({item.reviews.length})
          </TabButton>
        </Tab>
      </TabGroup>
      <TabInfo activeInfo={activeTab === "desc"}>
        <TabInfoParagraph>{item.description}</TabInfoParagraph>
      </TabInfo>
      <TabInfo activeInfo={activeTab === "addinfo"}>
        <TabInfoTable>
          <tbody>
            <TabInfoTableRow>
              <TabInfoTableData>Weight</TabInfoTableData>
              <TabInfoTableData>{item.weight}</TabInfoTableData>
            </TabInfoTableRow>
            <TabInfoTableRow>
              <TabInfoTableData>Dimensions</TabInfoTableData>
              <TabInfoTableData>{item.dimensions}</TabInfoTableData>
            </TabInfoTableRow>
            <TabInfoTableRow>
              <TabInfoTableData>Color</TabInfoTableData>
              <TabInfoTableData>{item.color}</TabInfoTableData>
            </TabInfoTableRow>
          </tbody>
        </TabInfoTable>
      </TabInfo>
      <TabInfo activeInfo={activeTab === "reviews"}>
        <div>
          {item.reviews.length > 0 ? (
            item.reviews.map(review => <UserReview review={review} />)
          ) : (
            <p style={{ marginBottom: "3rem" }}>
              There are no reviews for this item yet.
            </p>
          )}
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
};

export default TabbedContainer;
