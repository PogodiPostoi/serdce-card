import React from "react";
import ContentLoader from "react-content-loader";

const RenderCard = ({ location }) => {
  // let windowWidth = window.innerWidth;
  const renderList = () => {
    switch (true) {
      case location === "demo":
        return (
          <ContentLoader
            speed={2}
            width={360}
            height={500}
            viewBox="0 0 360 500"
            backgroundColor="#f3f3f3"
            foregroundColor="#e6e6e6"
          >
            <rect x="0" y="0" rx="15" ry="15" width="360" height="460" />
            <rect x="80" y="475" rx="15" ry="15" width="200" height="20" />
          </ContentLoader>
        );

      case location === "list":
        return (
          <ContentLoader
            speed={2}
            width={330}
            height={390}
            viewBox="0 0 330 390"
            backgroundColor="#f3f3f3"
            foregroundColor="#e6e6e6"
          >
            <rect x="30" y="340" rx="15" ry="15" width="100" height="40" />
            <rect x="15" y="0" rx="15" ry="15" width="300" height="300" />
            <rect x="50" y="310" rx="15" ry="15" width="230" height="20" />
            <rect x="190" y="340" rx="15" ry="15" width="100" height="40" />
          </ContentLoader>
        );

      default:
    }
  };

  return <>{renderList()}</>;
};

export default RenderCard;
