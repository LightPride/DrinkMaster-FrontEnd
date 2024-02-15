import { Oval } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Oval
      height={80}
      width={80}
      color="#4070CD"
      wrapperStyle={{}}
      wrapperClass="loader"
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#434D67"
      strokeWidth={8}
      strokeWidthSecondary={6}
    />
  );
};

export default Loader;
