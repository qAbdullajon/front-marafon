import { Button, Form, Input, Select } from "antd";
const { Option } = Select;
import "./style.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ setUser }: any) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    setLoading(true);
    let data = {};
    try {
      const req = await axios.post("https://marafon-service.onrender.com/api/post", values);
      if (values.tarif === "Premium") {
        data = { ...req.data, price: "997,000 so'm" };
      } else if (values.tarif === "Standart") {
        data = { ...req.data, price: "897,000 so'm" };
      } else if (values.tarif === "Vip") {
        data = { ...req.data, price: "5,997,000 so'm" };
      }

      if (req.status === 200) {
        setUser(data);

        navigate("/tolov");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
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
              <div className="bg-[#525057] w-6 h-6 rounded-full flex justify-center items-center">
                <div className="w-[10px] h-[10px] bg-black rounded-full"></div>
              </div>
              <div className="bg-[#525057] w-6 h-6 rounded-full flex justify-center items-center">
                <div className="w-[10px] h-[10px] bg-black rounded-full"></div>
              </div>
            </div>
            <div className="w-[70%] h-[6px] bg-[#525057] absolute top-[29px] left-16 z-10"></div>
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
          <div className="px-4 py-4">
            <p className="bg-black text-white text-center text-xl font-bold rounded-lg py-2">Rus tili 40 kunda 5.0</p>
            <p className="text-xl pt-2 pb-3 text-center">
              <span className="font-semibold">Start: </span> 15-yanvar
            </p>
            <p className="text-xl font-semibold text-center">
              Dilshoda Qurbonova bilan Rus tilini <br /> samarali o'rganing
            </p>
            <p className="text-sm text-center py-2 font-light">Hozirgi formani to'ldiring va bonusni qo'lga kiriting!</p>
          </div>
          <Form
            onFinish={onFinish}
            layout="vertical"
            style={{
              maxWidth: "400px",
              borderRadius: "0",
              marginInline: "auto",
            }}
          >
            <Form.Item label="Ism-familyangiz" name="name" rules={[{ required: true, message: "Iltimos ismingizni kiriting!" }]}>
              <Input
                size="large"
                style={{
                  boxShadow: "none",
                  border: "2px solid #000",
                  borderRadius: "0",
                }}
              />
            </Form.Item>

            <Form.Item label="Telifon raqamingiz" name="phone" rules={[{ required: true, message: "Iltimos telifon raqamingizni kiritings!" }]}>
              <Input
                size="large"
                style={{
                  border: "2px solid #000",
                  borderRadius: "0",
                  boxShadow: "none",
                }}
              />
            </Form.Item>

            <Form.Item label="Tarif tanlash" name="tarif" rules={[{ required: true, message: "Tarifni tanlang!" }]}>
              <Select
                size="large"
                style={{
                  border: "2px solid #000",
                  boxShadow: "none",
                  borderRadius: "0",
                }}
                dropdownStyle={{
                  borderRadius: "0",
                }}
              >
                <Option value="Standart">Standart - 897,000 so'm</Option>
                <Option value="Premium">Premium - 997,000 so'm</Option>
                <Option value="Vip">Vip - 5,997,000 so'm</Option>
              </Select>
            </Form.Item>

            <Form.Item>
              <Button loading={loading} size="large" type="primary" htmlType="submit" style={{ borderRadius: "6px", width: "100%", backgroundColor: "#A81FD6", border: "none" }}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Home;
