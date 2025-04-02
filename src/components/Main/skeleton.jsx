import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={200}
    height={340}
    viewBox="0 0 280 465"
    backgroundColor="#d2d1d1"
    foregroundColor="#1c1c1c"
  >
    <rect x="7" y="58" rx="11" ry="11" width="262" height="244" />
    <rect x="67" y="315" rx="11" ry="11" width="136" height="38" />
    <rect x="7" y="418" rx="18" ry="18" width="76" height="28" />
    <rect x="156" y="418" rx="27" ry="27" width="97" height="27" />
    <rect x="69" y="375" rx="0" ry="0" width="127" height="15" />
    <rect x="128" y="384" rx="0" ry="0" width="8" height="1" />
    <circle cx="123" cy="449" r="17" />
  </ContentLoader>
);

export default Skeleton;
