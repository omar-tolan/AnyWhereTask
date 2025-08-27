import LoginBtn from "../buttons/LoginBtn";

const Card = () => {
  return (
    <div className=" p-15 bg-blue-400 bg-gradient-to-br from-blue-400 to-blue-950 text-white flex flex-col justify-center rounded-3xl shadow-2xl">
      <div className="flex flex-col justify-start items-center h-full">
        <div className="text-2xl font-bold">Welcome Back!</div>
        <div className="text-lg">Login to start using Coligo</div>
        <LoginBtn className="mt-5"/>
      </div>
    </div>
  );
};

export default Card;
