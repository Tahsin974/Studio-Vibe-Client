import { Helmet } from "react-helmet";

const Title = ({ children }) => {
  return (
    <Helmet>
      <title>Studio Vibe | {children}</title>
    </Helmet>
  );
};

export default Title;
