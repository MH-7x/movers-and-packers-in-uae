"use client";
import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import GoogleReviewCard from "@/public/GoogleReviewCard";
import { Button } from "./ui/button";

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
    <section className="mt-20 max-w-6xl md:px-0 px-3  mx-auto" dir="ltr">
      <div className="flex items-center justify-center text-center flex-col">
        <h2 className="font-bold whitespace-normal md:text-5xl text-3xl wrap-break-word">
          What Our Customers Say
        </h2>

        <div className="flex md:flex-row flex-col gap-3 mt-5 items-center justify-center">
          <div className="flex gap-x-1 ">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-yellow-400" />
              ))}
          </div>
          <p className="font-medium block">5 Stars Google Reviews</p>
          <Button
            variant={"outline"}
            size={"sm"}
            link="https://www.google.com/maps/place/Movers+and+Packers+in+UAE+%D9%86%D9%82%D9%84+%D8%A7%D9%84%D8%A3%D8%AB%D8%A7%D8%AB+%D9%81%D9%8A+%D8%A7%D9%84%D8%A5%D9%85%D8%A7%D8%B1%D8%A7%D8%AA%E2%80%AD/@25.1742976,54.7599089,10z/data=!4m12!1m2!2m1!1zbW92ZXJzIGFuZCBwYWNrZXJzIGluIHVhZSDZhtmC2YQg2KfZhNij2KvYp9irINmB2Yog2KfZhNil2YXYp9ix2KfYquKArQ!3m8!1s0x3e5f67f26b9647f1:0x51a249f2372b6e1b!8m2!3d25.1742976!4d55.3366911!9m1!1b1!15sCkZtb3ZlcnMgYW5kIHBhY2tlcnMgaW4gdWFlINmG2YLZhCDYp9mE2KPYq9in2Ksg2YHZiiDYp9mE2KXZhdin2LHYp9iq4oCtkgEObW92aW5nX2NvbXBhbnngAQA!16s%2Fg%2F11n9c7k8qv?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D"
            className="bg-blue-600 text-white"
            rel="noopener noreferrer"
          >
            Read All Reviews
          </Button>
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
