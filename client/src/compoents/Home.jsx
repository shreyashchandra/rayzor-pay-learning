/* eslint-disable no-unused-vars */
import Card from "./Card";
import axios from "axios";

const products = [
  {
    id: 1,
    title: "iPhone 15",
    amount: 999,
    img: "https://media.wired.com/photos/6508e654501236bad4a1bd84/master/pass/iPhone-15-Pro-Review-Featured-Gear.jpg",
  },
  {
    id: 2,
    title: "MacBook Pro",
    amount: 1999,
    img: "https://techprincess.it/wp-content/uploads/2022/01/aooke-intel-m1-1024x576.jpg",
  },
  {
    id: 3,
    title: "iPad Air",
    amount: 599,
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-select-wifi-blue-202203?wid=940&hei=1112&fmt=png-alpha&.v=1645065732688",
  },
  {
    id: 4,
    title: "Apple Watch Series 7",
    amount: 399,
    img: "https://www.apple.com/newsroom/images/product/watch/standard/Apple_delivers-apple-watch-series-6_09152020.jpg.news_app_ed.jpg",
  },
];

export default function Home() {
  const checkOutHandler = async (amount) => {
    const {
      data: { key },
    } = await axios.get(
      "https://rayzor-pay-learning.onrender.com/api/v1/payment/key"
    );

    const { data } = await axios.post(
      "https://rayzor-pay-learning.onrender.com/api/v1/payment/checkout",
      {
        amount,
      }
    );

    const options = {
      key: key,
      amount: data.amount,
      currency: "INR",
      name: "Shreyash",
      description: "Rayzor Pay Learning",
      image: "https://avatars.githubusercontent.com/u/78721024?v=4",
      order_id: data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url:
        "https://rayzor-pay-learning.onrender.com/api/v1/payment/verify",
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();

    console.log(data);
  };

  return (
    <div className="min-h-screen ">
      <header className=" shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold ">Our Products</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <Card
                  key={product.id}
                  amount={product.amount}
                  img={product.img}
                  title={product.title}
                  checkOutFun={() => checkOutHandler(product.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
