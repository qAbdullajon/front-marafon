import axios from "axios";

const Users = () => {
  const dowBtn = async () => {
    try {
      const response = await axios({
        url: "http://localhost:8080/api/get-post", // API URL
        method: "GET",
        responseType: "blob", // Faylni yuklash uchun blob formati
      });

      // Faylni yuklab olish uchun link yaratish
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "users.xlsx"); // Yuklanadigan fayl nomi
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error while downloading file:", error);
    }
  };

  return (
    <div>
      <button onClick={dowBtn} className="bg-red-900">
        Download
      </button>
    </div>
  );
};

export default Users;
