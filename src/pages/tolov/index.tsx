import { Button, GetProp, Upload, UploadFile, UploadProps, message } from "antd";
import "./style.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const Tolov = ({ user }: any) => {
  const [timeLeft, setTimeLeft] = useState(15 * 60);
  const navigate = useNavigate();

  if (!user) {
    navigate("/");
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert(`Siz ${text} ni copy qildingiz`);
      })
      .catch((err) => {
        console.error("Copy qilishda xatolik yuz berdi: ", err);
      });
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [uploading, setUploading] = useState(false);

  const handleUpload = () => {
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append("image", file as FileType);

      formData.append("id", user._id);
    });
    setUploading(true);
    fetch("https://marafon-service.onrender.com/api/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(() => {
        setFileList([]);
        message.success("upload successfully.");
        navigate("/yakunlash");
      })
      .catch(() => {
        message.error("upload failed.");
      })
      .finally(() => {
        setUploading(false);
      });
  };

  const props: UploadProps = {
    onRemove: () => {
      setFileList([]);
    },
    beforeUpload: (file) => {
      setFileList([file]);
      return false;
    },
    fileList,
  };

  return (
    <div className="w-full bg-white flex justify-center bg-gradient-to-r from-[#C58FC0] to-[#7F5698]">
      <div className="py-8">
        <p className="text-white text-2xl pb-3 uppercase font-medium text-center">
          Marafon ishtirokchilari <br /> uchun maxsus taklif
        </p>
        <div className="rounded-xl bg-white w-[450px] overflow-hidden relative">
          <div className="bg-black w-full px-5 pt-2">
            <div className="px-8 py-3 flex justify-between items-center z-20 relative">
              <div className="w-6 h-6 bg-[#C7A2FF] rounded-full flex rotate-45 justify-center items-center">
                <div className="border-b-[3.5px] border-r-[3.5px] border-black w-2 h-3"></div>
              </div>
              <div className="w-6 h-6 bg-[#C7A2FF] rounded-full flex rotate-45 justify-center items-center">
                <div className="border-b-[3.5px] border-r-[3.5px] border-black w-2 h-3"></div>
              </div>
              <div className="bg-[#525057] w-6 h-6 rounded-full flex justify-center items-center">
                <div className="w-[10px] h-[10px] bg-black rounded-full"></div>
              </div>
            </div>
            <div className="w-[70%] h-[6px] bg-[#525057] absolute top-[29px] left-16 z-10">
              <div className="h-full bg-[#C7A2FF] w-[50%]"></div>
            </div>
            <div className="flex justify-between px-3 relative bottom-2">
              <div className="text-[17px] text-center text-white">
                Malumot <br /> kiritish
              </div>
              <div className="text-[17px] text-center text-white">
                Chekni <br /> kiritish
              </div>
              <div className="text-[17px] text-center text-white">Yakunlash</div>
            </div>
          </div>
          <div className="bg-black my-2 max-w-[400px] mx-auto text-white px-4 py-3 rounded-xl">
            <p className="text-xl uppercase font-semibold">Rus tilida gaplashamiz</p>
            <p className="text-sm pt-2 pb-3">Tarif: {user?.tarif}</p>
            <p className="text-3xl">{user?.price}</p>
            <div className="pt-3 flex justify-between items-center">
              <p className="text-xs">
                Tolov qilish havolasi <br /> muddati tugashiga qoldi:
              </p>
              <div className="text-xl text-[#D1434E] bg-white px-4 py-2 rounded-lg font-semibold">
                {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
              </div>
            </div>
          </div>
          <div className="border-[#EAEBEE] rounded-xl border max-w-[400px] mx-auto p-3">
            <p className="opacity-85">1. Quydagi karta raqamlardan biriga to'lovni amalga oshiring:</p>
            <div className="px-4 py-3 border-[#EAEBEE] rounded-xl border mt-2">
              <div className="flex justify-between items-center text-lg">
                <p className="uppercase">plastik karta</p>
                <p>{user?.price}</p>
              </div>
              <div className="h-[1px] bg-[#EAEBEE] my-2"></div>
              <div className="flex justify-between items-center bg-[#FAFAF9]">
                <div>
                  <p className="text-xl">5614 6819 1836 7438</p>
                  <p className="text-[15px] relative bottom-1">Dilshoda Alijonova</p>
                </div>
                <div onClick={() => handleCopy("5614 6819 1836 7438")} className="w-8 h-8 cursor-pointer rounded-full bg-[#EBF2FF] flex justify-center items-center">
                  <i className="fa-regular fa-clipboard text-[#5294EE]"></i>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 border-[#EAEBEE] rounded-xl border mt-3">
              <div className="flex justify-between items-center text-lg">
                <p className="uppercase">plastik karta</p>
                <p>{user?.tarif === "Standart" ? "69" : user?.tarif === "Premium" ? "77" : user?.tarif === "Vip" ? "465" : ""}$</p>
              </div>
              <div className="h-[1px] bg-[#EAEBEE] my-2"></div>
              <div className="flex justify-between items-center bg-[#FAFAF9]">
                <div>
                  <p className="text-xl">4231 2000 0253 3148</p>
                  <p className="text-[15px] relative bottom-1">Dilshoda Alijonova</p>
                </div>
                <div onClick={() => handleCopy("4231 2000 0253 3148")} className="w-8 h-8 cursor-pointer rounded-full bg-[#EBF2FF] flex justify-center items-center">
                  <i className="fa-regular fa-clipboard text-[#5294EE]"></i>
                </div>
              </div>
            </div>
            <p className="opacity-85 pt-2">2. To'lovingiz muvaffaqiyatli amalga oshganini tasdiqlovchi rasmni saqlab oling(screenshot).</p>
            <p className="opacity-85">3. To'lovingizni rasmini yuklang.</p>
          </div>

          <div className="max-w-[400px] w-full mx-auto my-4">
            <Upload {...props} maxCount={1} className="w-full">
              <Button size="large" className="w-full border border-black opacity-60 text-sm hover:opacity-100 hover:border-black hover:text-black" icon={<i className="fa-regular fa-file"></i>}>
                Chek rasmini yuklash uchun bu yerga bosing
              </Button>
            </Upload>

            <Button className="w-full mt-4 hover:" size="large" style={{ backgroundColor: fileList.length !== 0 ? "#A81FD6" : "#eee", border: fileList.length === 0 ? "1px solid #d4d4d4" : "none", color: fileList.length === 1 ? "#fff" : "" }} onClick={handleUpload} disabled={fileList.length === 0} loading={uploading}>
              {uploading ? "Uploading" : "Submit"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tolov;
