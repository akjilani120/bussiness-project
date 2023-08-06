import BannerCard from "@/component/BannerCard/BannerCard";
import ZoomInSliderBanner from "@/component/ZoomInSlider/ZoomInSlider";

export default function Home() {
  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];
  return (
    <div>
      <div className="lg:flex px-5">
        <div className="lg:w-3/4">
          <ZoomInSliderBanner
            images={images}
            style={{ height: "420px" }}
            isIndicators={true}
          />
        </div>
        <div className="w lg:w-1/4">
          <BannerCard />
        </div>
      </div>
    </div>
  );
}
