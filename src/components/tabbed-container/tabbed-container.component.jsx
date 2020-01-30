import React, { useState } from "react";

import {
  TabGroup,
  Tab,
  TabButton,
  TabInfo,
  TabInfoParagraph,
  TabInfoTable,
  TabInfoTableRow,
  TabInfoTableData
} from "./tabbed-container.styles";

import UserReview from "../user-review/user-review.component";

const TabbedContainer = ({ item, children }) => {
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
              <TabInfoTableData>{item.addInfo.weight}</TabInfoTableData>
            </TabInfoTableRow>
            <TabInfoTableRow>
              <TabInfoTableData>Dimensions</TabInfoTableData>
              <TabInfoTableData>{item.addInfo.dimensions}</TabInfoTableData>
            </TabInfoTableRow>
            <TabInfoTableRow>
              <TabInfoTableData>Color</TabInfoTableData>
              <TabInfoTableData>{item.addInfo.color}</TabInfoTableData>
            </TabInfoTableRow>
          </tbody>
        </TabInfoTable>
      </TabInfo>
      <TabInfo activeInfo={activeTab === "reviews"}>
        <div>
          {item.reviews.length > 0 ? (
            item.reviews.map(review => (
              <UserReview key={review.name} review={review} />
            ))
          ) : (
            <p style={{ marginBottom: "3rem" }}>
              There are no reviews for this item yet.
            </p>
          )}
        </div>
        <div>{children}</div>
      </TabInfo>
    </div>
  );
};

export default TabbedContainer;
