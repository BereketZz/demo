import { FunctionComponent, useCallback } from "react";

const SignIn: FunctionComponent = () => {
  const onRectangle1Click = useCallback(() => {
    // Please sync "sign up" to the project
  }, []);

  return (
    <div className="relative bg-white w-full h-[960px] overflow-hidden text-left text-base text-black font-inter">
      <img
        className="absolute top-[25px] left-[30px] w-[146px] h-[21px] overflow-hidden"
        alt=""
        src="/frame.svg"
      />
      <div className="absolute top-[35px] left-[1302px] w-5 h-5 overflow-hidden" />
      <img
        className="absolute h-[2.5%] w-[2.08%] top-[3.65%] right-[8.54%] bottom-[93.85%] left-[89.38%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/globe.svg"
      />
      <div className="absolute top-[35px] left-[1322px] inline-block w-[66px] h-[25px] sm:text-center">
        en-US
      </div>
      <div className="absolute top-[260px] left-[1016px] w-4 h-4 overflow-hidden" />
      <b className="absolute top-[150px] left-[559px] text-[36px] inline-block w-[121px]">
        Sign In
      </b>
      <div className="absolute top-[255px] left-[552px] bg-whitesmoke w-[336px] h-[49px]" />
      <div className="absolute top-[225px] left-[560px]">Email</div>
      <div className="absolute top-[218px] left-[604px] w-4 h-4 overflow-hidden" />
      <div
        className="absolute top-[344px] left-[552px] bg-royalblue w-[336px] h-[39px] cursor-pointer"
        onClick={onRectangle1Click}
      />
      <div className="absolute top-[354px] left-[696px] text-white">Next</div>
      <div className="absolute top-[404px] left-[642px]">
        Trouble Signing in?
      </div>
      <div className="absolute top-[422.5px] left-[641.5px] box-border w-[137px] h-px border-t-[1px] border-solid border-gray" />
      <img
        className="absolute top-[500px] left-[552px] w-[137px] h-0.5"
        alt=""
        src="/line-2.svg"
      />
      <img
        className="absolute top-[499px] left-[732px] w-[156px] h-0.5"
        alt=""
        src="/line-2.svg"
      />
      <div className="absolute top-[491px] left-[700px]">OR</div>
      <div className="absolute top-[564px] left-[563px] bg-whitesmoke w-[325px] h-[39px]" />
      <div className="absolute top-[572px] left-[651px] text-[20px] text-center">
        Create Account
      </div>
      <div className="absolute top-[896px] left-[576px] text-dimgray text-center">{`Tesla © 2023 Privacy & Legal Contact`}</div>
    </div>
  );
};

export default SignIn;
