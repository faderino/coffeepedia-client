import { useNavigate } from "react-router-dom";
import leftarrow from "../assets/leftarrow.png";

export default function MenuDetailPage() {
  const navigate = useNavigate();
  return (
    <div className="flex h-full w-full flex-col justify-items-stretch">
      <div className="flex h-[525px] w-full flex-col justify-items-stretch bg-[#1F3933] p-4 shadow-lg ">
        <img
          onClick={() => navigate(-1)}
          src={leftarrow}
          alt=""
          className="h-6 w-6"
        />
        <div className="flex w-full flex-row items-center justify-between p-2">
          <div>
            <p className="my-1 text-lg font-medium text-white">Cold Coffee</p>
            <p className="text-3xl text-white">Cappuccino</p>
          </div>
          <div>
            <p className="text-6xl font-semibold text-white">35K</p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1046/1046887.png"
            alt=""
            className="h-72 w-64 p-2"
          />
        </div>
      </div>
      <div className="mt-[-40px] h-[500px] w-full rounded-t-[40px] bg-[#EFEAD8] shadow-lg">
        <div className="flex flex-col items-center">
          <div className="mt-[-46px] flex h-[92px] w-[92px] flex-row items-center justify-center rounded-full bg-white p-3 shadow-lg hover:bg-[#557B83]">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2169/2169842.png"
              alt="Coffeepedia Logo"
              className="h-[50px]"
            />
          </div>
        </div>
        <div className="flex w-full flex-col items-start p-5">
          <div className="w-full">
            <div className="text-xl font-semibold">Size</div>
            <div className="h-24 w-full rounded-[10px] p-2"></div>
          </div>
          <div className="w-full">
            <div className="text-xl font-semibold">Test</div>
            <div className="mt-2 h-full w-full rounded-[10px] border-2 border-black p-2">
              <p className="mt-[-30px] w-[45px] bg-[#EFEAD8] p-2 text-[#898989]">
                Milk
              </p>
              <div className="mt-[-7px] font-medium">
                <p>2% Milk</p>
                <p>Regular Foam</p>
                <p>Steamed Hot</p>
              </div>
            </div>
            <div className="mt-4 h-full w-full rounded-[10px] border-2 border-black p-2">
              <p className="mt-[-25px] w-[70px] bg-[#EFEAD8] p-1 text-[#898989]">
                Espresso
              </p>
              <div className="font-medium">
                <p>2 Shots</p>
                <p>Signature Espresso</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
