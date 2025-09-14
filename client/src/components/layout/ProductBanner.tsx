import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface ProductBannerProps {
  images: string[];
  height?: string | number; // allow passing height if needed
}

export const ProductBanner: React.FC<ProductBannerProps> = ({
  images,
  height = "700px",
}) => {
  return (
    <div style={{ width: "100%", height }}>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Banner ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover", // ✅ ensures same size, crops large images
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
