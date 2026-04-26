"use client";
import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import GoogleReviewCard from "@/public/GoogleReviewCard";

const googleReviews = [
  {
    name: "Khalid Al Mansoori",
    time: "2 weeks ago",
    star: 5,
    review:
      "They moved our villa in Al Barsha and nothing broke. The team was fast, respectful, and the price matched what they quoted.",
    image: "/ava/32.jpg",
  },
  {
    name: "Priya Nambiar",
    time: "1 month ago",
    star: 5,
    review:
      "Called them for a last-minute apartment move in Sharjah and they got it done the same day. Honestly didn't think it would be that smooth.",
    image: "/ava/44.jpg",
  },
  {
    name: "Omar Farouq",
    time: "3 weeks ago",
    star: 5,
    review:
      "Used them twice — once for a home move and once for the office. Both times: no hidden charges, no issues, just handled it right.",
    image: "/ava/86.jpg",
  },
  {
    name: "Sarah Mitchell",
    time: "5 weeks ago",
    star: 5,
    review:
      "The packing crew packed everything carefully and labeled each box by room. Made unpacking at the new place so much faster.",
    image: "/ava/68.jpg",
  },
  {
    name: "Tariq Hussain",
    time: "2 months ago",
    star: 5,
    review:
      "Moved from Dubai to Ras Al Khaimah and was nervous about the distance, but they got everything there safely. No damage at all.",
    image: "/ava/22.jpg",
  },
  {
    name: "Fatima Al Hashimi",
    time: "1 month ago",
    star: 5,
    review:
      "They moved our whole office over a weekend and we were running Monday morning. The crew knew exactly what they were doing.",
    image: "/ava/90.jpg",
  },
  {
    name: "Ravi Menon",
    time: "3 weeks ago",
    star: 5,
    review:
      "Clean process from start to finish. They quoted clearly, showed up when they said, and I paid when everything was in the apartment.",
    image: "/ava/54.jpg",
  },
  {
    name: "Aisha Qasim",
    time: "6 weeks ago",
    star: 5,
    review:
      "Had some heavy stuff including a big safe and they moved it without any problem. Won't use anyone else for moving in Abu Dhabi.",
    image: "/ava/29.jpg",
  },
];
export function ReviewSection({
  reviews,
}: {
  reviews?: {
    name: string;
    time: string;
    star: number;
    review: string;
    image: string;
  }[];
}) {
  return (
    <section className="mt-20 max-w-6xl md:px-0 px-3  mx-auto">
      <div className="flex items-center justify-center text-center flex-col">
        <h2 className="font-bold whitespace-normal md:text-5xl text-3xl wrap-break-word">
          What Our Customers Says
        </h2>

        <div className="flex md:flex-row flex-col gap-3 mt-5 items-center justify-center">
          <div className="flex gap-x-1 ">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-yellow-400" />
              ))}
          </div>
          <p className="font-medium">5 Starts Google Reviews</p>
        </div>
      </div>

      <Carousel
        plugins={[
          Autoplay({
            delay: 2500,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="max-w-5xl mx-auto mt-10"
      >
        <CarouselContent>
          {reviews
            ? reviews.map((review, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 select-none"
                >
                  <GoogleReviewCard review={{ ...review }} />
                </CarouselItem>
              ))
            : googleReviews.map((review, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 select-none"
                >
                  <GoogleReviewCard review={{ ...review }} />
                </CarouselItem>
              ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
