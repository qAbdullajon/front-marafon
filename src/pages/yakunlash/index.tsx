import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Yakunlash = ({ user }: any) => {
  const navidate = useNavigate();
  if (!user) {
    navidate("/");
  }

  return (
    <div className="h-screen flex justify-center px-3 py-4 bg-black">
      <div className="max-w-[430px] text-white">
        <p className="text-center text-5xl">✅</p>
        <p className="text-center text-[#7F6B3C] text-3xl font-semibold pt-5">
          Xaridingiz Muvaffaqiyatli <br /> Yakunlandi
        </p>
        <p className="text-lg pt-3">Rus tili 40 kunda 5.0 kursi 20-yanvar kuni boshlanadi.</p>
        <p className="text-lg py-2">Siz bilan operatorlarimiz 48 soat ichida bog'lanishadi.</p>
        <p className="text-lg">Kursda ko'rishguncha.</p>
        <p className="text-lg py-2">Hurmat ila,</p>
        <p className="text-lg pb-3">Dilshoda Qurbonova</p>
        <div className="border-2 border-white py-2 px-3">
          <p className="text-3xl text-center text-[#7F6B3C]">Chek Tasdiqlandi</p>
          <div className="h-[1px] bg-white my-2"></div>
          <p className="text-lg">Kurs: Rus tili 40 kunda 5.0</p>
          <p className="text-lg">Ism: {user?.name}</p>
          <p className="text-lg">Telifon: {user?.phone}</p>
          <p className="text-lg">Tarif: {user?.tarif}</p>
          <Button onClick={() => (window.location.href = "https://t.me/+vPzW4cSYS2JlMWY6")} className="mt-2 yakun bg-transparent border border-white rounded-none w-full" size="large" type="primary">
            Bonus kanal
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Yakunlash;
