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
      "They moved our villa in Al Barsha without a single scratch on anything. The team was fast, polite, and the price was exactly what was quoted.",
    image: "/ava/32.jpg",
  },
  {
    name: "Priya Nambiar",
    time: "1 month ago",
    star: 5,
    review:
      "Booked them for a last-minute apartment move in Sharjah and they sorted everything same day. Honestly did not expect it to go that smoothly.",

    image: "/ava/44.jpg",
  },
  {
    name: "Omar Farouq",
    time: "3 weeks ago",
    star: 5,
    review:
      "Used them twice now — once for home shifting and once for office relocation. Both times no hidden charges, no drama, just done properly.",

    image: "/ava/86.jpg",
  },
  {
    name: "Sarah Mitchell",
    time: "5 weeks ago",
    star: 5,
    review:
      "The packing team wrapped everything carefully and labelled every box by room. Unpacking at the new place took half the time because of it.",

    image: "/ava/68.jpg",
  },
  {
    name: "Tariq Hussain",
    time: "2 months ago",
    star: 5,
    review:
      "Moved from Dubai to Ras Al Khaimah and was worried about the distance but they handled it without any issues. Everything arrived in perfect condition.",

    image: "/ava/22.jpg",
  },
  {
    name: "Fatima Al Hashimi",
    time: "1 month ago",
    star: 5,
    review:
      "They moved our entire office over a weekend so we were up and running Monday morning. The team knew what they were doing.",

    image: "/ava/90.jpg",
  },
  {
    name: "Ravi Menon",
    time: "3 weeks ago",
    star: 5,
    review:
      "Good experience from start to finish. The quote was clear, the crew showed up on time, and I only paid once everything was in place.",

    image: "/ava/54.jpg",
  },
  {
    name: "Aisha Qasim",
    time: "6 weeks ago",
    star: 5,
    review:
      "Had a few heavy items including a large safe and they managed it without any fuss. Would not use anyone else for moving in Abu Dhabi.",

    image: "/ava/29.jpg",
  },
];
export function ReviewSection() {
  return (
    <section className="mt-20 max-w-6xl md:px-0 px-3  mx-auto">
      <div className="flex items-center justify-center text-center flex-col">
        <h2 className="font-bold whitespace-normal md:text-5xl text-4xl! wrap-break-word">
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
          <p className="font-medium">1000+ Google Reviews</p>
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
          {googleReviews.map((review, index) => (
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
